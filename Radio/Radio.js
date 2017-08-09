'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioDocs = exports.styleSheet = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _SwitchBase = require('../internal/SwitchBase');

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _radioButtonChecked = require('../svg-icons/radio-button-checked');

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

var _radioButtonUnchecked = require('../svg-icons/radio-button-unchecked');

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any; //  weak

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiRadio', function (theme) {
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

var Radio = (0, _SwitchBase2.default)({
  styleSheet: styleSheet,
  inputType: 'radio',
  defaultIcon: _react2.default.createElement(_radioButtonUnchecked2.default, null),
  defaultCheckedIcon: _react2.default.createElement(_radioButtonChecked2.default, null)
});

Radio.displayName = 'Radio';

exports.default = Radio;


// This is here solely to trigger api doc generation
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
    inputProps: require('prop-types').object,
    inputRef: require('prop-types').func,
    name: require('prop-types').string,
    onChange: require('prop-types').func,
    tabIndex: require('prop-types').string,
    value: require('prop-types').string
  },
  configurable: true
});

var _ref = _react2.default.createElement('span', null);

var RadioDocs = exports.RadioDocs = function RadioDocs(props) {
  return _ref;
}; // eslint-disable-line no-unused-vars

RadioDocs.propTypes = process.env.NODE_ENV !== "production" ? {
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
  inputProps: require('prop-types').object,
  inputRef: require('prop-types').func,
  name: require('prop-types').string,
  onChange: require('prop-types').func,
  tabIndex: require('prop-types').string,
  value: require('prop-types').string
} : {};