import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';
import React, { useEffect, useRef } from 'react';
import NotificationPopup from 'react-native-push-notification-popup';

const PushNotification = (props) => {
  const popup = useRef(null);

  useEffect(() => {
    checkPermission();

    /*
     * Notification caused app to open from background state:
     * */
    messaging().onNotificationOpenedApp((notificationOpen) => {
      const { title, body, data } = notificationOpen.notification;
      console.log(title, body, data);
      popup.current.show({ title, body });
    });

    /*
     * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
     * */
    messaging()
      .getInitialNotification()
      .then((notificationOpen) => {
        if (notificationOpen) {
          const { title, body, data } = notificationOpen.notification;
          popup.current.show({ title, body });
        }
      });

    messaging().onMessage((message) => {
      //process data message
      console.log(message);
    });
  }, []);

  const getToken = async () => {
    var fcm_token = await messaging().getToken();
    await AsyncStorage.setItem('@fcm_token', fcm_token);
  };

  const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    let fcm_token = await AsyncStorage.getItem('@fcm_token');
    console.log(getToken(), 'fcm_token', fcm_token)
    if (enabled && !fcm_token) {
      getToken();
      console.log(getToken(), 'fcm_token', fcm_token)
    } else {
      requestPermission();
    }
  };

  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      // User has authorized
      getToken();
    } catch (error) {
      // User has rejected permissions
    }
  };

  return <NotificationPopup ref={popup} />;
};

export default (PushNotification);
