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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiBottomNavigation', function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
}); //  weak

function BottomNavigation(props) {
  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      value = props.value,
      onChange = props.onChange,
      showLabels = props.showLabels,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'value', 'onChange', 'showLabels']);


  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react.Children.map(childrenProp, function (child, childIndex) {
    return (0, _react.cloneElement)(child, {
      selected: childIndex === value,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
      value: child.props.value || childIndex,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

BottomNavigation.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child
   */
  onChange: _propTypes2.default.func,
  /**
   * If `true`, all `BottomNavigationButton`s will show their labels.
   * By default only the selected `BottomNavigationButton` will show its label.
   */
  showLabels: _propTypes2.default.bool,
  /**
   * The value of the currently selected `BottomNavigationButton`.
   */
  value: _propTypes2.default.any
} : {};

BottomNavigation.defaultProps = {
  showLabels: false
};

exports.default = (0, _withStyles2.default)(styleSheet)(BottomNavigation);