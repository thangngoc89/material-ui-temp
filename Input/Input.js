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

var _ref2; //  weak

exports.isDirty = isDirty;

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

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDirty(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return obj && (obj.value && obj.value.toString().length || SSR && obj.defaultValue && obj.defaultValue.toString().length) > 0;
}

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiInput', function (theme) {
  var placeholder = {
    color: 'currentColor',
    opacity: theme.palette.type === 'light' ? 0.42 : 0.5
  };
  var placeholderForm = {
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.ease
    })
  };
  var placeholderFormFocus = {
    opacity: theme.palette.type === 'light' ? 0.42 : 0.5
  };

  return {
    root: {
      // Mimics the default input display property used by browsers for an input.
      display: 'inline-block',
      position: 'relative',
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.input.inputText
    },
    formControl: {
      'label + &': {
        marginTop: theme.spacing.unit * 2
      }
    },
    inkbar: {
      '&:after': {
        backgroundColor: theme.palette.primary[theme.palette.type === 'light' ? 'A700' : 'A200'],
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 2,
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        })
      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      }
    },
    error: {
      '&:after': {
        backgroundColor: theme.palette.error.A400,
        transform: 'scaleX(1)' // error is always underlined in red
      }
    },
    input: {
      font: 'inherit',
      color: 'currentColor',
      // slight alteration to spec spacing to match visual spec result
      padding: theme.spacing.unit - 1 + 'px 0',
      border: 0,
      display: 'block',
      boxSizing: 'content-box',
      verticalAlign: 'middle',
      background: 'none',
      margin: 0, // Reset for Safari
      width: '100%',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder, // Firefox 19+
      '&:-ms-input-placeholder': placeholder, // IE 11
      '&::-ms-input-placeholder': placeholder, // Edge
      '&:focus': {
        outline: 0
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        appearance: 'none'
      },
      'label + $formControl > &': {
        '&::-webkit-input-placeholder': placeholderForm,
        '&::-moz-placeholder': placeholderForm, // Firefox 19+
        '&:-ms-input-placeholder': placeholderForm, // IE 11
        '&::-ms-input-placeholder': placeholderForm, // Edge
        '&:focus::-webkit-input-placeholder': placeholderFormFocus,
        '&:focus::-moz-placeholder': placeholderFormFocus, // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderFormFocus, // IE 11
        '&:focus::-ms-input-placeholder': placeholderFormFocus // Edge
      }
    },
    inputDense: {
      paddingTop: theme.spacing.unit / 2
    },
    disabled: {
      color: theme.palette.text.disabled
    },
    focused: {},
    underline: {
      paddingBottom: 2,
      '&:before': {
        backgroundColor: theme.palette.input.bottomLine,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        height: 1,
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('backgroundColor', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.ease
        })
      },
      '&:hover:not($disabled):before': {
        backgroundColor: theme.palette.text.primary,
        height: 2
      },
      '&$disabled:before': {
        background: 'transparent',
        backgroundImage: 'linear-gradient(to right, ' + theme.palette.input.bottomLine + ' 33%, transparent 0%)',
        backgroundPosition: 'left top',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '5px 1px'
      }
    },
    multiline: {
      padding: theme.spacing.unit - 2 + 'px 0 ' + (theme.spacing.unit + 1) + 'px'
    },
    inputDisabled: {
      opacity: 1 // Reset iOS opacity
    },
    inputSingleline: {
      height: '1em',
      appearance: 'textfield' // Improve type search style.
    },
    inputMultiline: {
      resize: 'none',
      padding: 0
    },
    fullWidth: {
      width: '100%'
    }
  };
});

var Input = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.input = null, _this.handleFocus = function (event) {
      _this.setState({ focused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleBlur = function (event) {
      _this.setState({ focused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleChange = function (event) {
      if (!_this.isControlled()) {
        _this.checkDirty(_this.input);
      } // else perform in the willUpdate
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _this.handleRefInput = function (node) {
      _this.input = node;
      if (_this.props.inputRef) {
        _this.props.inputRef(node);
      }
    }, _this.handleRefTextarea = function (node) {
      _this.input = node;
      if (_this.props.inputRef) {
        _this.props.inputRef(node);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Input, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.isControlled()) {
        this.checkDirty(this.props);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.isControlled()) {
        this.checkDirty(this.input);
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (this.isControlled()) {
        this.checkDirty(nextProps);
      } // else performed in the onChange
    }

    // Holds the input reference

  }, {
    key: 'isControlled',
    value: function isControlled() {
      return typeof this.props.value === 'string';
    }
  }, {
    key: 'checkDirty',
    value: function checkDirty(obj) {
      var muiFormControl = this.context.muiFormControl;


      if (isDirty(obj)) {
        if (muiFormControl && muiFormControl.onDirty) {
          muiFormControl.onDirty();
        }
        if (this.props.onDirty) {
          this.props.onDirty();
        }
        return;
      }

      if (muiFormControl && muiFormControl.onClean) {
        muiFormControl.onClean();
      }
      if (this.props.onClean) {
        this.props.onClean();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          autoComplete = _props.autoComplete,
          autoFocus = _props.autoFocus,
          classes = _props.classes,
          classNameProp = _props.className,
          component = _props.component,
          defaultValue = _props.defaultValue,
          disabledProp = _props.disabled,
          disableUnderline = _props.disableUnderline,
          errorProp = _props.error,
          fullWidth = _props.fullWidth,
          id = _props.id,
          inputPropsProp = _props.inputProps,
          inputRef = _props.inputRef,
          marginProp = _props.margin,
          multiline = _props.multiline,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onChange = _props.onChange,
          onClean = _props.onClean,
          onDirty = _props.onDirty,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          placeholder = _props.placeholder,
          name = _props.name,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoComplete', 'autoFocus', 'classes', 'className', 'component', 'defaultValue', 'disabled', 'disableUnderline', 'error', 'fullWidth', 'id', 'inputProps', 'inputRef', 'margin', 'multiline', 'onBlur', 'onFocus', 'onChange', 'onClean', 'onDirty', 'onKeyDown', 'onKeyUp', 'placeholder', 'name', 'rows', 'rowsMax', 'type', 'value']);
      var muiFormControl = this.context.muiFormControl;


      var disabled = disabledProp;
      var error = errorProp;
      var margin = marginProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }

        if (typeof error === 'undefined') {
          error = muiFormControl.error;
        }

        if (typeof margin === 'undefined') {
          margin = muiFormControl.margin;
        }
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.error, error), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty3.default)(_classNames, classes.focused, this.state.focused), (0, _defineProperty3.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty3.default)(_classNames, classes.inkbar, !disableUnderline), (0, _defineProperty3.default)(_classNames, classes.multiline, multiline), (0, _defineProperty3.default)(_classNames, classes.underline, !disableUnderline), _classNames), classNameProp);

      var inputClassName = (0, _classnames2.default)(classes.input, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.inputDisabled, disabled), (0, _defineProperty3.default)(_classNames2, classes.inputSingleline, !multiline), (0, _defineProperty3.default)(_classNames2, classes.inputMultiline, multiline), (0, _defineProperty3.default)(_classNames2, classes.inputDense, margin === 'dense'), _classNames2));

      var required = muiFormControl && muiFormControl.required === true;

      var InputComponent = 'input';
      var inputProps = (0, _extends3.default)({
        ref: this.handleRefInput
      }, inputPropsProp);

      if (component) {
        inputProps = (0, _extends3.default)({
          rowsMax: rowsMax
        }, inputProps);
        InputComponent = component;
      } else if (multiline) {
        if (rows && !rowsMax) {
          inputProps = (0, _extends3.default)({}, inputProps);
          InputComponent = 'textarea';
        } else {
          inputProps = (0, _extends3.default)({
            rowsMax: rowsMax,
            textareaRef: this.handleRefTextarea
          }, inputProps, {
            ref: null
          });
          InputComponent = _Textarea2.default;
        }
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: className }, other),
        _react2.default.createElement(InputComponent, (0, _extends3.default)({
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          className: inputClassName,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          onKeyUp: onKeyUp,
          onKeyDown: onKeyDown,
          disabled: disabled,
          'aria-required': required ? true : undefined,
          value: value,
          id: id,
          name: name,
          defaultValue: defaultValue,
          placeholder: placeholder,
          type: type,
          rows: rows
        }, inputProps))
      );
    }
  }]);
  return Input;
}(_react.Component);

Input.muiName = 'Input';
Input.defaultProps = {
  disableUnderline: false,
  fullWidth: false,
  multiline: false,
  type: 'text'
};
Input.contextTypes = {
  muiFormControl: _propTypes2.default.object
};
Input.propTypes = process.env.NODE_ENV !== "production" ? (_ref2 = {
  disableUnderline: require('prop-types').bool.isRequired,
  fullWidth: require('prop-types').bool.isRequired,
  multiline: require('prop-types').bool.isRequired,
  type: require('prop-types').string.isRequired,
  autoComplete: require('prop-types').string,
  autoFocus: require('prop-types').bool,
  classes: require('prop-types').object.isRequired,
  className: require('prop-types').string,
  component: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').func]),
  defaultValue: require('prop-types').oneOfType([require('prop-types').string, require('prop-types').number]),
  disabled: require('prop-types').bool
}, (0, _defineProperty3.default)(_ref2, 'disableUnderline', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'error', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'fullWidth', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'id', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'inputProps', require('prop-types').object), (0, _defineProperty3.default)(_ref2, 'inputRef', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'margin', require('prop-types').oneOf(['dense'])), (0, _defineProperty3.default)(_ref2, 'multiline', require('prop-types').bool), (0, _defineProperty3.default)(_ref2, 'name', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'onBlur', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onChange', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onClean', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onDirty', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onFocus', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onKeyDown', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'onKeyUp', require('prop-types').func), (0, _defineProperty3.default)(_ref2, 'placeholder', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'rows', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').number])), (0, _defineProperty3.default)(_ref2, 'rowsMax', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').number])), (0, _defineProperty3.default)(_ref2, 'type', require('prop-types').string), (0, _defineProperty3.default)(_ref2, 'value', require('prop-types').oneOfType([require('prop-types').string, require('prop-types').number])), _ref2) : {};
exports.default = (0, _withStyles2.default)(styleSheet)(Input);