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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _value;

exports.default = createSwitch;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _checkBoxOutlineBlank = require('../svg-icons/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiSwitchBase', {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  }
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
if (typeof exports !== 'undefined') Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Props', {
  value: (_value = {
    icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    disableRipple: require('prop-types').bool.isRequired,
    checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
    checkedClassName: require('prop-types').string
  }, (0, _defineProperty3.default)(_value, 'checkedIcon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_value, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_value, 'className', require('prop-types').string), (0, _defineProperty3.default)(_value, 'defaultChecked', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'disabledClassName', require('prop-types').string), (0, _defineProperty3.default)(_value, 'disableRipple', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'icon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_value, 'indeterminate', require('prop-types').bool), (0, _defineProperty3.default)(_value, 'indeterminateIcon', require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)])), (0, _defineProperty3.default)(_value, 'inputProps', require('prop-types').object), (0, _defineProperty3.default)(_value, 'inputRef', require('prop-types').func), (0, _defineProperty3.default)(_value, 'name', require('prop-types').string), (0, _defineProperty3.default)(_value, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_value, 'tabIndex', require('prop-types').string), (0, _defineProperty3.default)(_value, 'value', require('prop-types').string), _value),
  configurable: true
});

var _ref2 = _react2.default.createElement(_checkBoxOutlineBlank2.default, null);

var _ref3 = _react2.default.createElement(_checkBox2.default, null);

function createSwitch() {
  var _ref5, _ref6;

  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$defaultIcon = _ref.defaultIcon,
      defaultIcon = _ref$defaultIcon === undefined ? _ref2 : _ref$defaultIcon,
      _ref$defaultCheckedIc = _ref.defaultCheckedIcon,
      defaultCheckedIcon = _ref$defaultCheckedIc === undefined ? _ref3 : _ref$defaultCheckedIc,
      _ref$inputType = _ref.inputType,
      inputType = _ref$inputType === undefined ? 'checkbox' : _ref$inputType,
      switchStyleSheet = _ref.styleSheet;

  /**
   * @ignore - internal component.
   */
  var SwitchBase = function (_Component) {
    (0, _inherits3.default)(SwitchBase, _Component);

    function SwitchBase() {
      var _ref4;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SwitchBase);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {}, _this.input = null, _this.button = null, _this.isControlled = null, _this.handleInputChange = function (event) {
        var newChecked = void 0;

        if (_this.isControlled) {
          newChecked = !_this.props.checked;
        } else {
          newChecked = !_this.state.checked;
          if (_this.input && _this.input.checked !== newChecked) {
            _this.input.checked = newChecked;
          }
          _this.setState({ checked: !_this.state.checked });
        }

        if (_this.props.onChange) {
          _this.props.onChange(event, newChecked);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SwitchBase, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var props = this.props;


        this.isControlled = props.checked !== undefined;

        if (!this.isControlled) {
          // not controlled, use internal state
          this.setState({
            checked: props.defaultChecked !== undefined ? props.defaultChecked : false
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props,
            checkedProp = _props.checked,
            classes = _props.classes,
            classNameProp = _props.className,
            checkedClassName = _props.checkedClassName,
            checkedIcon = _props.checkedIcon,
            disabled = _props.disabled,
            disabledClassName = _props.disabledClassName,
            iconProp = _props.icon,
            inputProps = _props.inputProps,
            inputRef = _props.inputRef,
            name = _props.name,
            onChange = _props.onChange,
            tabIndex = _props.tabIndex,
            value = _props.value,
            other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'classes', 'className', 'checkedClassName', 'checkedIcon', 'disabled', 'disabledClassName', 'icon', 'inputProps', 'inputRef', 'name', 'onChange', 'tabIndex', 'value']);


        var checked = this.isControlled ? checkedProp : this.state.checked;
        var className = (0, _classnames2.default)(classes.root, classes.default, classNameProp, (_classNames = {}, (0, _defineProperty3.default)(_classNames, (0, _classnames2.default)(classes.checked, checkedClassName), checked), (0, _defineProperty3.default)(_classNames, (0, _classnames2.default)(classes.disabled, disabledClassName), disabled), _classNames));

        var icon = checked ? checkedIcon : iconProp;

        if (typeof icon === 'string') {
          icon = _react2.default.createElement(
            _Icon2.default,
            null,
            icon
          );
        }

        return _react2.default.createElement(
          _IconButton2.default,
          (0, _extends3.default)({
            component: 'span',
            className: className,
            disabled: disabled,
            tabIndex: null,
            role: undefined,
            rootRef: function rootRef(node) {
              _this2.button = node;
            }
          }, other),
          icon,
          _react2.default.createElement('input', (0, _extends3.default)({
            ref: function ref(node) {
              _this2.input = node;
              if (inputRef) {
                inputRef(node);
              }
            },
            type: inputType,
            name: name,
            checked: this.isControlled ? checkedProp : undefined,
            onChange: this.handleInputChange,
            className: classes.input,
            disabled: disabled,
            tabIndex: tabIndex,
            value: value
          }, inputProps))
        );
      }
    }]);
    return SwitchBase;
  }(_react.Component);

  SwitchBase.defaultProps = {
    icon: defaultIcon,
    checkedIcon: defaultCheckedIcon,
    disableRipple: false
  };
  SwitchBase.propTypes = process.env.NODE_ENV !== "production" ? (_ref5 = {
    icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    disableRipple: require('prop-types').bool.isRequired,
    checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
    checkedClassName: require('prop-types').string
  }, (0, _defineProperty3.default)(_ref5, 'checkedIcon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref5, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref5, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref5, 'defaultChecked', require('prop-types').bool), (0, _defineProperty3.default)(_ref5, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref5, 'disabledClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref5, 'disableRipple', require('prop-types').bool), (0, _defineProperty3.default)(_ref5, 'icon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref5, 'indeterminate', require('prop-types').bool), (0, _defineProperty3.default)(_ref5, 'indeterminateIcon', require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)])), (0, _defineProperty3.default)(_ref5, 'inputProps', require('prop-types').object), (0, _defineProperty3.default)(_ref5, 'inputRef', require('prop-types').func), (0, _defineProperty3.default)(_ref5, 'name', require('prop-types').string), (0, _defineProperty3.default)(_ref5, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref5, 'tabIndex', require('prop-types').string), (0, _defineProperty3.default)(_ref5, 'value', require('prop-types').string), _ref5) : {};
  SwitchBase.propTypes = process.env.NODE_ENV !== "production" ? (_ref6 = {
    icon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    checkedIcon: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element.isRequired ? babelPluginFlowReactPropTypes_proptype_Element.isRequired : babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element).isRequired,
    disableRipple: require('prop-types').bool.isRequired,
    checked: require('prop-types').oneOfType([require('prop-types').bool, require('prop-types').string]),
    checkedClassName: require('prop-types').string
  }, (0, _defineProperty3.default)(_ref6, 'checkedIcon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref6, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref6, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref6, 'defaultChecked', require('prop-types').bool), (0, _defineProperty3.default)(_ref6, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref6, 'disabledClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref6, 'disableRipple', require('prop-types').bool), (0, _defineProperty3.default)(_ref6, 'icon', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref6, 'indeterminate', require('prop-types').bool), (0, _defineProperty3.default)(_ref6, 'indeterminateIcon', require('prop-types').oneOfType([require('prop-types').string, typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)])), (0, _defineProperty3.default)(_ref6, 'inputProps', require('prop-types').object), (0, _defineProperty3.default)(_ref6, 'inputRef', require('prop-types').func), (0, _defineProperty3.default)(_ref6, 'name', require('prop-types').string), (0, _defineProperty3.default)(_ref6, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref6, 'tabIndex', require('prop-types').string), (0, _defineProperty3.default)(_ref6, 'value', require('prop-types').string), _ref6) : {};


  return (0, _withStyles2.default)([switchStyleSheet, styleSheet])(SwitchBase);
}