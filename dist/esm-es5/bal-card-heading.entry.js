import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var CardHeading = /** @class */ (function () {
    function CardHeading(hostRef) {
        registerInstance(this, hostRef);
    }
    CardHeading.prototype.render = function () {
        return (h(Host, { class: "bal-card-heading" }, h("slot", null)));
    };
    return CardHeading;
}());
export { CardHeading as bal_card_heading };
