/**
 * Common Modal
 */

'use strict';

import React, {
  Component,
  PropTypes 
} from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Button from '../button';
import Toast from '../toast';
import defaultStyle from '../../style/theme/default';
import fontStyle from '../../style/theme/fontStyle';
import {styles} from './style';

export default class MJModal extends Component {
  constructor(props) {
      super(props);
  }

  static propTypes = {
    /** same as RN modal if maskCloasable*/
    visible: PropTypes.bool,
    /** same as RN modal if maskCloasable*/
    transparent:PropTypes.bool,
    /** same as RN modal if maskCloasable*/
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
    /** same as RN modal if maskCloasable*/
    onRequestClose: Platform.OS === 'android' ? PropTypes.func.isRequired : PropTypes.func,
    /** if closable by tapping on the modal mask if maskCloasable*/
    maskClosable:PropTypes.bool,
    /** dismiss method to close the modal if maskCloasable*/
    dismiss:PropTypes.func,
    /** style for modal mask, used to set modal position (top,center,bottom) and to set modal content's margin if maskCloasable*/
    maskStyle:View.propTypes.style,
    /** style for modal content container, like border-radius,etc. if maskCloasable*/
    containerStyle:View.propTypes.style,
    /** title of modal content if maskCloasable*/
    title:PropTypes.string,
    /** title text style for modal content if maskCloasable*/
    titleTxtStyle:Text.propTypes.style,
    /** body of modal content if maskCloasable*/
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ]),
    /** footer of modal content if maskCloasable*/
    footer: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array
    ]),
  }

  static defaultProps = {
    visible: false,
    transparent:false,
    animationType:'slide',
    onRequestClose:null,
    maskClosable:true,
    dismiss:null, 
    maskStyle:null,
    containerStyle:null,
    title:null,
    titleTxtStyle:null,
    children:null,
    footer:null,
  }

  /** method for mask tapping if maskCloasable prop is true*/
  onMaskClose = () => {
    if (this.props.maskClosable && this.props.dismiss) {
      this.props.dismiss();
    }
  }

  render() {
    let { 
      visible,
      transparent,
      animationType,
      onRequestClose,
      maskClosable,
      dismiss,
      maskStyle,
      containerStyle,
      title,
      titleTxtStyle,
      children,
      footer
    } = this.props;

    /** Notification if modal content is empty*/
    if(!title&&!children&&!footer){
      Toast.show('Modal  content is empty!');
      return;
    }

    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={visible}
        onRequestClose={onRequestClose?onRequestClose:()=>{dismiss()}}
        >
        <TouchableOpacity onPress={()=>this.onMaskClose()} style={[styles.mask,maskStyle]} underlayColor={defaultStyle.fill_mask} activeOpacity={1}>
          <View style={[styles.container,containerStyle?containerStyle:null]}>
          {
            title ?
              <View style={styles.titleContainer}>
                <Text style={[styles.titleTxt,titleTxtStyle]}>{title}</Text>
              </View> 
              : null
          }
          
          {children?
            <View style={styles.contentContainer}>
              {children}
            </View>
          :null  
          }

          <View style={styles.footerContainer}>
            {footer?footer:null}
          </View>
          
        </View>
        </TouchableOpacity>
      </Modal>
    )
  }
}