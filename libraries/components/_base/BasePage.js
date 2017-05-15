'use strict';

import React, {
    Component
} from 'react';
import {Text} from 'react-native';

class BasePage extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions =({navigation})=>({
        title: navigation.state.params.title,
        //headerRight: (<Text>right</Text>),
    });
}

export default BasePage;
