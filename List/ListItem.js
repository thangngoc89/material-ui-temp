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

var _ref, _ref2;

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

var _ButtonBase = require('../internal/ButtonBase');

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _reactHelpers = require('../utils/reactHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiListItem', function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none'
    },
    container: {
      position: 'relative'
    },
    keyboardFocused: {
      background: theme.palette.text.divider
    },
    default: {
      paddingTop: 12,
      paddingBottom: 12
    },
    dense: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    disabled: {
      opacity: 0.5
    },
    divider: {
      borderBottom: '1px solid ' + theme.palette.text.lightDivider
    },
    gutters: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    },
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.text.divider,
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
});

var ListItem = function (_Component) {
  (0, _inherits3.default)(ListItem, _Component);

  function ListItem() {
    (0, _classCallCheck3.default)(this, ListItem);
    return (0, _possibleConstructorReturn3.default)(this, (ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(ListItem, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dense: this.props.dense || this.context.dense || false
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          button = _props.button,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          componentProp = _props.component,
          dense = _props.dense,
          disabled = _props.disabled,
          divider = _props.divider,
          disableGutters = _props.disableGutters,
          other = (0, _objectWithoutProperties3.default)(_props, ['button', 'children', 'classes', 'className', 'component', 'dense', 'disabled', 'divider', 'disableGutters']);

      var isDense = dense || this.context.dense || false;
      var children = _react2.default.Children.toArray(childrenProp);

      var hasAvatar = children.some(function (value) {
        return (0, _reactHelpers.isMuiComponent)(value, 'ListItemAvatar');
      });

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.gutters, !disableGutters), (0, _defineProperty3.default)(_classNames, classes.divider, divider), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.button, button), (0, _defineProperty3.default)(_classNames, isDense || hasAvatar ? classes.dense : classes.default, true), _classNames), classNameProp);

      var listItemProps = (0, _extends3.default)({ className: className, disabled: disabled }, other);
      var ComponentMain = componentProp;

      if (button) {
        ComponentMain = _ButtonBase2.default;
        listItemProps.component = componentProp || 'li';
        listItemProps.keyboardFocusedClassName = classes.keyboardFocused;
      }

      if (children.length && (0, _reactHelpers.isMuiComponent)(children[children.length - 1], 'ListItemSecondaryAction')) {
        var secondaryAction = children.pop();
        return _react2.default.createElement(
          'div',
          { className: classes.container },
          _react2.default.createElement(
            ComponentMain,
            listItemProps,
            children
          ),
          secondaryAction
        );
      }

      return _react2.default.createElement(
        ComponentMain,
        listItemProps,
        children
      );
    }
  }]);
  return ListItem;
}(_react.Component);

ListItem.defaultProps = {
  button: false,
  component: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false
};
ListItem.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  button: require('prop-types').bool.isRequired,
  component: require('prop-types').string.isRequired,
  dense: require('prop-types').bool.isRequired,
  disabled: require('prop-types').oneOf([false]).isRequired,
  disableGutters: require('prop-types').oneOf([false]).isRequired,
  divider: require('prop-types').oneOf([false]).isRequired
}, (0, _defineProperty3.default)(_ref, 'button', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'children', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref, 'component', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func])), (0, _defineProperty3.default)(_ref, 'dense', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'disableGutters', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'divider', require('prop-types').bool), _ref) : {};
ListItem.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  button: require('prop-types').bool.isRequired,
  component: require('prop-types').string.isRequired,
  dense: require('prop-types').bool.isRequired,
  disabled: require('prop-types').oneOf([false]).isRequired,
  disableGutters: require('prop-types').oneOf([false]).isRequired,
  divider: require('prop-types').oneOf([false]).isRequired
}, (0, _defineProperty3.default)(_ref2, 'button', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'children', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), (0, _defineProperty3.default)(_ref2, 'classes', require('prop-types').object.isRequired), (0, _defineProperty3.default)(_ref2, 'className', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'component', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func])), (0, _defineProperty3.default)(_ref2, 'dense', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'disabled', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'disableGutters', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'divider', require('prop-types').bool), _ref2) : {};


ListItem.contextTypes = {
  dense: _propTypes2.default.bool
};

ListItem.childContextTypes = {
  dense: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(styleSheet)(ListItem);