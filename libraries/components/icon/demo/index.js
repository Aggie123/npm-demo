/**
 * Icon Demo main page.
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
import ImageMap from '../ImageMap';
import Toast from '../../toast';
import Icon from '../';
const IconButton=Icon.Button;

class IconScreen extends BasePage {

    showToast(){
        Toast.show('Oops, U pressed me!');
    }

    render() {
        return (

           <View style={[styles.container]}>
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
                    <IconButton 
                        style={{ width: 30, height: 30 }} 
                        normalImage={'HomeNormalCircle'}
                        pressedImage={'HomePressCircle'}
                        onPress={this.showToast}/>
                    <IconButton 
                        style={{ width: 35, height: 35 }}
                        normalImage={'BackNormal'}
                        pressedImage={'BackPress'}
                        onPress={this.showToast}/>
                    <IconButton 
                        style={{ width: 35, height: 35 }}
                        normalImage={'BackNormalCircle'}
                        pressedImage={'BackPressCircle'}
                        onPress={this.showToast}/>
                    <IconButton 
                        style={{ width: 35, height: 35 }}
                        normalImage={'ShareNormalCircle'}
                        pressedImage={'SharePressCircle'}
                        onPress={this.showToast}/>
                    <IconButton 
                        style={{ width: 35, height: 35 }}
                        normalImage={'MoreNormal'}
                        pressedImage={'MorePress'}
                        onPress={this.showToast}/>
                    <IconButton 
                        style={{ width: 35, height: 35 }}
                        disabled
                        normalImage={'Uncheck'}
                        pressedImage={'Check'}
                        disabledImage={'CheckDisable'}
                        onPress={this.showToast}/> 
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

export default IconScreen;