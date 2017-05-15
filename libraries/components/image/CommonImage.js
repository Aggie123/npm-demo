'use strict';
import React, {
    PureComponent
} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    PixelRatio,
    TouchableWithoutFeedback,
    TouchableHighlight
} from 'react-native';
import Url from 'url';
import MJImage from './MJImage';

export default class CommonImage extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    getStyle(url) {
        let result = Url.parse(url, true);
        let style = undefined;

        if (this.props.sizeByUrl && result.query && result.query.w && result.query.h) {
            let ratio = 1;
            if (this.props.winWidth) {
                ratio = 1080.0 / this.props.winWidth;
            }
            let qh = Array.isArray(result.query.h) ? result.query.h.pop() : parseInt(result.query.h);
            let qw = Array.isArray(result.query.w) ? result.query.w.pop() : parseInt(result.query.w);

            style = {
                width: qw / ratio,
                height: qh / ratio
            }
        }

        return style;
    }

    render() {
        if (this.props.source && (typeof this.props.source == 'object')) {
            let props = {...this.props};
            let source = props.source;
            if (source.uri && source.uri.startsWith('//')) {
                source.uri = 'http:' + source.uri;

            }
            let object = {
                ...props,
                style: [props.style, this.getStyle(source.uri)]
            };
            return (
                <MJImage ref={component => this._root = component} {...object} />
            );
        } else {
            return (
                <MJImage ref={component => this._root = component} {...this.props} />
            );
        }
    }
}

CommonImage.defaultProps = {
    sizeByUrl: false,
}