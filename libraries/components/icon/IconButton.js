/**
 * Icon Button.
 * Support setting normalInamge,pressedImage and disabledImage.
 */

'use strict';

import React, {
    Component,
    PropTypes
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    PixelRatio,
    TouchableWithoutFeedback,
} from 'react-native';

import Icon from '../icon';

export default class IconButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buttonPressed: false,
            disabled: false,
        }
    }

    static propTypes = {
        style:View.propTypes.style,
        disabled: PropTypes.bool,
        onPress: PropTypes.func,
        normalImage: PropTypes.string,
        pressedImage: PropTypes.string,
        disabledImage: PropTypes.string,
    }

    static defaultProps = {
        style:null,
        disabled:false,
        onPress: null,
        normalImage: 'Loading',
        pressedImage: '',
        disabledImage: '',
    }

    componentWillReceiveProps(nextProps) {
        this.setDisabled(nextProps.disabled);
    }

    componentWillMount() {
        this.setDisabled(this.props.disabled);
    }

    setDisabled(disabled) {
        if (this.state.disabled == disabled) {
            return;
        }

        this.setState({
            disabled: disabled,
        });
    }

    buttonPressIn() {
        this.setState({
            buttonPressed: true
        });
    }

    buttonPressOut() {
        this.setState({
            buttonPressed: false
        });
    }

    isButtonPressed() {
        return this.state.buttonPressed;
    }

    render() {

        let {
            style,
            disabled,
            onPress,
            normalImage,
            pressedImage,
            disabledImage,   
        } = this.props;

        let source = normalImage;

        if (this.state.disabled) {
            if (disabledImage) {
                source = disabledImage;
            }
            return (
                <Icon
                    style={style}
                    type={source} />
            );
        } else {
            if (this.isButtonPressed() && pressedImage) {
                source = pressedImage;
            }
            return (
                <TouchableWithoutFeedback
                    onPress={this.state.disabled?null:onPress}
                    onPressIn={this.buttonPressIn.bind(this)}
                    onPressOut={this.buttonPressOut.bind(this)}>
                    <View>
                        <Icon
                            style={style}
                            type={source} />
                    </View>
                </TouchableWithoutFeedback>
            );
        }
    }
}