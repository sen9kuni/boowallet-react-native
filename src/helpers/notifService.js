import PushNotification from 'react-native-push-notification';
import {setToken} from '../redux/reducers/notification';
import {store} from '../redux/store';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
    if (store.getState().notification.fcm_token === null) {
      store.dispatch(setToken(token.token));
    }
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    notification.finish(() => {
      console.log('finish');
    });
  },
});

PushNotification.createChannel(
  {
    channelId: 'general',
    channelName: 'General Notification',
  },
  created => console.log(`createChannel returned '${created}'`),
);
