/**
 * Button Demo main page.
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import BasePage from '../../_base/BasePage'
import defaultStyles from '../../../style/theme/default';
import Toast from '../../toast';
import Button from '../';

class ButtonScreen extends BasePage {

    showToast(){
        Toast.show('Oops, U pressed me!');
    }

    render() {
        return (
            <View style={styles.container}>    
                <Text>Button Type:</Text> 
                <View style={{flexDirection:'row',marginTop:10}}> 
                    <Button onPress={this.showToast} text={'default'} type={'default'} containerStyle={{marginLeft:10}}/>
                    <Button onPress={this.showToast} text={'warn'} type={'warn'} containerStyle={{marginLeft:10}}/>
                    <Button onPress={this.showToast} text={'sec'} type={'sec'} containerStyle={{marginLeft:10}}/>
                    <Button onPress={this.showToast} text={'thr'} type={'thr'} containerStyle={{marginLeft:10}}/>
                </View>

                <Text>Button disabled:</Text> 
                <View style={{flexDirection:'row',marginTop:10}}> 
                    <Button onPress={this.showToast} text={'default'} type={'default'} containerStyle={{marginLeft:10}} disabled/>
                    <Button onPress={this.showToast} text={'warn'} type={'warn'} containerStyle={{marginLeft:10}} disabled/>
                    <Button onPress={this.showToast} text={'sec'} type={'sec'} containerStyle={{marginLeft:10}} disabled/>
                    <Button onPress={this.showToast} text={'thr'} type={'thr'} containerStyle={{marginLeft:10}} disabled/>
                </View>

                <Text>Button Size:</Text> 
                <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
                    <Button onPress={this.showToast} text={'default'} type={'default'} size={'default'} containerStyle={{marginLeft:10}}/>
                    <Button onPress={this.showToast} text={'small'} type={'default'} size={'small'} containerStyle={{marginLeft:10}}/>
                    <Button onPress={this.showToast} text={'large'} type={'default'} size={'large'} containerStyle={{marginLeft:10}}/>
                </View>

                <Button onPress={this.showToast} text={'warn'} type={'warn'} size={'large'} containerStyle={{marginTop:10,borderRadius:0}}/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        paddingTop:20,
        backgroundColor:'#fff'
    },
})

export default ButtonScreen;