import { Platform } from 'react-native';
import { check, PERMISSIONS, RESULTS ,request} from 'react-native-permissions';

const os = Platform.OS;

// define your all permission here

const cameraPermission = os == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

export const checkCameraPermission = () => {
  check(cameraPermission)
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
          request(PERMISSIONS.IOS.CAMERA || PERMISSIONS.ANDROID.CAMERA)
          console.log('The permission has not been requested / is denied but requestable');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch((error) => {
      // …
    });
};

// export default {
//   checkCameraPermission,
// };
