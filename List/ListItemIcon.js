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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiListItemIcon', function (theme) {
  return {
    root: {
      height: 24,
      marginRight: theme.spacing.unit * 2,
      width: 24,
      color: theme.palette.action.active
    }
  };
});

/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */
function ListItemIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.cloneElement(children, (0, _extends3.default)({
    className: (0, _classnames2.default)(classes.root, classNameProp, children.props.className)
  }, other));
}

exports.default = (0, _withStyles2.default)(styleSheet)(ListItemIcon);