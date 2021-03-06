'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _ref2, _ref3; //  weak

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _transitions = require('../styles/transitions');

var _withTheme = require('../styles/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var Fade = function (_Component) {
  (0, _inherits3.default)(Fade, _Component);

  function Fade() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Fade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Fade.__proto__ || (0, _getPrototypeOf2.default)(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.handleEnter = function (element) {
      element.style.opacity = 0;
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var transitions = _this.props.theme.transitions;

      element.style.transition = transitions.create('opacity', {
        duration: _this.props.enterTransitionDuration
      });
      element.style.WebkitTransition = transitions.create('opacity', {
        duration: _this.props.enterTransitionDuration
      });
      element.style.opacity = 1;
      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExit = function (element) {
      var transitions = _this.props.theme.transitions;

      element.style.transition = transitions.create('opacity', {
        duration: _this.props.leaveTransitionDuration
      });
      element.style.WebkitTransition = transitions.create('opacity', {
        duration: _this.props.leaveTransitionDuration
      });
      element.style.opacity = 0;
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Fade, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterTransitionDuration = _props.enterTransitionDuration,
          leaveTransitionDuration = _props.leaveTransitionDuration,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterTransitionDuration', 'leaveTransitionDuration', 'onEnter', 'onEntering', 'onExit', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onExit: this.handleExit,
          timeout: Math.max(enterTransitionDuration, leaveTransitionDuration) + 10,
          transitionAppear: true
        }, other),
        children
      );
    }
  }]);
  return Fade;
}(_react.Component);

Fade.defaultProps = {
  in: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen
};
Fade.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  in: require('prop-types').bool.isRequired,
  enterTransitionDuration: require('prop-types').number.isRequired,
  leaveTransitionDuration: require('prop-types').number.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
}, (0, _defineProperty3.default)(_ref2, 'in', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'onEnter', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onEntering', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onEntered', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onExit', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onExiting', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onExited', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'theme', require('prop-types').object.isRequired), _ref2) : {};
Fade.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  in: require('prop-types').bool.isRequired,
  enterTransitionDuration: require('prop-types').number.isRequired,
  leaveTransitionDuration: require('prop-types').number.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)
}, (0, _defineProperty3.default)(_ref3, 'in', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'enterTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'leaveTransitionDuration', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'onEnter', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onEntering', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onEntered', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onExit', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onExiting', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'onExited', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object.isRequired), _ref3) : {};
exports.default = (0, _withTheme2.default)(Fade);