'use strict';

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_Breakpoint = require('../styles/breakpoints').babelPluginFlowReactPropTypes_proptype_Breakpoint || require('prop-types').any;

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_HiddenProps', {
  value: {
    children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    className: require('prop-types').string,
    only: require('prop-types').oneOfType([typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Breakpoint), require('prop-types').arrayOf(typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Breakpoint))]),
    xsUp: require('prop-types').bool,
    smUp: require('prop-types').bool,
    mdUp: require('prop-types').bool,
    lgUp: require('prop-types').bool,
    xlUp: require('prop-types').bool,
    xsDown: require('prop-types').bool,
    smDown: require('prop-types').bool,
    mdDown: require('prop-types').bool,
    lgDown: require('prop-types').bool,
    xlDown: require('prop-types').bool
  },
  configurable: true
});