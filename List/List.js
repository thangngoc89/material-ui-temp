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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = require('react').babelPluginFlowReactPropTypes_proptype_Element || require('prop-types').any;

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiList', function (theme) {
  return {
    root: {
      flex: '1 1 auto',
      overflow: 'auto',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    padding: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    dense: {
      paddingTop: theme.spacing.unit / 2,
      paddingBottom: theme.spacing.unit / 2
    },
    subheader: {
      paddingTop: 0
    }
  };
});

var List = function (_Component) {
  (0, _inherits3.default)(List, _Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        dense: this.props.dense
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          disablePadding = _props.disablePadding,
          children = _props.children,
          dense = _props.dense,
          subheader = _props.subheader,
          rootRef = _props.rootRef,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'component', 'disablePadding', 'children', 'dense', 'subheader', 'rootRef']);

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.dense, dense && !disablePadding), (0, _defineProperty3.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty3.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);

      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ ref: rootRef, className: className }, other),
        subheader,
        children
      );
    }
  }]);
  return List;
}(_react.Component);

List.defaultProps = {
  component: 'ul',
  dense: false,
  disablePadding: false
};
List.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  component: require('prop-types').string.isRequired,
  dense: require('prop-types').bool.isRequired,
  disablePadding: require('prop-types').bool.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string
}, (0, _defineProperty3.default)(_ref, 'component', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func])), (0, _defineProperty3.default)(_ref, 'dense', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'disablePadding', require('prop-types').bool), (0, _defineProperty3.default)(_ref, 'rootRef', require('prop-types').func), (0, _defineProperty3.default)(_ref, 'subheader', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), _ref) : {};
List.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  component: require('prop-types').string.isRequired,
  dense: require('prop-types').bool.isRequired,
  disablePadding: require('prop-types').bool.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string
}, (0, _defineProperty3.default)(_ref2, 'component', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func])), (0, _defineProperty3.default)(_ref2, 'dense', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'disablePadding', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'rootRef', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'subheader', typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : require('prop-types').shape(babelPluginFlowReactPropTypes_proptype_Element)), _ref2) : {};


List.childContextTypes = {
  dense: _propTypes2.default.bool
};

exports.default = (0, _withStyles2.default)(styleSheet)(List);