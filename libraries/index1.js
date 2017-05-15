/**
 * Home screen.
 * Here to redirect to demo page.
 */
'use strict';
import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import BasePage from './components/_base/BasePage'
import Button from './components/button'

class HomeScreen extends BasePage {

  render() {
    const {
      navigate
    } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Button 
          onPress={() => navigate('ButtonScreen',{title:'Button Demo'})}
          text={'Button'} 
          type={'default'} 
          size={'large'}
          containerStyle={styles.btnContainerStyle}
        />
        <Button 
          onPress={() => navigate('ModalScreen',{title:'Modal Demo'})}
          text={'Modal'} 
          type={'default'} 
          size={'large'}
          containerStyle={styles.btnContainerStyle}
        />
        <Button 
          onPress={() => navigate('IconScreen',{title:'Icon Demo'})}
          text={'Icon'} 
          type={'default'} 
          size={'large'}
          containerStyle={styles.btnContainerStyle}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
    backgroundColor: '#fff'
  },
  btnContainerStyle: {
    marginLeft: 6,
    marginRight: 6,
    marginTop: 6
  },
})

export default HomeScreen;