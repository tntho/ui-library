var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, H as Host, g as getElement } from './index-ec84eadc.js';
var navbarCss = "*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}:host{display:block}";
var Navbar = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.isMenuActive = false;
        this.light = false;
        this.logoHref = '';
    }
    class_1.prototype.componentWillLoad = function () {
        this.hasNavbarStartSlot = !!this.el.querySelector('[slot="navbar-start"]');
        this.hasNavbarEndSlot = !!this.el.querySelector('[slot="navbar-end"]');
    };
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isMenuActive = !this.isMenuActive;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("nav", { class: 'navbar is-spaced' + (this.light ? ' is-white' : ' is-info'), role: "navigation", "aria-label": "main navigation" }, h("div", { class: "bal-track-line", style: {
                position: 'absolute',
                top: '0',
                left: '0',
                display: !this.light ? 'none' : '',
            } }), h("div", { class: "navbar-brand" }, h("a", { class: "navbar-item app-title", href: this.logoHref }, h("slot", { name: "navbar-brand" })), this.hasNavbarStartSlot || this.hasNavbarEndSlot ?
            h("a", { role: "button", class: 'navbar-burger' + (this.isMenuActive ? ' is-active' : ''), "aria-label": "menu", "aria-expanded": this.isMenuActive ? 'true' : 'false', onClick: function () { return _this.toggle(); } }, h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }), h("span", { "aria-hidden": "true" }))
            : ''), h("div", { class: 'navbar-menu' + (this.isMenuActive ? ' is-active' : '') }, h("div", { class: "navbar-start" }, h("slot", { name: "navbar-start" })), h("div", { class: "navbar-end" }, h("slot", { name: "navbar-end" }))))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Navbar.style = navbarCss;
export { Navbar as bal_navbar };
