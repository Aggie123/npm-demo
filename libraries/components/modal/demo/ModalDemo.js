/**
 * Common Modal Demo.
 */
'use strict';

import React, {
  Component,
  PropTypes
} from 'react'
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

/*Modal shall extends BaseModal to share common show dismiss method of Modal */
export default class ModalDemo extends BaseModal {

  render() {
    return (
      <View>
        <Button 
          onPress={this.show} 
          text={'ModalDemo'}
          type={'default'} 
          size={'large'}
          containerStyle={{}}/>
        <Modal 
          visible={this.state.visible}
          maskClosable={true}
          onRequestClose={this.dismiss}
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