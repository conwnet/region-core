"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _logger = require("../util/logger");

var _reducerPrototype = require("../util/reducerPrototype");

var _store = require("../global/store");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function setKey(_ref) {
  var state = _ref.state,
      key = _ref.key,
      fetchTime = _ref.fetchTime,
      result = _ref.result,
      error = _ref.error,
      withLoadEnd = _ref.withLoadEnd;
  (0, _reducerPrototype.setValueDeep)(state, ['fetchTimes', key], fetchTime);

  if (result !== undefined) {
    (0, _reducerPrototype.setValueDeep)(state, ['results', key], result);
  }

  (0, _reducerPrototype.setValueDeep)(state, ['errors', key], error); // as well error ===  undefined

  var nextState = (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], withLoadEnd ? function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return v - 1;
  } : function () {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return v;
  });
  return nextState;
}

var _default = function _default(RegionIn) {
  var Region =
  /*#__PURE__*/
  function (_RegionIn) {
    _inherits(Region, _RegionIn);

    function Region() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Region);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Region)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "private_reducer", function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        var _assertThisInitialize = _assertThisInitialized(_this),
            enableLog = _assertThisInitialize.enableLog,
            private_actionTypes = _assertThisInitialize.private_actionTypes;

        var LOAD = private_actionTypes.LOAD,
            SET = private_actionTypes.SET,
            RESET = private_actionTypes.RESET;
        var enableLogInDev = process.env.NODE_ENV !== 'production' && enableLog;

        switch (action.type) {
          case LOAD:
            {
              var key = action.payload.key;

              if (enableLogInDev) {
                (0, _logger.debug)(LOAD, key);
              }

              return (0, _reducerPrototype.assignValueDeep)(state, ['loadings', key], function () {
                var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                return v + 1;
              });
            }

          case SET:
            {
              var _action$payload = action.payload,
                  _key2 = _action$payload.key,
                  result = _action$payload.result,
                  error = _action$payload.error,
                  withLoadEnd = _action$payload.withLoadEnd;
              var fetchTime = new Date().getTime();
              var nextState = setKey({
                state: state,
                key: _key2,
                fetchTime: fetchTime,
                result: result,
                error: error,
                withLoadEnd: withLoadEnd
              });

              if (enableLogInDev) {
                if (error) {
                  console.error(error.message);
                }

                (0, _logger.group)({
                  actionType: SET,
                  key: _key2,
                  result: result,
                  error: error,
                  nextState: nextState
                });
              }

              return nextState;
            }

          case RESET:
            {
              return {};
            }

          default:
            {
              return state;
            }
        }
      });

      var store = (0, _store.getStore)();
      var reducers = store.reducers;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          name = _assertThisInitialize2.name,
          private_reducer = _assertThisInitialize2.private_reducer;

      store.reducers = _objectSpread({}, reducers, _defineProperty({}, name, private_reducer));
      var reducer = (0, _redux.combineReducers)(store.reducers);
      store.replaceReducer(reducer);
      return _this;
    }

    return Region;
  }(RegionIn);

  return Region;
};

exports.default = _default;