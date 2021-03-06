'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _minSafeInteger = require('babel-runtime/core-js/number/min-safe-integer');

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _wrapDisplayName = require('recompose/wrapDisplayName');

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _createEagerFactory = require('recompose/createEagerFactory');

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _getDisplayName = require('recompose/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _contextTypes = require('react-jss/lib/contextTypes');

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _jss = require('react-jss/lib/jss');

var _jss2 = _interopRequireDefault(_jss);

var _ns = require('react-jss/lib/ns');

var ns = _interopRequireWildcard(_ns);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _themeListener = require('./themeListener');

var _themeListener2 = _interopRequireDefault(_themeListener);

var _createGenerateClassName = require('./createGenerateClassName');

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use a singleton or the provided one by the context.
var generateClassName = (0, _createGenerateClassName2.default)();

// Global index counter to preserve source order.
// As we create the style sheet during componentWillMount lifecycle,
// children are handled after the parents, so the order of style elements would
// be parent->child. It is a problem though when a parent passes a className
// which needs to override any childs styles. StyleSheet of the child has a higher
// specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
/* eslint-disable flowtype/require-valid-file-annotation */

var indexCounter = _minSafeInteger2.default;

var sheetsManager = new _weakMap2.default();
var noopTheme = {};

var defaultTheme = void 0;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _theme2.default)();
  return defaultTheme;
}

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new, with a `classes` property.
var withStyles = function withStyles(styleSheet) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (BaseComponent) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === undefined ? false : _options$withTheme;

    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    var styleSheets = (Array.isArray(styleSheet) ? styleSheet : [styleSheet]).filter(Boolean);
    var listenToTheme = styleSheets.some(function (currentStyleSheet) {
      return currentStyleSheet.themingEnabled;
    }) || withTheme;

    styleSheets.forEach(function (currentStyleSheet) {
      if (currentStyleSheet.options.index === undefined) {
        indexCounter += 1;
        currentStyleSheet.options.index = indexCounter;
      }
    });

    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(indexCounter < 0, ['Material-UI: You might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var Style = function (_Component) {
      (0, _inherits3.default)(Style, _Component);

      function Style(props, context) {
        (0, _classCallCheck3.default)(this, Style);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Style.__proto__ || (0, _getPrototypeOf2.default)(Style)).call(this, props, context));

        _this.state = {};
        _this.unsubscribe = null;
        _this.jss = null;
        _this.sheetOptions = null;
        _this.theme = null;

        _this.jss = _this.context[ns.jss] || _jss2.default;
        _this.sheetsManager = _this.context.sheetsManager || sheetsManager;
        // Attach the styleSheets to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
        _this.styleSheets = styleSheets;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, _this.context[ns.sheetOptions]);
        // We use || as it's lazy evaluated.
        _this.theme = listenToTheme ? _themeListener2.default.initial(context) || getDefaultTheme() : noopTheme;
        return _this;
      }
      // Exposed for test purposes.


      (0, _createClass3.default)(Style, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.attach(this.theme);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribe = _themeListener2.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;
            _this2.attach(_this2.theme);

            // Rerender the component so the underlying component gets the theme update.
            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribe !== null) {
            this.unsubscribe();
          }
        }
      }, {
        key: 'attach',
        value: function attach(theme) {
          var _this3 = this;

          this.styleSheets.forEach(function (currentStyleSheet) {
            var sheetManager = _this3.sheetsManager.get(currentStyleSheet);

            if (!sheetManager) {
              sheetManager = new _map2.default();
              _this3.sheetsManager.set(currentStyleSheet, sheetManager);
            }

            var sheetManagerTheme = sheetManager.get(theme);

            if (!sheetManagerTheme) {
              sheetManagerTheme = {
                refs: 0,
                sheet: null
              };
              sheetManager.set(theme, sheetManagerTheme);
            }

            if (sheetManagerTheme.refs === 0) {
              var styles = currentStyleSheet.createStyles(theme);
              var meta = void 0;

              if (process.env.NODE_ENV !== 'production') {
                meta = currentStyleSheet.name ? currentStyleSheet.name : (0, _getDisplayName2.default)(BaseComponent);
                // Sanitize the string as will be used in development to prefix the generated
                // class name.
                meta = meta.replace(new RegExp(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g), '-');
              }

              var sheet = _this3.jss.createStyleSheet(styles, (0, _extends3.default)({
                meta: meta,
                link: false
              }, _this3.sheetOptions, currentStyleSheet.options));

              sheetManagerTheme.sheet = sheet;
              sheet.attach();

              var sheetsRegistry = _this3.context[ns.sheetsRegistry];
              if (sheetsRegistry) {
                sheetsRegistry.add(sheet);
              }
            }

            sheetManagerTheme.refs += 1;
          });
        }
      }, {
        key: 'detach',
        value: function detach(theme) {
          var _this4 = this;

          this.styleSheets.forEach(function (currentStyleSheet) {
            var sheetManager = _this4.sheetsManager.get(currentStyleSheet);
            var sheetManagerTheme = sheetManager.get(theme);

            sheetManagerTheme.refs -= 1;

            if (sheetManagerTheme.refs === 0) {
              sheetManager.delete(theme);
              sheetManagerTheme.sheet.detach();
              var sheetsRegistry = _this4.context[ns.sheetsRegistry];
              if (sheetsRegistry) {
                sheetsRegistry.remove(sheetManagerTheme.sheet);
              }
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var _this5 = this;

          var _props = this.props,
              classesProp = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'innerRef']);


          var classes = void 0;
          var renderedClasses = this.styleSheets.reduce(function (acc, current) {
            var sheetManager = _this5.sheetsManager.get(current);
            var sheetsManagerTheme = sheetManager.get(_this5.theme);

            return (0, _extends3.default)({}, acc, sheetsManagerTheme.sheet.classes);
          }, {});

          if (classesProp) {
            classes = (0, _extends3.default)({}, renderedClasses, (0, _keys2.default)(classesProp).reduce(function (acc, key) {
              process.env.NODE_ENV !== "production" ? (0, _warning2.default)(renderedClasses[key], ['Material-UI: the key `' + key + '` ' + ('provided to the classes property object is not implemented in ' + (0, _getDisplayName2.default)(BaseComponent) + '.'), 'You can only overrides one of the following: ' + (0, _keys2.default)(renderedClasses).join(',')].join('\n')) : void 0;

              if (classesProp[key] !== undefined) {
                acc[key] = renderedClasses[key] + ' ' + classesProp[key];
              }
              return acc;
            }, {}));
          } else {
            classes = renderedClasses;
          }

          var more = {};

          // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order component.
          if (withTheme) {
            more.theme = this.theme;
          }

          return factory((0, _extends3.default)({
            classes: classes,
            ref: innerRef
          }, more, other));
        }
      }]);
      return Style;
    }(_react.Component);

    Style.Naked = BaseComponent;


    Style.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * Useful to extend the style applied to components.
       */
      classes: _propTypes2.default.object,
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes2.default.func
    } : {};

    Style.contextTypes = (0, _extends3.default)({
      sheetsManager: _propTypes2.default.object
    }, _contextTypes2.default, listenToTheme ? _themeListener2.default.contextTypes : {});

    (0, _hoistNonReactStatics2.default)(Style, BaseComponent);

    if (process.env.NODE_ENV !== 'production') {
      Style.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withStyles');
    }

    return Style;
  };
};

exports.default = withStyles;