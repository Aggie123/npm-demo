/**
 * Commonly used modal Demo with margin around and position center of the screen.
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

export default class ModalDemoWithMargin extends BaseModal {

    render() {
        return (
            <View>
        <Button 
          onPress={this.show} 
          text={'ModalDemoWithMargin'}
          type={'default'} 
          size={'large'}
          containerStyle={{borderRadius:0}}/>
        <Modal 
          visible={this.state.visible}
          maskClosable={true}
          onRequestClose={this.dismiss}
          maskStyle={styles.maskVerticalCenter}
          containerStyle={styles.containerWithMargin}
          dismiss={this.dismiss}
          title={'I am title'}
          footer={<Button text={'关闭'} onPress={this.dismiss} type={'sec'} size={'large'} containerStyle={styles.footerBtn}/>}
          >
          
          <View style={{padding:10}}>
            <Text>This is content.This is content.This is content.This is content.This is content.This is content.</Text>
          </View>
            
        </Modal>
      </View>
        );
    }
}