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

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ref2;

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

var _Input = require('../Input/Input');

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiFormControl', function (theme) {
  return {
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative'
    },
    marginNormal: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit
    },
    marginDense: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit / 2
    },
    fullWidth: {
      width: '100%'
    }
  };
});

/**
 * Provides context such as dirty/focused/error/required for form inputs.
 */
var FormControl = function (_Component) {
  (0, _inherits3.default)(FormControl, _Component);

  function FormControl() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FormControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormControl.__proto__ || (0, _getPrototypeOf2.default)(FormControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dirty: false,
      focused: false
    }, _this.handleFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      if (!_this.state.focused) {
        _this.setState({ focused: true });
      }
    }, _this.handleBlur = function (event) {
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      if (_this.state.focused) {
        _this.setState({ focused: false });
      }
    }, _this.handleDirty = function () {
      if (!_this.state.dirty) {
        _this.setState({ dirty: true });
      }
    }, _this.handleClean = function () {
      if (_this.state.dirty) {
        _this.setState({ dirty: false });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FormControl, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          disabled = _props.disabled,
          error = _props.error,
          required = _props.required,
          margin = _props.margin;
      var _state = this.state,
          dirty = _state.dirty,
          focused = _state.focused;


      return {
        muiFormControl: {
          dirty: dirty,
          disabled: disabled,
          error: error,
          focused: focused,
          margin: margin,
          required: required,
          onDirty: this.handleDirty,
          onClean: this.handleClean,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }
      };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // We need to iterate through the children and find the Input in order
      // to fully support server side rendering.
      _react.Children.forEach(this.props.children, function (child) {
        if ((0, _reactHelpers.isMuiComponent)(child, 'Input') && (0, _Input.isDirty)(child.props, true)) {
          _this2.setState({ dirty: true });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          children = _props2.children,
          classes = _props2.classes,
          className = _props2.className,
          disabled = _props2.disabled,
          error = _props2.error,
          fullWidth = _props2.fullWidth,
          margin = _props2.margin,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'classes', 'className', 'disabled', 'error', 'fullWidth', 'margin']);


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.marginNormal, margin === 'normal'), (0, _defineProperty3.default)(_classNames, classes.marginDense, margin === 'dense'), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames), className)
        }, other, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }),
        children
      );
    }
  }]);
  return FormControl;
}(_react.Component);

FormControl.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false
};
FormControl.childContextTypes = {
  muiFormControl: _propTypes2.default.object.isRequired
};
FormControl.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  disabled: require('prop-types').bool.isRequired,
  error: require('prop-types').bool.isRequired,
  fullWidth: require('prop-types').bool.isRequired,
  margin: require('prop-types').oneOf(['none']).isRequired,
  required: require('prop-types').bool.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string
}, (0, _defineProperty3.default)(_ref2, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'error', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'fullWidth', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'onBlur', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onFocus', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'required', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'margin', require('prop-types').oneOf(['none', 'dense', 'normal'])), _ref2) : {};
exports.default = (0, _withStyles2.default)(styleSheet)(FormControl);