import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';
var CardActions = /** @class */ (function () {
    function CardActions(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true` the buttons start form right to left.
         */
        this.right = false;
    }
    CardActions.prototype.render = function () {
        return (h(Host, { class: ["bal-card-actions", this.right ? "is-right" : ""].join(" ") }, h("slot", null)));
    };
    return CardActions;
}());
export { CardActions as bal_card_actions };
