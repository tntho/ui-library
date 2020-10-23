import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var CardSubtitle = /** @class */ (function () {
    function CardSubtitle(hostRef) {
        registerInstance(this, hostRef);
    }
    CardSubtitle.prototype.render = function () {
        return (h(Host, { class: [
                "bal-card-subtitle",
                this.inverted ? "inverted" : ""
            ].join(" "), role: "heading" }, h("slot", null)));
    };
    return CardSubtitle;
}());
export { CardSubtitle as bal_card_subtitle };
