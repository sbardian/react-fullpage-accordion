"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Panel = function Panel(_ref) {
  var children = _ref.children,
      height = _ref.height,
      item = _ref.item,
      activePanel = _ref.activePanel,
      onClick = _ref.onClick;
  return React.createElement("button", {
    key: item.itemId,
    className: "panel ".concat(activePanel === item.itemId.toString() ? 'open open-active' : null),
    style: {
      backgroundImage: "url(\"".concat(item.imageUrl, "\")"),
      height: height || null
    },
    onClick: onClick,
    onKeyDown: onClick,
    role: "button",
    tabIndex: 0,
    "data-key": item.itemId
  }, children);
};

var _default = Panel;
exports.default = _default;