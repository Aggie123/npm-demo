/**
 * Common Button.
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    PixelRatio,
} from 'react-native'
import defaultStyle from '../../style/theme/default'
import {
    styles
} from './style'

export default class MJButton extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        text: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
        disabled: PropTypes.bool,
        onPress: PropTypes.func,
        containerStyle: View.propTypes.style,
        textStyle: Text.propTypes.style,
    }

    static defaultProps = {

        text: 'Button',
        /** type: default,warn,sec,thr*/
        type: 'default',
        /** size: large,default,small(no small so far)*/
        size: 'default',
        /** disabled flag*/
        disabled: false,
        /** style for container*/
        containerStyle: null,
        /** style for text*/
        textStyle: null,
    }

    render() {
        let {
            text,
            type,
            size,
            disabled,
            onPress,
            containerStyle,
            textStyle
        } = this.props;

        let containerStyleType = type ? `container_${type}` : 'container_default',
            textStyleType = type ? `text_${type}` : 'text_default',
            containerStyleSize = size ? `container_size_${size}` : 'container_size_default',
            textStyleSize = size ? `text_size_${size}` : 'text_size_default';

        if (disabled) {
            var containerDisabled = type ? `container_disabled_${type}` : 'container_disabled_default',
                textDisabled = type ? `text_disabled_${type}` : 'text_disabled_default';
        }

        let containerStyleDisabled = disabled ? styles[containerDisabled] : {},
            textStyleDisabled = disabled ? styles[textDisabled] : {};

        return (
            <TouchableHighlight 
        onPress={disabled?null:onPress} 
        underlayColor={defaultStyle.fill_touchable_bg}
        style={[styles.container,styles[containerStyleType],styles[containerStyleSize],containerStyleDisabled,containerStyle?containerStyle:null]}>
        <Text style={[styles.text,styles[textStyleType],styles[textStyleSize],textStyleDisabled,textStyle?textStyle:null]}>{this.props.text}</Text>
      </TouchableHighlight>
        )
    }
}