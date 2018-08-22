'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var promiseCall = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, key, Promise, props, snapshot) {
    var result, _props$params, params, format;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = void 0;
            _props$params = props.params, params = _props$params === undefined ? {} : _props$params, format = props.format;

            dispatch({ type: _config.setLoading, payload: { key: key } });
            _context.next = 5;
            return Promise(params);

          case 5:
            result = _context.sent;

            if (typeof format === 'function') {
              result = formatResult(result, snapshot, key, format);
            }
            return _context.abrupt('return', result);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function promiseCall(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var _getThingsFromState = require('./util/getThingsFromState');

var _config = require('./util/config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isExpired = function isExpired(getState, key) {
  var fetchTime = (0, _getThingsFromState.getFetchTimes)(getState(), key);
  var now = new Date().getTime();
  return now - fetchTime > _config.expiredTime;
};

var groupLog = function groupLog(title, e) {
  if (process.env.NODE_ENV !== 'production') {
    console.groupCollapsed(title);
    console.debug(e);
    console.groupEnd();
  }
};

function formatResult(result, snapshot, key, format) {
  try {
    var formattedResult = format(result, snapshot);
    return formattedResult;
  } catch (e) {
    groupLog('Catch an error when format ' + key + ', return null instead.', e);
    return null;
  }
}

exports.default = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, key, Promise, snapshot, props) {
    var _props$forceUpdate, forceUpdate, _result, result;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _props$forceUpdate = props.forceUpdate, forceUpdate = _props$forceUpdate === undefined ? 'need' : _props$forceUpdate;

            if (!(forceUpdate === 'never' && snapshot)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt('return', snapshot);

          case 3:
            if (!(forceUpdate === 'need' && !isExpired(getState, key) && snapshot)) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt('return', snapshot);

          case 5:
            if (!((typeof Promise === 'undefined' ? 'undefined' : _typeof(Promise)) === 'object' && typeof Promise.then === 'function')) {
              _context2.next = 11;
              break;
            }

            console.warn('redux-loadings: You are passing promise, it may cause performance problem and bugs. Pass a function returns a promise instead');
            _context2.next = 9;
            return Promise;

          case 9:
            _result = _context2.sent;
            return _context2.abrupt('return', _result);

          case 11:
            if (!(typeof Promise !== 'function')) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt('return', Promise);

          case 13:
            _context2.next = 15;
            return promiseCall(dispatch, key, Promise, props, snapshot);

          case 15:
            result = _context2.sent;
            return _context2.abrupt('return', result);

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x6, _x7, _x8, _x9, _x10, _x11) {
    return _ref2.apply(this, arguments);
  };
}();