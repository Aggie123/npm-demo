/**
* Hello World
* @function hello
**/
const hello = function(key){
	//return 'hello';
    console.log('Hello World!');
};

exports.hello     = hello;


'use strict';

const invariant = require('fbjs/lib/invariant');

// Export React, plus some native additions.
const NpmDemo = {
  // Components
  get AccessibilityInfo() { return require('AccessibilityInfo'); },
  get ActivityIndicator() { return require('ActivityIndicator'); },
}

module.exports = NpmDemo;