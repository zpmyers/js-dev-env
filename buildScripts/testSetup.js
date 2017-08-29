//This file is not transpiled so must use normal js

//Register Babel 
require('babel-register')();

//Disable webpack features that mocha doesn't understand
require.extensions['.css'] = function() {};