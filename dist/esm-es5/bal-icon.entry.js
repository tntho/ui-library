import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var iconCss = "@charset \"UTF-8\";.icon.sc-bal-icon{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small.sc-bal-icon{height:1rem;width:1rem}.icon.is-medium.sc-bal-icon{height:2rem;width:2rem}.icon.is-large.sc-bal-icon{height:3rem;width:3rem}*.sc-bal-icon{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.icon-alert.sc-bal-icon:before{content:\"\"}.icon-alert-circle.sc-bal-icon:before{content:\"\"}.icon-account.sc-bal-icon:before{content:\"\"}.icon-answer.sc-bal-icon:before{content:\"\"}.icon-call.sc-bal-icon:before{content:\"\"}.icon-caret-down.sc-bal-icon:before{content:\"\"}.icon-caret-left.sc-bal-icon:before{content:\"\"}.icon-caret-right.sc-bal-icon:before{content:\"\"}.icon-caret-up.sc-bal-icon:before{content:\"\"}.icon-check-circle.sc-bal-icon:before{content:\"\"}.icon-check.sc-bal-icon:before{content:\"\"}.icon-close-big.sc-bal-icon:before{content:\"\"}.icon-close-small.sc-bal-icon:before{content:\"\"}.icon-close-thin.sc-bal-icon:before{content:\"\"}.icon-contact.sc-bal-icon:before{content:\"\"}.icon-copy.sc-bal-icon:before{content:\"\"}.icon-date.sc-bal-icon:before{content:\"\"}.icon-document.sc-bal-icon:before{content:\"\"}.icon-download.sc-bal-icon:before{content:\"\"}.icon-edit.sc-bal-icon:before{content:\"\"}.icon-general-consultant.sc-bal-icon:before{content:\"\"}.icon-general-edit.sc-bal-icon:before{content:\"\"}.icon-info-circle.sc-bal-icon:before{content:\"\"}.icon-info.sc-bal-icon:before{content:\"\"}.icon-locate.sc-bal-icon:before{content:\"\"}.icon-location.sc-bal-icon:before{content:\"\"}.icon-menu-bars.sc-bal-icon:before{content:\"\"}.icon-menu-dots.sc-bal-icon:before{content:\"\"}.icon-message.sc-bal-icon:before{content:\"\"}.icon-minus.sc-bal-icon:before{content:\"\"}.icon-nav-back.sc-bal-icon:before{content:\"\"}.icon-nav-dropdown.sc-bal-icon:before{content:\"\"}.icon-nav-go-down.sc-bal-icon:before{content:\"\"}.icon-nav-go-large.sc-bal-icon:before{content:\"\"}.icon-nav-go-left-no-padding.sc-bal-icon:before{content:\"\"}.icon-nav-go-left.sc-bal-icon:before{content:\"\"}.icon-nav-go-right-no-padding.sc-bal-icon:before{content:\"\"}.icon-nav-go-right.sc-bal-icon:before{content:\"\"}.icon-nav-go-small.sc-bal-icon:before{content:\"\"}.icon-nav-go-up.sc-bal-icon:before{content:\"\"}.icon-nav-success.sc-bal-icon:before{content:\"\"}.icon-plus.sc-bal-icon:before{content:\"\"}.icon-read-only.sc-bal-icon:before{content:\"\"}.icon-refresh.sc-bal-icon:before{content:\"\"}.icon-search.sc-bal-icon:before{content:\"\"}.icon-social-facebook-line.sc-bal-icon:before{content:\"\"}.icon-social-linkedin-line.sc-bal-icon:before{content:\"\"}.icon-social-xing-line.sc-bal-icon:before{content:\"\"}.icon-trash.sc-bal-icon:before{content:\"\"}.icon-upload.sc-bal-icon:before{content:\"\"}.icon-clock.sc-bal-icon:before{content:\"\"}.sc-bal-icon-h{display:inline-block;position:static}.icon.sc-bal-icon{font-size:24px}.icon.is-small.sc-bal-icon{font-size:16px}.icon.is-medium.sc-bal-icon{font-size:32px}.icon.is-large.sc-bal-icon{font-size:47px}.icon.sc-bal-icon i.font.sc-bal-icon{font-family:\"bal-ui-library\";font-style:normal;font-weight:normal;text-align:center;color:#003399;font-variant:normal;text-transform:none}";
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The name of the icon without the bal-icon prefix.
         */
        this.name = "";
        /**
         * Defines the size of the icon.
         */
        this.size = "";
        this.isRight = false;
        this.isLeft = false;
    }
    Object.defineProperty(Icon.prototype, "sizeCssClass", {
        get: function () {
            if (this.size && this.size.length > 0) {
                return "is-" + this.size;
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Icon.prototype, "iconCssClass", {
        get: function () {
            return "icon-" + this.name;
        },
        enumerable: false,
        configurable: true
    });
    Icon.prototype.render = function () {
        return (h(Host, null, h("span", { class: [
                "icon",
                this.isRight ? "is-right" : "",
                this.isLeft ? "is-left" : "",
                this.sizeCssClass,
            ].join(" ") }, h("i", { class: [
                this.iconCssClass,
                "font",
            ].join(" ") }))));
    };
    return Icon;
}());
Icon.style = iconCss;
export { Icon as bal_icon };
