webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./components/Signup.js":
/*!******************************!*\
  !*** ./components/Signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "/Users/Adrian/Desktop/Advanced_React/frontend/components/Signup.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNUP_MUTATION(\n    $email: String!\n    $name: String!\n    $password: String!\n  ) {\n    signup(email: $email, name: $name, password: $password) {\n      id\n      email\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var Signup =
/*#__PURE__*/
function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: "",
      email: "",
      password: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveToState", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    return _this;
  }

  _createClass(Signup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
        mutation: SIGNUP_MUTATION,
        variables: this.state,
        refetchQueries: [{
          query: _User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, function (signup, _ref) {
        var error = _ref.error,
            loading = _ref.loading;
        return (// We are explicitly setting this to post, just in case an error occurs, we do not
          //  the values of the form, which includes the password, to show on the URL.
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
            method: "post",
            onSubmit:
            /*#__PURE__*/
            function () {
              var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.preventDefault();
                        _context.next = 3;
                        return signup();

                      case 3:
                        _this2.setState({
                          name: "",
                          email: "",
                          password: ""
                        });

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }(),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
            disabled: loading,
            "aria-busy": loading,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "Sign up for an account!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "email",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "Email", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "email",
            name: "email",
            placeholder: "email",
            value: _this2.state.email,
            onChange: _this2.saveToState,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "name",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, "Name", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "text",
            name: "name",
            placeholder: "name",
            value: _this2.state.name,
            onChange: _this2.saveToState,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
            htmlFor: "password",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, "Password", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
            type: "password",
            name: "password",
            placeholder: "password",
            value: _this2.state.password,
            onChange: _this2.saveToState,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
            type: "submit",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, "Sign Up!")))
        );
      });
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js":
false,

/***/ "./node_modules/date-fns/_lib/isSameUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/_lib/startOfUTCWeek/index.js":
false,

/***/ "./node_modules/date-fns/_lib/toInteger/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/bn/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/de/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-CA/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-CA/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-CA/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-GB/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-GB/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/en-US/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/eo/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/es/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/fr/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/he/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/hu/index.js":
false,

/***/ "./node_modules/date-fns/locale/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/it/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/lt/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/nb/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/nl/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/pt-BR/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/ru/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/sv/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/uk/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/vi/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatDistance/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatLong/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/formatRelative/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/localize/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/_lib/match/index.js":
false,

/***/ "./node_modules/date-fns/locale/zh-CN/index.js":
false,

/***/ "./node_modules/date-fns/toDate/index.js":
false

})
//# sourceMappingURL=signup.js.2b631c835f9fa5673c5e.hot-update.js.map