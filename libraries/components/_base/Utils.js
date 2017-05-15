import React, {Component} from "react";
import {StyleSheet, PixelRatio, NativeModules, Platform, AsyncStorage} from "react-native";
import Constants from "./Constants";

let CommonBridgeModule = NativeModules.CommonBridgeModule;

let CommonBridge = {
    BundlePath: CommonBridgeModule.BundlePath,
    
    isAndroid() {
        return Platform.OS == 'android';
    },

    isIOS() {
        return Platform.OS == 'ios';
    },

    isWeb() {
        return Platform.OS == 'web';
    },
    isWeiXin(){

        if(this.isweb()){
            var ua = window.navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i) == 'micromessenger'){
                return true;
            }else{
                return false;
            }

        }else{
           //RN 下直接返回false
            return false ;
        }
        
    },
    
}

export default CommonBridge;
