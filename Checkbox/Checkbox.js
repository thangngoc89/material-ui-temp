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

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _SwitchBase = require('../internal/SwitchBase');

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _indeterminateCheckBox = require('../svg-icons/indeterminate-check-box');

var _indeterminateCheckBox2 = _interopRequireDefault(_indeterminateCheckBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiCheckbox', function (theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {
      color: theme.palette.primary[500]
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
});

var SwitchBase = (0, _SwitchBase2.default)({ styleSheet: styleSheet });

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Props', {
  value: {
    checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
    checkedClassName: require('prop-types').string,
    checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    classes: require('prop-types').object,
    className: require('prop-types').string,
    defaultChecked: require('prop-types').bool,
    disabled: require('prop-types').bool,
    disabledClassName: require('prop-types').string,
    disableRipple: require('prop-types').bool,
    icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    indeterminate: require('prop-types').bool,
    indeterminateIcon: require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)]),
    inputProps: require('prop-types').object,
    inputRef: require('prop-types').func,
    name: require('prop-types').string,
    onChange: require('prop-types').func,
    tabIndex: require('prop-types').string,
    value: require('prop-types').string
  },
  configurable: true
});


function Checkbox(props) {
  var checkedIcon = props.checkedIcon,
      icon = props.icon,
      indeterminate = props.indeterminate,
      indeterminateIcon = props.indeterminateIcon,
      other = (0, _objectWithoutProperties3.default)(props, ['checkedIcon', 'icon', 'indeterminate', 'indeterminateIcon']);


  return _react2.default.createElement(SwitchBase, (0, _extends3.default)({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
  checkedClassName: require('prop-types').string,
  checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object,
  className: require('prop-types').string,
  defaultChecked: require('prop-types').bool,
  disabled: require('prop-types').bool,
  disabledClassName: require('prop-types').string,
  disableRipple: require('prop-types').bool,
  icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  indeterminate: require('prop-types').bool,
  indeterminateIcon: require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)]),
  inputProps: require('prop-types').object,
  inputRef: require('prop-types').func,
  name: require('prop-types').string,
  onChange: require('prop-types').func,
  tabIndex: require('prop-types').string,
  value: require('prop-types').string
} : {};
Checkbox.defaultProps = {
  indeterminate: false,
  indeterminateIcon: _react2.default.createElement(_indeterminateCheckBox2.default, null)
};

exports.default = Checkbox;