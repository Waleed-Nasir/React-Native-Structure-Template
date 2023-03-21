// import { queryClient } from '../config/queryClient';
import firestore from '@react-native-firebase/firestore';
import { spreadArray } from '../utility/spreadArray';


const PER_PAGE = 10;

const sendMessage = async message => {
  console.log('final', message);
  const docRef = firestore()
    .collection(`Chats/${message.roomId}/messages`)
    .doc();
  await docRef.set({
    ...message,
    id: docRef.id,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
};

const getMessages = async key => {
  const roomId = key.queryKey[1];
  let date = new Date();
  if (key.pageParam) {
    date = key.pageParam;
  }

  const snapshot = await firestore()
    .collection(`Chats/${roomId}/messages`)
    .orderBy('createdAt', 'desc')
    .where('createdAt', '<', date)
    .limit(PER_PAGE)
    .get();
  const retMessage = [];
  for (const message of snapshot.docs) {
    const data = message.data();
    retMessage.push({ ...data, createdAt: data.createdAt.toDate() });
  }
  return retMessage;
};

const hasMessageBefore = async (roomId, date) => {
  if (!date) {
    return false;
  }
  const data = await firestore()
    .collection(`Chats/${roomId}/messages`)
    .orderBy('createdAt', 'desc')
    .where('createdAt', '<', date)
    .limit(1)
    .get();
  return !!data.docs.length;
};

const attachMessageListener = (key) => {
  const roomId = key[1];
  return firestore()
    .collection(`Chats/${roomId}/messages`)
    .orderBy('createdAt', 'desc')
    .where('createdAt', '>', new Date())
    .onSnapshot(snap => {
      const changes = snap.docChanges();
      for (const change of changes) {
        if (change.type === 'added') {
          const data = change.doc.data();
          const message = {
            ...data,
            createdAt: data.createdAt.toDate(),
          };
          addMessageToQueryCache(key, message);
        }
      }
    });
};

const addMessageToQueryCache = (key, message) => {
  // const cache = queryClient.getQueryData(key);
  const messages = spreadArray();
  messages.unshift(message);

  const newData = [];
  for (let i = 0; i < messages.length; i += PER_PAGE) {
    const currentPage = messages.slice(i, i + PER_PAGE);
    newData.push(currentPage);
  }
  return newData
  // queryClient.setQueryData(key, data => {
  //   return {
  //     pageParams: data?.pageParams || [],
  //     pages: newData,
  //   };
  // });
};

export const chatService = {
  sendMessage,
  getMessages,
  attachMessageListener,
  hasMessageBefore,
  PER_PAGE,
};
