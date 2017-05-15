
import {
    ToastAndroid,
    Platform,
    NativeModules
} from 'react-native';


export default class Toast {

    static show (msg) {
        if (typeof msg != 'string') {
            console.log('Toast:', msg);
            return;
        }
        if (Platform.OS == 'android'||Platform.OS=='web') {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        } else {
            NativeModules.Toast.show({ message: msg, duration: "short", position: "center" });
        }
    }
}
