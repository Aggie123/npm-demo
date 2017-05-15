/**
 * Normal Icon.
 * Center to manage Icon.
 * All Icon shall register at ./ImageMap.js.
 * All the type see at ./ImageMap.js.
 *
 * TODO: To set MJ icon font library to manage icons as font for better management and easier use.
 */

'use strict'
import React, {
    Component,
    PropTypes
} from 'react';
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import defaultStyle from '../../style/theme/default'
import fontStyle from '../../style/theme/fontStyle'
import {
    styles
} from './style'
import ImageMap from './ImageMap'

MJIcon.propTypes = {
    /*Icon's type to get the source of Icon, value from ImageMap,*/
    type: PropTypes.string,
    /*style for the Icon's Image node*/
    style: View.propTypes.style
};

MJIcon.defaultProps = {
    type: 'Loading',
    style: {
        width: 24,
        height: 24
    },
};

function MJIcon({
    type,
    style
}) {

    let source = ImageMap[`${type}`];

    return (
        <Image
        style={style}
        resizeMode={"contain"}
        source={source} />
    )

}

export default MJIcon;