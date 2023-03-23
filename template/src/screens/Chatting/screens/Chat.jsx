import { useRoute } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useInfiniteQuery, useMutation } from 'react-query';
import { chatService, User } from '../service/chat';
import { spreadArray } from '../utility/spreadArray';

export const Chat = () => {
  const route = useRoute();
  console.log(route, 'route')
  // const { user } = route.params;
  const user = {
    roomId: '001',
    username: 'UserName'
  };
  const PER_PAGE = 10
  const queryKey = ['messages', user.roomId];
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState({});
  const [hasPreviousMessage, setHasPreviousMessage] = useState(false);

  useEffect(() => {
    getHandleMessage()
  }, [])

  const getHandleMessage = async () => {
    const messages = await chatService.getMessages({ queryKey })
    console.log(messages, 'chatService')
    setMessageList(messages)
  }

  // const {
  //   data,
  //   fetchNextPage: fetchPreviousMessage,
  //   isFetchingNextPage: fetchingMessage,
  // } = useInfiniteQuery(queryKey, chatService.getMessages, {
  //   getNextPageParam: lp => {
  //     if (lp.length) {
  //       return lp?.[lp.length - 1].createdAt;
  //     }
  //   },
  // });

  // const sendMutation = useMutation(chatService.sendMessage, {
  //   onMutate: () => {
  //     setMessage('');
  //   },
  // });

  const giftedMessages = messageList.map(message => {
    return {
      _id: message?.id,
      text: message?.text,
      createdAt: message?.createdAt,
      user: {
        _id: message?.username,
        name: message?.username,
      },
    };
  });

  useEffect(() => {
    attachMessageListener(queryKey)
  }, [user.roomId]);


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
            setNewMessage(message);
          }
        }
      });
  };

  useEffect(() => {
    if (newMessage?.id) {
      const messages = messageList;
      messages.shift(newMessage);
      setMessageList(messages)
      // setMessage({})
    }
  }, [newMessage])




  // const lastDate = messages?.[messages.length - 1]?.createdAt;

  // useEffect(() => {
  //   const getNextPage = async () => {
  //     const np = await chatService.hasMessageBefore(user.roomId, lastDate);
  //     setHasPreviousMessage(np);
  //   };
  //   if (lastDate && user.roomId) {
  //     getNextPage();
  //   }
  // }, [lastDate, user.roomId]);

  const onSend = (() => {
    chatService.sendMessage({
      roomId: user?.roomId,
      text: message,
      username: user?.username,
    })
    // sendMutation.mutate({
    //   roomId: user?.roomId,
    //   text: message,
    //   username: user?.username,
    // });
  });

  return (
    <View style={styles.container}>
      <GiftedChat
        text={message}
        onInputTextChanged={val => {
          setMessage(val);
        }}
        // loadEarlier={hasPreviousMessage}
        // isLoadingEarlier={fetchingMessage}
        // onLoadEarlier={fetchPreviousMessage}
        messages={giftedMessages}
        onSend={() => onSend()}
        user={{
          _id: user?.username,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
});
