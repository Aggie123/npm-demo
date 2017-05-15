'use strict';
import React, {Component} from 'react';
import {Image, View} from 'react-native';

let loadingImage= require('../../res/imgs/loading.png');

export default class MJImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingImageEnd: false
        }
    }
    componentDidMount() {
        this.setState({ loadingImageEnd: true });
    }
    render() {
        if (this.state.loadingImageEnd) {
            return (
                <Image  {...this.props} />
            )
        } else {
            return (
                <View style={[this.props.style,{justifyContent:'center',alignItems:'center'}]}>
                    <Image style={{height:'100%',overflow:'hidden'}} source={loadingImage} />
                </View>
            )
        }
    }
}