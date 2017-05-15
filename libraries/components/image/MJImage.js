'use strict';

import React, {PureComponent} from 'react';
import {Image, View, Platform} from 'react-native';

let loadingImage= require('../../res/imgs/loading.png');


export default class MJImage extends PureComponent {

    static propTypes = {
        source: React.PropTypes.object,
        style: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array,
        ])
    };

    constructor(props) {
        super(props);
        this.state = {
            loadingImageEnd: Platform.OS == "android" ? false : true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.loadingImageEnd !== nextState.loadingImageEnd;
    }

    componentWillMount() {
        if (Platform.OS == "android") {
            let source = this.props.source;
            if (source && source.uri) {
                Image.prefetch(source.uri).then(() => {
                    this.setState({loadingImageEnd: true});
                })
            } else {
                this.setState({loadingImageEnd: true});
            }
        }
    }

    render() {
        let source = loadingImage;
        let resizeMode = "center";
        if (this.state.loadingImageEnd) {
            source = this.props.source;
            resizeMode = "cover";
        }
        return <Image style={this.props.style} source={source} resizeMode={resizeMode}/>;
    }
}