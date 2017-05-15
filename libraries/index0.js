/**
 * Component Domo main page.
 * Support setting normalInamge,pressedImage and disabledImage.
 */

'use strict';
import React, {
    Component
} from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    TextInput,
    AsyncStorage,
    TouchableHighlight,
    Linking,
    PixelRatio,
} from 'react-native';

import defaultStyles from './style/theme/default';
import fontStyle from './style/theme/fontStyle';
import Button from './components/button';
import ModalDemo from './components/modal/demo/ModalDemo';
import ModalOneBtnDemo from './components/modal/demo/ModalOneBtnDemo';
import ModalTwoBtnDemo from './components/modal/demo/ModalTwoBtnDemo';
import ModalDemoWithMargin from './components/modal/demo/ModalDemoWithMargin';
import Icon from './components/icon';
import ImageMap from './components/icon/ImageMap';
import Toast from './components/toast';

class Mjui extends Component {
    constructor(props) {
        super(props);
    }

    showToast(){
        Toast.show('Oops, U pressed me!');
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={{}}
                style={styles.container}>
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Button</Text>
                    
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

                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Modal</Text>
                    <ModalDemo />
                    <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                        <ModalOneBtnDemo />
                        <ModalTwoBtnDemo />
                    </View>
                    <View style={{marginTop:10}}>
                        <ModalDemoWithMargin />
                    </View>
                </View>

                <View style={[styles.section]}>
                    <Text style={[styles.sectionHeader]}>Icon</Text>
                    <Text>NormalIcon</Text>
                    <View style={{flexDirection:'row',flexWrap:'wrap',paddingLeft:5}}>
                        {
                            Object.keys(ImageMap).map((value,index)=>{
                                return (
                                    <View style={{alignItems:'center',justifyContent:'center',height:50,width:50,}} key={index}>
                                        <Icon type={`${value}`} style={{height:24,width:24}}/>
                                        <Text style={{fontSize:fontStyle.font6}}>{value}</Text>
                                    </View>
                                    )
                            })
                        }
                    </View>

                    <Text>IconButton</Text>
                    <View style={{marginTop:10,flexDirection:'row',alignItems:'center'}}> 
                        <Icon.Button 
                            style={{ width: 30, height: 30 }} 
                            normalImage={'HomeNormalCircle'}
                            pressedImage={'HomePressCircle'}
                            onPress={this.showToast}/>
                        <Icon.Button 
                            style={{ width: 35, height: 35 }}
                            normalImage={'BackNormal'}
                            pressedImage={'BackPress'}
                            onPress={this.showToast}/>
                        <Icon.Button 
                            style={{ width: 35, height: 35 }}
                            normalImage={'BackNormalCircle'}
                            pressedImage={'BackPressCircle'}
                            onPress={this.showToast}/>
                        <Icon.Button 
                            style={{ width: 35, height: 35 }}
                            normalImage={'ShareNormalCircle'}
                            pressedImage={'SharePressCircle'}
                            onPress={this.showToast}/>
                        <Icon.Button 
                            style={{ width: 35, height: 35 }}
                            normalImage={'MoreNormal'}
                            pressedImage={'MorePress'}
                            onPress={this.showToast}/>
                        <Icon.Button 
                            style={{ width: 35, height: 35 }}
                            disabled
                            normalImage={'Uncheck'}
                            pressedImage={'Check'}
                            disabledImage={'CheckDisable'}
                            onPress={this.showToast}/> 
                    </View>
                </View>
            </ScrollView>
            
        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width: defaultStyles.view_width, 
        backgroundColor: '#ccc', 
        marginTop:defaultStyles.status_bar_height,
    },
    section:{
        marginBottom:20,
        backgroundColor:'#fff'
    },
    sectionHeader:{
        height:45,
        paddingTop:8,
        paddingBottom:8,
        textAlign:'center',
        justifyContent:'center',
        fontSize:fontStyle.font18,
    },
})

AppRegistry.registerComponent('Mjui', () => Mjui);