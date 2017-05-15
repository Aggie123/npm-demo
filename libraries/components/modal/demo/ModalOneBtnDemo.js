/**
 * Commonly used modal Demo with one button in the footer
 */
'use strict';

import React, {
    Component,
    PropTypes
} from 'react';
import {
    PixelRatio,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Text,
    TouchableHighlight,
} from 'react-native';

import BaseModal from '../BaseModal';
import Modal from '../';
import Button from '../../button';
import {
    styles
} from '../style';

export default class ModalOneBtnDemo extends BaseModal {

    render() {

        return (
            <View>
        <Button 
          onPress={this.show} 
          text={'ModalOneDemo'}
          type={'default'} 
          size={'large'}
          containerStyle={{}}/>
        <Modal 
          visible={this.state.visible}
          maskClosable={true}
          onRequestClose={this.dismiss}
          dismiss={this.dismiss}
          title={'I am title'}
          footer={<Button text={'关闭'} onPress={this.dismiss} type={'thr'} size={'large'} containerStyle={styles.footerBtn}/>} 
          >
          
          <View style={{padding:10}}>
            <Text>This is content.This is content.This is content.This is content.This is content.This is content.</Text>
          </View>
            
        </Modal>
      </View>
        );
    }
}