'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SwitchBase = require('../internal/SwitchBase');

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any; //  weak

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiSwitch', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative'
    },
    bar: {
      borderRadius: 7,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -7,
      left: '50%',
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? '#000' : '#fff',
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    // For SwitchBase
    default: {
      zIndex: 1,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {
      color: theme.palette.primary[500],
      transform: 'translateX(14px)',
      '& + $bar': {
        backgroundColor: theme.palette.primary[500],
        opacity: 0.5
      }
    },
    disabled: {
      color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
      '& + $bar': {
        backgroundColor: theme.palette.type === 'light' ? '#000' : '#fff',
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    }
  };
});

var SwitchBase = (0, _SwitchBase2.default)({ styleSheet: styleSheet });

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Props', {
  value: {
    checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
    checkedClassName: require('prop-types').string,
    checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    classes: require('prop-types').object.isRequired,
    className: require('prop-types').string,
    defaultChecked: require('prop-types').bool,
    disabled: require('prop-types').bool,
    disabledClassName: require('prop-types').string,
    disableRipple: require('prop-types').bool,
    icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    inputProps: require('prop-types').object,
    inputRef: require('prop-types').func,
    name: require('prop-types').string,
    onChange: require('prop-types').func,
    tabIndex: require('prop-types').string,
    value: require('prop-types').string
  },
  configurable: true
});


function Switch(props) {
  var _props$classes = props.classes,
      root = _props$classes.root,
      classes = (0, _objectWithoutProperties3.default)(_props$classes, ['root']),
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className']);


  var icon = _react2.default.createElement('div', { className: classes.icon });

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(root, className) },
    _react2.default.createElement(SwitchBase, (0, _extends3.default)({ icon: icon, classes: classes, checkedIcon: icon }, other)),
    _react2.default.createElement('div', { className: classes.bar })
  );
}

Switch.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
  checkedClassName: require('prop-types').string,
  checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string,
  defaultChecked: require('prop-types').bool,
  disabled: require('prop-types').bool,
  disabledClassName: require('prop-types').string,
  disableRipple: require('prop-types').bool,
  icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  inputProps: require('prop-types').object,
  inputRef: require('prop-types').func,
  name: require('prop-types').string,
  onChange: require('prop-types').func,
  tabIndex: require('prop-types').string,
  value: require('prop-types').string
} : {};
exports.default = (0, _withStyles2.default)(styleSheet)(Switch);