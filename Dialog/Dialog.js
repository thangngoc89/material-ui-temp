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

var _helpers = require('../utils/helpers');

var _Modal = require('../internal/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = require('../transitions/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = require('../styles/transitions');

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var babelPluginFlowReactPropTypes_proptype_TransitionCallback = require('../internal/Transition').babelPluginFlowReactPropTypes_proptype_TransitionCallback || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiDialog', function (theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      '&:focus': {
        outline: 'none'
      }
    },
    paperWidthXs: {
      maxWidth: theme.breakpoints.getWidth('xs')
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.getWidth('sm')
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.getWidth('md')
    },
    fullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
});

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
function Dialog(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      fullScreen = props.fullScreen,
      ignoreBackdropClick = props.ignoreBackdropClick,
      ignoreEscapeKeyUp = props.ignoreEscapeKeyUp,
      enterTransitionDuration = props.enterTransitionDuration,
      leaveTransitionDuration = props.leaveTransitionDuration,
      maxWidthProp = props.maxWidth,
      open = props.open,
      onBackdropClick = props.onBackdropClick,
      onEscapeKeyUp = props.onEscapeKeyUp,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered,
      onExit = props.onExit,
      onExiting = props.onExiting,
      onExited = props.onExited,
      onRequestClose = props.onRequestClose,
      transition = props.transition,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'fullScreen', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'enterTransitionDuration', 'leaveTransitionDuration', 'maxWidth', 'open', 'onBackdropClick', 'onEscapeKeyUp', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited', 'onRequestClose', 'transition']);

  // workaround: see #2 test case from https://github.com/facebook/flow/issues/1660#issuecomment-302468866

  var maxWidth = maxWidthProp || Dialog.defaultProps.maxWidth;
  var createTransitionFn = typeof transition === 'function' ? _react.createElement : _react.cloneElement;

  return _react2.default.createElement(
    _Modal2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className),
      backdropTransitionDuration: open ? enterTransitionDuration : leaveTransitionDuration,
      ignoreBackdropClick: ignoreBackdropClick,
      ignoreEscapeKeyUp: ignoreEscapeKeyUp,
      onBackdropClick: onBackdropClick,
      onEscapeKeyUp: onEscapeKeyUp,
      onRequestClose: onRequestClose,
      show: open
    }, other),
    createTransitionFn(
    /* $FlowFixMe */
    transition, {
      in: open,
      transitionAppear: true,
      enterTransitionDuration: enterTransitionDuration,
      leaveTransitionDuration: leaveTransitionDuration,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      onExited: onExited
    }, _react2.default.createElement(
      _Paper2.default,
      {
        elevation: 24,
        className: (0, _classnames2.default)(classes.paper, classes['paperWidth' + (0, _helpers.capitalizeFirstLetter)(maxWidth)], (0, _defineProperty3.default)({}, classes.fullScreen, fullScreen))
      },
      children
    ))
  );
}

Dialog.propTypes = process.env.NODE_ENV !== "production" ? {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string,
  fullScreen: require('prop-types').bool,
  ignoreBackdropClick: require('prop-types').bool,
  ignoreEscapeKeyUp: require('prop-types').bool,
  enterTransitionDuration: require('prop-types').number,
  leaveTransitionDuration: require('prop-types').number,
  maxWidth: require('prop-types').oneOf(['xs', 'sm', 'md']),
  onBackdropClick: require('prop-types').func,
  onEnter: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntering: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEntered: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onEscapeKeyUp: require('prop-types').func,
  onExit: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExiting: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onExited: typeof babelPluginFlowReactPropTypes_proptype_TransitionCallback === 'function' ? babelPluginFlowReactPropTypes_proptype_TransitionCallback : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_TransitionCallback),
  onRequestClose: require('prop-types').func,
  open: require('prop-types').bool,
  transition: require('prop-types').oneOfType([require('prop-types').func, typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)])
} : {};
Dialog.defaultProps = {
  fullScreen: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  enterTransitionDuration: _transitions.duration.enteringScreen,
  leaveTransitionDuration: _transitions.duration.leavingScreen,
  maxWidth: 'sm',
  open: false,
  transition: _Fade2.default
};

exports.default = (0, _withStyles2.default)(styleSheet)(Dialog);