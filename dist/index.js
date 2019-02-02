"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("normalize.css");

var _Panel = _interopRequireDefault(require("./Panel"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FullpageAccordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FullpageAccordion, _React$Component);

  function FullpageAccordion(props) {
    var _this;

    _classCallCheck(this, FullpageAccordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FullpageAccordion).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (item) {
      var activePanel = _this.state.activePanel;
      var value = item.target.dataset.key ? item.target.dataset.key : item.target.parentNode.dataset.key;
      value = value === activePanel ? null : value;

      _this.setState({
        activePanel: value
      });
    });

    _this.state = {
      activePanel: null
    };
    return _this;
  }

  _createClass(FullpageAccordion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          height = _this$props.height,
          textStyle = _this$props.textStyle;
      var activePanel = this.state.activePanel;
      return _react.default.createElement("div", {
        className: "panels"
      }, items.map(function (item) {
        return _react.default.createElement(_Panel.default, {
          key: item.itemId,
          item: item,
          height: height,
          onClick: _this2.handleClick,
          activePanel: activePanel
        }, _react.default.createElement("p", {
          style: _objectSpread({}, textStyle)
        }, item.top), _react.default.createElement("p", {
          style: _objectSpread({}, textStyle)
        }, item.middle), _react.default.createElement("p", null, _react.default.createElement("a", {
          href: "https://www.google.com",
          style: _objectSpread({
            zIndex: 20
          }, textStyle)
        }, item.bottom)));
      }));
    }
  }]);

  return FullpageAccordion;
}(_react.default.Component);

var _default = FullpageAccordion;
exports.default = _default;