'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

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

var _ref2, _ref3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _contains = require('dom-helpers/query/contains');

var _contains2 = _interopRequireDefault(_contains);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Transition = require('./Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('./Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? n + 'px' : n;
  }).join(' ');
}

// Sum the scrollTop between two elements
function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }
  return scrollTop;
}

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiPopover', {
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&:focus': {
      outline: 'none'
    }
  }
});

/**
 * @ignore - internal component.
 */
var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Popover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUnmount = function () {
      _this.handleResize.cancel();
    }, _this.autoTransitionDuration = undefined, _this.transitionEl = undefined, _this.setPositioningStyles = function (element) {
      if (element && element.style) {
        var positioning = _this.getPositioningStyle(element);

        element.style.top = positioning.top;
        element.style.left = positioning.left;
        element.style.transformOrigin = positioning.transformOrigin;
      }
    }, _this.handleEnter = function (element) {
      element.style.opacity = '0';
      element.style.transform = Popover.getScale(0.75);

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }

      _this.setPositioningStyles(element);

      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.props.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', {
        duration: transitionDuration
      }), transitions.create('transform', {
        duration: transitionDuration * 0.666
      })].join(',');
    }, _this.handleEntering = function (element) {
      element.style.opacity = '1';
      element.style.transform = Popover.getScale(1);

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    }, _this.handleExit = function (element) {
      var transitionDuration = _this.props.transitionDuration;
      var transitions = _this.props.theme.transitions;


      if (transitionDuration === 'auto') {
        transitionDuration = transitions.getAutoHeightDuration(element.clientHeight);
        _this.autoTransitionDuration = transitionDuration;
      }

      element.style.transition = [transitions.create('opacity', {
        duration: transitionDuration
      }), transitions.create('transform', {
        duration: transitionDuration * 0.666,
        delay: transitionDuration * 0.333
      })].join(',');

      element.style.opacity = '0';
      element.style.transform = Popover.getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit(element);
      }
    }, _this.handleResize = (0, _debounce2.default)(function () {
      var element = _reactDom2.default.findDOMNode(_this.transitionEl);
      _this.setPositioningStyles(element);
    }, 166), _this.handleRequestTimeout = function () {
      if (_this.props.transitionDuration === 'auto') {
        return (_this.autoTransitionDuration || 0) + 20;
      }
      return _this.props.transitionDuration + 20;
    }, _this.marginThreshold = 16, _this.handleGetOffsetTop = getOffsetTop, _this.handleGetOffsetLeft = getOffsetLeft, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Popover, [{
    key: 'getPositioningStyle',
    value: function getPositioningStyle(element) {
      // Check if the parent has requested anchoring on an inner content node
      var contentAnchorOffset = this.getContentAnchorOffset(element);
      // Get the offset of of the anchoring element
      var anchorOffset = this.getAnchorOffset(contentAnchorOffset);

      var elemRect = {
        width: element.clientWidth,
        height: element.clientHeight
      };
      // Get the transform origin point on the element itself
      var transformOrigin = this.getTransformOrigin(elemRect, contentAnchorOffset);

      // Calculate element positioning
      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width;

      // Window thresholds taking required margin into account
      var heightThreshold = window.innerHeight - this.marginThreshold;
      var widthThreshold = window.innerWidth - this.marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < this.marginThreshold) {
        var diff = top - this.marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;
        top -= _diff;
        transformOrigin.vertical += _diff;
      }

      // Check if the horizontal axis needs shifting
      if (left < this.marginThreshold) {
        var _diff2 = left - this.marginThreshold;
        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;
        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: top + 'px',
        left: left + 'px',
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    }
  }, {
    key: 'getAnchorOffset',


    /**
     * Returns the top/left offset of the position
     * to attach to on the anchor element (or body if none is provided)
     */
    value: function getAnchorOffset(contentAnchorOffset) {
      // $FlowFixMe
      var _props = this.props,
          anchorEl = _props.anchorEl,
          anchorOrigin = _props.anchorOrigin;

      var anchorElement = anchorEl || document.body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';

      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }

    /**
     * Returns the vertical offset of inner content to anchor the transform on if provided
     */

  }, {
    key: 'getContentAnchorOffset',
    value: function getContentAnchorOffset(element) {
      var contentAnchorOffset = 0;

      if (this.props.getContentAnchorEl) {
        var contentAnchorEl = this.props.getContentAnchorEl(element);

        if (contentAnchorEl && (0, _contains2.default)(element, contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        }
      }

      return contentAnchorOffset;
    }

    /**
     * Return the base transform origin using the element
     * and taking the content anchor offset into account if in use
     */

  }, {
    key: 'getTransformOrigin',
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;

      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          classes = _props2.classes,
          className = _props2.className,
          modal = _props2.modal,
          onRequestClose = _props2.onRequestClose,
          open = _props2.open,
          getContentAnchorEl = _props2.getContentAnchorEl,
          anchorEl = _props2.anchorEl,
          anchorOrigin = _props2.anchorOrigin,
          role = _props2.role,
          transformOrigin = _props2.transformOrigin,
          transitionDuration = _props2.transitionDuration,
          enteredClassName = _props2.enteredClassName,
          enteringClassName = _props2.enteringClassName,
          exitedClassName = _props2.exitedClassName,
          exitingClassName = _props2.exitingClassName,
          onEnter = _props2.onEnter,
          onEntering = _props2.onEntering,
          onEntered = _props2.onEntered,
          onExit = _props2.onExit,
          onExiting = _props2.onExiting,
          onExited = _props2.onExited,
          elevation = _props2.elevation,
          theme = _props2.theme,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'classes', 'className', 'modal', 'onRequestClose', 'open', 'getContentAnchorEl', 'anchorEl', 'anchorOrigin', 'role', 'transformOrigin', 'transitionDuration', 'enteredClassName', 'enteringClassName', 'exitedClassName', 'exitingClassName', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'elevation', 'theme']);


      return _react2.default.createElement(
        _Modal2.default,
        { show: open, backdropInvisible: true, onRequestClose: onRequestClose },
        _react2.default.createElement(
          _Transition2.default,
          {
            'in': open,
            enteredClassName: enteredClassName,
            enteringClassName: enteringClassName,
            exitedClassName: exitedClassName,
            exitingClassName: exitingClassName,
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onEntered: onEntered,
            onExit: this.handleExit,
            onExiting: onExiting,
            onExited: onExited,
            role: role,
            onRequestTimeout: this.handleRequestTimeout,
            transitionAppear: true,
            ref: function ref(node) {
              _this2.transitionEl = node;
            }
          },
          _react2.default.createElement(
            _Paper2.default,
            (0, _extends3.default)({
              className: (0, _classnames2.default)(classes.paper, className),
              elevation: elevation
            }, other),
            _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
            children
          )
        )
      );
    }
  }], [{
    key: 'getScale',
    value: function getScale(value) {
      return 'scale(' + value + ', ' + Math.pow(value, 2) + ')';
    }
  }]);
  return Popover;
}(_react.Component);

Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  modal: true,
  open: false,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  transitionDuration: 'auto',
  elevation: 8
};
Popover.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  anchorOrigin: require('prop-types').shape({
    horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
    vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
  }).isRequired,
  modal: require('prop-types').bool.isRequired,
  open: require('prop-types').bool.isRequired,
  transformOrigin: require('prop-types').shape({
    horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
    vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
  }).isRequired,
  transitionDuration: require('prop-types').oneOf(['auto']).isRequired,
  elevation: require('prop-types').number.isRequired,
  anchorEl: require('prop-types').object
}, (0, _defineProperty3.default)(_ref2, 'anchorOrigin', require('prop-types').shape({
  horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
  vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
}).isRequired), (0, _defineProperty3.default)(_ref2, 'children', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'elevation', require('prop-types').number), (0, _defineProperty3.default)(_ref2, 'enteredClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'enteringClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'exitedClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'exitingClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'getContentAnchorEl', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'modal', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref2, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'role', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'transformOrigin', require('prop-types').shape({
  horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
  vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
}).isRequired), (0, _defineProperty3.default)(_ref2, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])]).isRequired), (0, _defineProperty3.default)(_ref2, 'theme', require('prop-types').object.isRequired), _ref2) : {};
Popover.propTypes = process.env.NODE_ENV !== "production" ? (_ref3 = {
  anchorOrigin: require('prop-types').shape({
    horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
    vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
  }).isRequired,
  modal: require('prop-types').bool.isRequired,
  open: require('prop-types').bool.isRequired,
  transformOrigin: require('prop-types').shape({
    horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
    vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
  }).isRequired,
  transitionDuration: require('prop-types').oneOf(['auto']).isRequired,
  elevation: require('prop-types').number.isRequired,
  anchorEl: require('prop-types').object
}, (0, _defineProperty3.default)(_ref3, 'anchorOrigin', require('prop-types').shape({
  horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
  vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
}).isRequired), (0, _defineProperty3.default)(_ref3, 'children', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref3, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref3, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'elevation', require('prop-types').number), (0, _defineProperty3.default)(_ref3, 'enteredClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'enteringClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'exitedClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'exitingClassName', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'getContentAnchorEl', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'modal', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'onEnter', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntering', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onEntered', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExit', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExiting', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onExited', typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback)), (0, _defineProperty3.default)(_ref3, 'onRequestClose', require('prop-types').func), (0, _defineProperty3.default)(_ref3, 'open', require('prop-types').bool), (0, _defineProperty3.default)(_ref3, 'role', require('prop-types').string), (0, _defineProperty3.default)(_ref3, 'transformOrigin', require('prop-types').shape({
  horizontal: require('prop-types').oneOfType([require('prop-types').oneOf(['left']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['right']), require('prop-types').number]).isRequired,
  vertical: require('prop-types').oneOfType([require('prop-types').oneOf(['top']), require('prop-types').oneOf(['center']), require('prop-types').oneOf(['bottom']), require('prop-types').number]).isRequired
}).isRequired), (0, _defineProperty3.default)(_ref3, 'transitionDuration', require('prop-types').oneOfType([require('prop-types').number, require('prop-types').oneOf(['auto'])]).isRequired), (0, _defineProperty3.default)(_ref3, 'theme', require('prop-types').object.isRequired), _ref3) : {};
exports.default = (0, _withStyles2.default)(styleSheet, { withTheme: true })(Popover);