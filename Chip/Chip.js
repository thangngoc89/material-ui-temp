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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _createStyleSheet = require('../styles/createStyleSheet');

var _createStyleSheet2 = _interopRequireDefault(_createStyleSheet);

var _withStyles = require('../styles/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _cancel = require('../svg-icons/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

var _colorManipulator = require('../styles/colorManipulator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiChip', function (theme) {
  var height = 32;
  var backgroundColor = (0, _colorManipulator.emphasize)(theme.palette.background.default, 0.12);
  var deleteIconColor = (0, _colorManipulator.fade)(theme.palette.text.primary, 0.26);
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      width: 'fit-content',
      transition: theme.transitions.create(),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      outline: 'none', // No outline on focused element in Chrome (as triggered by tabIndex prop)
      border: 'none', // Remove `button` border
      padding: 0 // Remove `button` padding
    },
    clickable: {
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.12)
      }
    },
    deletable: {
      '&:focus': {
        backgroundColor: (0, _colorManipulator.emphasize)(backgroundColor, 0.08)
      }
    },
    avatar: {
      marginRight: -4,
      width: 32,
      height: 32,
      fontSize: 16
    },
    avatarChildren: {
      width: 19,
      height: 19
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap',
      cursor: 'inherit'
    },
    deleteIcon: {
      color: deleteIconColor,
      cursor: 'pointer',
      height: 'auto',
      margin: '0 4px 0 -8px',
      '&:hover': {
        color: (0, _colorManipulator.fade)(deleteIconColor, 0.4)
      }
    }
  };
});

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */

var Chip = function (_Component) {
  (0, _inherits3.default)(Chip, _Component);

  function Chip() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Chip.__proto__ || (0, _getPrototypeOf2.default)(Chip)).call.apply(_ref, [this].concat(args))), _this), _this.chipRef = null, _this.handleDeleteIconClick = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      _this.props.onRequestDelete(event);
    }, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onRequestDelete = _this$props.onRequestDelete,
          onKeyDown = _this$props.onKeyDown;

      var key = (0, _keycode2.default)(event);

      if (onClick && (key === 'space' || key === 'enter')) {
        event.preventDefault();
        onClick(event);
      } else if (onRequestDelete && key === 'backspace') {
        event.preventDefault();
        onRequestDelete(event);
      } else if (key === 'esc') {
        event.preventDefault();
        _this.chipRef.blur();
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Chip, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          avatarProp = _props.avatar,
          classes = _props.classes,
          classNameProp = _props.className,
          label = _props.label,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onRequestDelete = _props.onRequestDelete,
          tabIndexProp = _props.tabIndex,
          other = (0, _objectWithoutProperties3.default)(_props, ['avatar', 'classes', 'className', 'label', 'onClick', 'onKeyDown', 'onRequestDelete', 'tabIndex']);


      var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.clickable, onClick), (0, _defineProperty3.default)({}, classes.deletable, onRequestDelete), classNameProp);

      var deleteIcon = null;
      if (onRequestDelete) {
        deleteIcon = _react2.default.createElement(_cancel2.default, { className: classes.deleteIcon, onClick: this.handleDeleteIconClick });
      }

      var avatar = null;
      if (avatarProp && (0, _react.isValidElement)(avatarProp)) {
        avatar = (0, _react.cloneElement)(avatarProp, {
          className: (0, _classnames2.default)(classes.avatar, avatarProp.props.className),
          childrenClassName: (0, _classnames2.default)(classes.avatarChildren, avatarProp.props.childrenClassName)
        });
      }

      var tabIndex = tabIndexProp;

      if (!tabIndex) {
        tabIndex = onClick || onRequestDelete ? 0 : -1;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          role: 'button',
          className: className,
          tabIndex: tabIndex,
          onClick: onClick,
          onKeyDown: this.handleKeyDown,
          ref: function ref(node) {
            _this2.chipRef = node;
          }
        }, other),
        avatar,
        _react2.default.createElement(
          'span',
          { className: classes.label },
          label
        ),
        deleteIcon
      );
    }
  }]);
  return Chip;
}(_react.Component);

Chip.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Avatar element.
   */
  avatar: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The content of the label.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   *
   * @param {object} event The event source of the callback
   */
  onRequestDelete: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.number
} : {};

exports.default = (0, _withStyles2.default)(styleSheet)(Chip);