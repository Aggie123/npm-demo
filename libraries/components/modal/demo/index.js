/**
 * Modal Demo main page.
 */

'use strict';
import React, {
    Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import BasePage from '../../_base/BasePage'
import fontStyle from '../../../style/theme/fontStyle';
import ModalDemo from './ModalDemo';
import ModalOneBtnDemo from './ModalOneBtnDemo';
import ModalTwoBtnDemo from './ModalTwoBtnDemo';
import ModalDemoWithMargin from './ModalDemoWithMargin';

class ModalScreen extends BasePage {

    render() {
        return (

            <View style={styles.container}>
                <ModalDemo />
                <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <ModalOneBtnDemo />
                    <ModalTwoBtnDemo />
                </View>
                <View style={{marginTop:10}}>
                    <ModalDemoWithMargin />
                </View>
            </View> 

        );
    }

}

const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        backgroundColor:'#fff'
    },
})

export default ModalScreen;