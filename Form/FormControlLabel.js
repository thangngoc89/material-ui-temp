'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;
/* eslint-disable jsx-a11y/label-has-for */

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiFormControlLabel', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // Remove grey highlight
      WebkitTapHighlightColor: theme.palette.common.transparent
    },
    disabled: {
      color: theme.palette.text.disabled,
      cursor: 'default'
    },
    hasLabel: {
      marginLeft: -12,
      marginRight: theme.spacing.unit * 2 // used for row presentation of radio/checkbox
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      userSelect: 'none'
    }
  };
});

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Props', {
  value: {
    checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
    classes: require('prop-types').object.isRequired,
    className: require('prop-types').string,
    control: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    disabled: require('prop-types').bool,
    inputRef: require('prop-types').func,
    label: require('prop-types').string.isRequired,
    name: require('prop-types').string,
    onChange: require('prop-types').func,
    value: require('prop-types').string
  },
  configurable: true
});


function FormControlLabel(props) {
  var _classNames;

  var checked = props.checked,
      classes = props.classes,
      classNameProp = props.className,
      control = props.control,
      disabled = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['checked', 'classes', 'className', 'control', 'disabled', 'inputRef', 'label', 'name', 'onChange', 'value']);


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.hasLabel, label && label.length), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

  return _react2.default.createElement(
    'label',
    (0, _extends3.default)({ className: className }, other),
    (0, _react.cloneElement)(control, {
      disabled: typeof control.props.disabled === 'undefined' ? disabled : control.props.disabled,
      checked: typeof control.props.checked === 'undefined' ? checked : control.props.checked,
      name: control.props.name || name,
      onChange: control.props.onChange || onChange,
      value: control.props.value || value,
      inputRef: control.props.inputRef || inputRef
    }),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      label
    )
  );
}

FormControlLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string,
  control: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
  disabled: require('prop-types').bool,
  inputRef: require('prop-types').func,
  label: require('prop-types').string.isRequired,
  name: require('prop-types').string,
  onChange: require('prop-types').func,
  value: require('prop-types').string
} : {};
FormControlLabel.defaultProps = {
  disabled: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(FormControlLabel);