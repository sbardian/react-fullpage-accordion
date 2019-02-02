var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import 'normalize.css';
import Panel from './Panel';
import './styles.css';
var FullpageAccordion = /** @class */ (function (_super) {
    __extends(FullpageAccordion, _super);
    function FullpageAccordion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activePanel: undefined,
        };
        _this.handleClick = function (item) {
            var activePanel = _this.state.activePanel;
            var value = item.target.dataset.key
                ? item.target.dataset.key
                : item.target.parentNode.dataset.key;
            value = value === activePanel ? undefined : value;
            _this.setState({
                activePanel: value,
            });
        };
        return _this;
    }
    FullpageAccordion.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, height = _a.height, textStyle = _a.textStyle;
        var activePanel = this.state.activePanel;
        return (React.createElement("div", { className: "panels" }, items.map(function (item) { return (React.createElement(Panel, { key: item.itemId, item: item, height: height, onClick: _this.handleClick, activePanel: activePanel },
            React.createElement("p", { style: __assign({}, textStyle) }, item.top),
            React.createElement("p", { style: __assign({}, textStyle) }, item.middle),
            React.createElement("p", null,
                React.createElement("a", { href: "https://www.google.com", style: __assign({ zIndex: 20 }, textStyle) }, item.bottom)))); })));
    };
    return FullpageAccordion;
}(React.Component));
export default FullpageAccordion;
//# sourceMappingURL=index.js.map