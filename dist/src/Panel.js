import React from 'react';
var Panel = function (_a) {
    var children = _a.children, height = _a.height, item = _a.item, activePanel = _a.activePanel, onClick = _a.onClick;
    return (React.createElement("button", { key: item.itemId, className: "panel " + (activePanel === item.itemId.toString() ? 'open open-active' : null), style: {
            backgroundImage: "url(\"" + item.imageUrl + "\")",
            height: height || null,
        }, onClick: onClick, onKeyDown: onClick, role: "button", tabIndex: 0, "data-key": item.itemId }, children));
};
export default Panel;
//# sourceMappingURL=Panel.js.map