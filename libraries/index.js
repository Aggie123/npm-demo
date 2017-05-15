/**
* Hello World
* @function hello
**/
/*const hello = function(key){
	//return 'hello';
    console.log('Hello World!');
};

exports.hello     = hello;
*/

'use strict';

// Export React, plus some native additions.
const NpmDemo = {
  // Components
  get Button() { return require('./components/button'); },
  get Modal() { return require('./components/modal'); },
}

module.exports = NpmDemo;