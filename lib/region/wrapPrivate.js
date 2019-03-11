"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _selectProps = _interopRequireDefault(require("../util/selectProps"));

var _deprecate = _interopRequireDefault(require("../util/deprecate"));

var _store = require("../global/store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formatLoading = function formatLoading(loading, _ref) {
  var strictLoading = _ref.strictLoading;

  if (loading) {
    return true;
  }

  if (loading === undefined) {
    if (strictLoading) {
      // treat undefined as true or as undefined
      return true;
    }

    return undefined;
  }

  return false;
};

var mapValues = function mapValues(values, path) {
  if (Array.isArray(path)) {
    return path.map(function (i) {
      return values[i];
    });
  }

  return values[path];
};

var select = function select(_ref2) {
  var selector = _ref2.selector,
      props = _ref2.props,
      ownProps = _ref2.ownProps;

  if (selector && typeof selector === 'function') {
    if (!ownProps) {
      (0, _deprecate.default)('selector is deprecated. This may cause the error. Use unstable_connect instead, or use useProps and hooks into it.');
    } else {
      (0, _deprecate.default)('selector is deprecated. Use unstable_connect instead, or use useProps and hooks into it.');
    }

    return selector(_objectSpread({}, props, ownProps), _objectSpread({}, props, ownProps));
  }

  return {};
};

var _default = function _default(Region) {
  var RegionPrivate =
  /*#__PURE__*/
  function (_Region) {
    _inherits(RegionPrivate, _Region);

    function RegionPrivate() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RegionPrivate);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegionPrivate)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "private_getState", function () {
        var _assertThisInitialize = _assertThisInitialized(_this),
            name = _assertThisInitialize.name;

        var _getStore = (0, _store.getStore)(),
            getState = _getStore.getState;

        var state = getState();

        if (name === null) {
          return state || {};
        }

        return state[name] || {};
      });

      _defineProperty(_assertThisInitialized(_this), "private_getLoading", function (path) {
        var _assertThisInitialize2 = _assertThisInitialized(_this),
            private_getState = _assertThisInitialize2.private_getState,
            strictLoading = _assertThisInitialize2.strictLoading;

        var _private_getState = private_getState(),
            loadings = _private_getState.loadings;

        if (!loadings) {
          return true;
        }

        var mapLoadings = mapValues(loadings, path);

        if (Array.isArray(mapLoadings)) {
          return mapLoadings.map(function (i) {
            return formatLoading(i, {
              strictLoading: strictLoading
            });
          }).reduce(function (a, b) {
            return a || b;
          }, false);
        }

        return formatLoading(mapLoadings, {
          strictLoading: strictLoading
        });
      });

      _defineProperty(_assertThisInitialized(_this), "private_getFetchTimes", function (path) {
        var _assertThisInitialize3 = _assertThisInitialized(_this),
            private_getState = _assertThisInitialize3.private_getState;

        var _private_getState2 = private_getState(),
            _private_getState2$fe = _private_getState2.fetchTimes,
            fetchTimes = _private_getState2$fe === void 0 ? {} : _private_getState2$fe;

        return mapValues(fetchTimes, path);
      });

      _defineProperty(_assertThisInitialized(_this), "private_getResults", function (path) {
        var _assertThisInitialize4 = _assertThisInitialized(_this),
            private_getState = _assertThisInitialize4.private_getState;

        var _private_getState3 = private_getState(),
            _private_getState3$re = _private_getState3.results,
            results = _private_getState3$re === void 0 ? {} : _private_getState3$re;

        return mapValues(results, path);
      });

      _defineProperty(_assertThisInitialized(_this), "private_getError", function (path) {
        var _assertThisInitialize5 = _assertThisInitialized(_this),
            private_getState = _assertThisInitialize5.private_getState;

        var _private_getState4 = private_getState(),
            _private_getState4$er = _private_getState4.errors,
            errors = _private_getState4$er === void 0 ? {} : _private_getState4$er;

        var mapErrors = mapValues(errors, path);

        if (Array.isArray(mapErrors)) {
          var filteredErrors = mapErrors.filter(function (e) {
            return e;
          });

          if (filteredErrors.length > 0) {
            return filteredErrors.map(function (e) {
              return e.message;
            }).join(', ');
          }

          return undefined;
        }

        return mapErrors && mapErrors.message;
      });

      _defineProperty(_assertThisInitialized(_this), "getProps", function (key) {
        var _assertThisInitialize6 = _assertThisInitialized(_this),
            getLoading = _assertThisInitialize6.private_getLoading,
            getResults = _assertThisInitialize6.private_getResults,
            getError = _assertThisInitialize6.private_getError;

        if (typeof key === 'string' || Array.isArray(key)) {
          return (0, _selectProps.default)(key, getLoading(key), getResults(key), getError(key));
        }

        return (0, _selectProps.default)(key.result || key.key, getLoading(key.loading || key.key), getResults(key.result || key.key), getError(key.error || key.key));
      });

      _defineProperty(_assertThisInitialized(_this), "private_selectorFactory", function (key) {
        var _assertThisInitialize7 = _assertThisInitialized(_this),
            getProps = _assertThisInitialize7.getProps;

        return function (state, ownProps) {
          var props = getProps(key);
          var selectedProps = select({
            selector: key.selector,
            props: props,
            ownProps: ownProps
          });
          return _objectSpread({}, props, selectedProps);
        };
      });

      return _this;
    }

    return RegionPrivate;
  }(Region);

  return RegionPrivate;
};

exports.default = _default;