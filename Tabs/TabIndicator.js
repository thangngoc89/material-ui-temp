'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _helpers = require('../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiTabIndicator', function (theme) {
  return {
    root: {
      position: 'relative',
      height: 2,
      marginTop: -2,
      transition: theme.transitions.create(),
      willChange: 'left, width'
    },
    colorAccent: {
      backgroundColor: theme.palette.accent.A200
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary[500]
    }
  };
});

/**
 * @ignore - internal component.
 */
function TabIndicator(props) {
  var classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      styleProp = props.style;

  var colorPredefined = ['primary', 'accent'].indexOf(color) !== -1;
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], colorPredefined), classNameProp);

  var style = colorPredefined ? styleProp : (0, _extends3.default)({}, styleProp, {
    backgroundColor: color
  });

  return _react2.default.createElement('div', { className: className, style: style });
}

TabIndicator.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  color: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['accent', 'primary']), _propTypes2.default.string]).isRequired,
  /**
   * @ignore
   * The style of the root element.
   */
  style: _propTypes2.default.shape({
    left: _propTypes2.default.number,
    width: _propTypes2.default.number
  }).isRequired
} : {};

exports.default = (0, _withStyles2.default)(styleSheet)(TabIndicator);