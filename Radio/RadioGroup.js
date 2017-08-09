'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _FormGroup = require('../Form/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiRadioGroup', {
  root: {
    flex: '1 1 auto',
    margin: 0,
    padding: 0
  }
});

if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Props', {
  value: {
    children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
    classes: require('prop-types').object.isRequired,
    className: require('prop-types').string,
    name: require('prop-types').string,
    onBlur: require('prop-types').func,
    onChange: require('prop-types').func,
    onKeyDown: require('prop-types').func,
    selectedValue: require('prop-types').string
  },
  configurable: true
});

var RadioGroup = function (_PureComponent) {
  (0, _inherits3.default)(RadioGroup, _PureComponent);

  function RadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.radios = [], _this.focus = function () {
      if (!_this.radios || !_this.radios.length) {
        return;
      }

      var focusRadios = _this.radios.filter(function (n) {
        return !n.disabled;
      });

      if (!focusRadios.length) {
        return;
      }

      var selectedRadio = (0, _helpers.find)(focusRadios, function (n) {
        return n.checked;
      });

      if (selectedRadio) {
        selectedRadio.focus();
        return;
      }

      focusRadios[0].focus();
    }, _this.handleRadioChange = function (event, checked) {
      if (checked && _this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          name = _props.name,
          selectedValue = _props.selectedValue,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'name', 'selectedValue', 'onChange']);


      this.radios = [];

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(classes.root, classNameProp),

          role: 'radiogroup'
        }, other),
        _react.Children.map(children, function (child, index) {
          var selected = selectedValue === child.props.value;
          return (0, _react.cloneElement)(child, {
            key: index,
            name: name,
            inputRef: function inputRef(node) {
              _this2.radios.push(node);
            },
            checked: selected,
            onChange: _this2.handleRadioChange
          });
        })
      );
    }
  }]);
  return RadioGroup;
}(_react.PureComponent);

RadioGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string,
  name: require('prop-types').string,
  onBlur: require('prop-types').func,
  onChange: require('prop-types').func,
  onKeyDown: require('prop-types').func,
  selectedValue: require('prop-types').string
} : {};
RadioGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string,
  name: require('prop-types').string,
  onBlur: require('prop-types').func,
  onChange: require('prop-types').func,
  onKeyDown: require('prop-types').func,
  selectedValue: require('prop-types').string
} : {};
exports.default = (0, _withStyles2.default)(styleSheet)(RadioGroup);