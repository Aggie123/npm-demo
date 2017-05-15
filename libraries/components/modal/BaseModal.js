/**
 * @BaseModal
 * Each Modal shall extends this BaseModal component to share the common method.
 * This's the base component for modal,extracting the common state and show dismiss method of modal,since es6 abondon mixins.
 */
'use strict';

import React, {
  Component,
  PropTypes
} from 'react'

export default class BaseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /** each modal have its own visible state to control its own visibiliby*/
      visible: false,
    };
  }

  /** 
  method to show the modal
  */
  show=()=> {
    if (this.state.visible) {
      return;
    }
    this.setState({
      visible: true
    });
  }

  /** 
  method to dismiss the modal
  */
  dismiss=()=> {
    if (!this.state.visible) {
      return;
    }
    this.setState({
      visible: false
    });
  }

  /** 
  method to set the visible state of modal
  */
  setvisible=(visible)=>{
    this.setState({
      visible
    });
  }

}
