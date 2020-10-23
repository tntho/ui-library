import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var CardContent = /** @class */ (function () {
    function CardContent(hostRef) {
        registerInstance(this, hostRef);
    }
    CardContent.prototype.render = function () {
        return (h(Host, { class: [
                "bal-card-content",
                this.inverted ? "inverted" : ""
            ].join(" ") }, h("slot", null)));
    };
    return CardContent;
}());
export { CardContent as bal_card_content };
