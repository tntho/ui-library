import { r as registerInstance, h, H as Host } from './index-ec84eadc.js';

const modalCss = ".modal-close{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.box:not(:last-child){margin-bottom:1.5rem}.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(34, 34, 34, 0.2);border:none;border-radius:100%;cursor:pointer;pointer-events:auto;display:inline-block;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.modal-close::before,.modal-close::after{background-color:#ffffff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.modal-close::before{height:2px;width:50%}.modal-close::after{height:50%;width:2px}.modal-close:hover,.modal-close:focus{background-color:rgba(34, 34, 34, 0.3)}.modal-close:active{background-color:rgba(34, 34, 34, 0.4)}.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.modal-background,.modal{bottom:0;left:0;position:absolute;right:0;top:0}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}a.box{font-weight:400}.section{padding:40px}@media screen and (min-width: 1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.box{background-color:#ffffff;border-radius:0;-webkit-box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 10px 0 rgba(0, 33, 98, 0.15);color:#222222;display:block;padding:0}a.box:hover,a.box:focus{-webkit-box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15)}a.box:active{-webkit-box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 30px 0 rgba(0, 33, 98, 0.15)}.modal{-ms-flex-align:center;align-items:center;display:none;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:-ms-flexbox;display:flex}.modal-background{background-color:rgba(255, 255, 255, 0.5)}.modal-content,.modal-card{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media screen and (min-width: 769px), print{.modal-content,.modal-card{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:30px;top:30px;width:40px}.modal-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-head,.modal-card-foot{-ms-flex-align:center;align-items:center;background-color:#ffffff;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start;padding:40px;position:relative}.modal-card-head{border-bottom:1px solid #d3dbeb;border-top-left-radius:0px;border-top-right-radius:0px}.modal-card-title{color:#003399;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:2rem;line-height:1}.modal-card-foot{border-bottom-left-radius:0px;border-bottom-right-radius:0px;border-top:1px solid #d3dbeb}.modal-card-foot .button:not(:last-child){margin-right:0.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#ffffff;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:40px}:host{display:block}.modal{-ms-flex-pack:start;justify-content:flex-start}.modal-card{width:var(--bal-width, 640px);margin-top:30px}.modal-card .modal-card-head{padding-bottom:0px}.modal-card .modal-card-head .modal-card-title{margin-top:0px;margin-bottom:10px}.modal-card .modal-card-body{padding-top:10px;padding-bottom:20px}.modal-card .modal-card-foot{padding-top:20px}.modal-card .modal-card-foot .modal-card-foot-container{width:100%}.modal-card.no-border .modal-card-head{border:none}.modal-card.no-border .modal-card-foot{border:none}";

const Modal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isActive = false;
        /**
         * Marks this modal as card-style modal, i.e. having visual lines separating head, body, and foot.
         */
        this.card = false;
    }
    async open() {
        this.isActive = true;
    }
    async close() {
        this.isActive = false;
    }
    async handleKeyUp(event) {
        if (this.isActive) {
            if (event.key === "Escape" || event.key === "Esc") {
                event.preventDefault();
                this.close();
            }
        }
    }
    render() {
        return (h(Host, null, h("div", { class: [
                "modal",
                "is-clipped",
                this.isActive ? "is-active" : "",
            ].join(" ") }, h("div", { class: "modal-background" }), h("div", { class: [
                "modal-card box",
                this.card ? "" : "no-border",
            ].join(" ") }, h("header", { class: "modal-card-head" }, h("p", { class: "modal-card-title" }, h("slot", { name: "head" }))), h("section", { class: "modal-card-body" }, h("slot", null)), h("footer", { class: "modal-card-foot" }, h("div", { class: "modal-card-foot-container" }, h("slot", { name: "foot" })))))));
    }
};
Modal.style = modalCss;

export { Modal as bal_modal };
