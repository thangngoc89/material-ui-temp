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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Transition = require('../internal/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reflow = function reflow(elem) {
  return elem.offsetHeight;
}; //  weak

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiCollapse', function (theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto',
      transitionDuration: '0ms'
    }
  };
});

var Collapse = function (_Component) {
  (0, _inherits3.default)(Collapse, _Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.handleEnter = function (element) {
      element.style.height = '0px';
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleEntering = function (element) {
      var _this$props = _this.props,
          transitionDuration = _this$props.transitionDuration,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration === 'auto') {
        var getAutoHeightDuration = theme.transitions.getAutoHeightDuration;

        element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
      } else if (typeof transitionDuration === 'number') {
        element.style.transitionDuration = transitionDuration + 'ms';
      } else {
        element.style.transitionDuration = transitionDuration;
      }

      element.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleEntered = function (element) {
      element.style.transitionDuration = '0ms'; // safari fix
      element.style.height = 'auto';
      reflow(element);
      if (_this.props.onEntered) {
        _this.props.onEntered(element);
      }
    }, _this.handleExit = function (element) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      element.style.height = wrapperHeight + 'px';
      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleExiting = function (element) {
      var _this$props2 = _this.props,
          transitionDuration = _this$props2.transitionDuration,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (transitionDuration) {
        if (transitionDuration === 'auto') {
          var getAutoHeightDuration = theme.transitions.getAutoHeightDuration;

          element.style.transitionDuration = getAutoHeightDuration(wrapperHeight) + 'ms';
        } else if (typeof transitionDuration === 'number') {
          element.style.transitionDuration = transitionDuration + 'ms';
        } else {
          element.style.transitionDuration = transitionDuration;
        }
      }

      element.style.height = '0px';
      if (_this.props.onExiting) {
        _this.props.onExiting(element);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          transitionDuration = _props.transitionDuration,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'transitionDuration', 'theme']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          enteredClassName: classes.entered,
          onExiting: this.handleExiting,
          onExit: this.handleExit
        }, other),
        _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(
            'div',
            {
              ref: function ref(node) {
                _this2.wrapper = node;
              }
            },
            children
          )
        )
      );
    }
  }]);
  return Collapse;
}(_react.Component);

Collapse.defaultProps = {
  in: false,
  transitionDuration: 300
};


Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content node to be collapsed.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes2.default.bool,
  /**
   * Callback fired before the component is entering.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the component is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired when the component has entered.
   */
  onEntered: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * Callback fired before the component is exiting.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * Callback fired when the component has exited.
   */
  onExited: _propTypes2.default.func, // eslint-disable-line react/sort-prop-types
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
} : {};

Collapse.defaultProps = {
  in: false,
  transitionDuration: 300
};

exports.default = (0, _withStyles2.default)(styleSheet, {
  withTheme: true
})(Collapse);