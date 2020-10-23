import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var CardTitle = /** @class */ (function () {
    function CardTitle(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the card text color becomes white.
         */
        this.inverted = false;
    }
    CardTitle.prototype.render = function () {
        return (h(Host, { class: [
                "bal-card-title",
                this.inverted ? "inverted" : ""
            ].join(' '), role: "heading" }, h("slot", null)));
    };
    return CardTitle;
}());
export { CardTitle as bal_card_title };
