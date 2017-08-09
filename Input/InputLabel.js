'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _value, _ref;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Form = require('../Form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiInputLabel', function (theme) {
  return {
    root: {
      transformOrigin: 'top left'
    },
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, ' + (theme.spacing.unit * 3 - 1) + 'px) scale(1)'
    },
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },
    animated: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },
    disabled: {
      color: theme.palette.input.disabled
    }
  };
});

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Props', {
  value: (_value = {
    disabled: require('prop-types').bool.isRequired,
    disableAnimation: require('prop-types').bool.isRequired,
    children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    classes: require('prop-types').object.isRequired,
    className: require('prop-types').string
  }, (0, _defineProperty3.default)(_value, 'disableAnimation', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'error', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'focused', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'required', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'shrink', require('prop-types').bool), _value),
  configurable: true
});


function InputLabel(props, context) {
  var _classNames;

  var disabled = props.disabled,
      disableAnimation = props.disableAnimation,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      shrinkProp = props.shrink,
      other = (0, _objectWithoutProperties3.default)(props, ['disabled', 'disableAnimation', 'children', 'classes', 'className', 'shrink']);
  var muiFormControl = context.muiFormControl;

  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.dirty || muiFormControl.focused;
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty3.default)(_classNames, classes.shrink, shrink), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

  return _react2.default.createElement(
    _Form.FormLabel,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

InputLabel.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  disabled: require('prop-types').bool.isRequired,
  disableAnimation: require('prop-types').bool.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string
}, (0, _defineProperty3.default)(_ref, 'disableAnimation', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'error', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'focused', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'required', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'shrink', require('prop-types').bool), _ref) : {};
InputLabel.defaultProps = {
  disabled: false,
  disableAnimation: false
};

InputLabel.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styleSheet)(InputLabel);