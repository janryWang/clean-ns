"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _commander = _interopRequireDefault(require("commander"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var deleteNodeModules =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(target, files) {
    var i, file, stat, _files;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < files.length)) {
              _context.next = 25;
              break;
            }

            _context.prev = 2;
            file = _path.default.resolve(target, files[i]);
            _context.next = 6;
            return _fsExtra.default.stat(file);

          case 6:
            stat = _context.sent;

            if (!stat.isDirectory()) {
              _context.next = 17;
              break;
            }

            if (!(file.indexOf('node_modules') > -1)) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return _fsExtra.default.remove(file);

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.next = 15;
            return _fsExtra.default.readdir(file);

          case 15:
            _files = _context.sent;
            deleteNodeModules(file, _files);

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0.message);

          case 22:
            i++;
            _context.next = 1;
            break;

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 19]]);
  }));

  return function deleteNodeModules(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var delDir =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(dir) {
    var files;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _fsExtra.default.readdir(dir);

          case 3:
            files = _context2.sent;
            _context2.next = 6;
            return deleteNodeModules(dir, files);

          case 6:
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0.message);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 8]]);
  }));

  return function delDir(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

_commander.default.action(
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3(dir) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return delDir(_path.default.resolve(process.cwd(), dir));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}());

_commander.default.parse(process.argv);