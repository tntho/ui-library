import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ec84eadc.js';

const stepsCss = ".tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs:not(:last-child){margin-bottom:1.5rem}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.tabs{-webkit-overflow-scrolling:touch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;font-size:0.9375rem;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;color:#222222;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:-0;padding:0.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:transparent;color:#ffffff}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:transparent;color:#ffffff}.tabs ul{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-left{padding-right:0.75em}.tabs ul.is-center{-ms-flex:none;flex:none;-ms-flex-pack:center;justify-content:center;padding-left:0.75em;padding-right:0.75em}.tabs ul.is-right{-ms-flex-pack:end;justify-content:flex-end;padding-left:0.75em}.tabs .icon:first-child{margin-right:0.5em}.tabs .icon:last-child{margin-left:0.5em}.tabs.is-centered ul{-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f6;border-bottom-color:#d3dbeb}.tabs.is-boxed li.is-active a{background-color:#ffffff;border-color:#d3dbeb;border-bottom-color:transparent !important}.tabs.is-fullwidth li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border-color:#d3dbeb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f6;border-color:#e2e3e3;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#009ee7;border-color:#009ee7;color:#003399;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:100%;border-top-left-radius:100%;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:100%;border-top-right-radius:100%;padding-right:1.25em}.tabs.is-small{font-size:0.8125rem}.tabs.is-medium{font-size:1.125rem}.tabs.is-large{font-size:1.375rem}:host{display:block;position:static}.tabs{margin:0 !important;border-bottom:1px solid #d3dbeb}.tabs>ul{margin:0;padding:0}.tabs>ul>li{position:relative;border-top:1px solid #d3dbeb;border-left:1px solid #d3dbeb;max-width:300px;height:100px}.tabs>ul>li:last-child{border-right:1px solid #d3dbeb}.tabs>ul>li>a{line-height:1.2;cursor:pointer;color:#7188b8;font-size:1.375rem;display:-ms-flexbox;display:flex;-ms-flex:1 1;flex:1 1;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0;padding-bottom:2px}.tabs>ul>li>a span.step-index{border-radius:50%;border:1px solid #d3dbeb;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:700;font-family:MetaPro, Arial, sans-serif;color:#003399;height:30px;min-width:30px;line-height:30px;-ms-flex-pack:center;justify-content:center;font-size:0.9375rem}.tabs>ul>li>a span.step-index span{margin-top:-2px;font-weight:700;font-family:MetaPro, Arial, sans-serif;color:#003399}.tabs>ul>li>a span.step-label{display:none;font-size:1.125rem}.tabs>ul>li.is-active>a{color:#003399;border-bottom:2px solid #003399;padding-bottom:0}.tabs>ul>li>a:hover span.step-label{color:#003399}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{cursor:not-allowed;opacity:50%}.tabs>ul>li.is-disabled>a span.step-index,.tabs>ul>li.is-disabled>a:hover span.step-index{border-color:#d3dbeb}.tabs>ul>li.is-disabled>a span.step-label,.tabs>ul>li.is-disabled>a span.step-index,.tabs>ul>li.is-disabled>a:hover span.step-label,.tabs>ul>li.is-disabled>a:hover span.step-index{color:#7188b8}@media screen and (min-width: 769px), print{.tabs>ul>li>a{-ms-flex-wrap:wrap;flex-wrap:wrap}.tabs>ul>li>a span.step-index{-ms-flex-item-align:end;align-self:end}.tabs>ul>li>a span.step-label{text-align:center;-ms-flex-preferred-size:100%;flex-basis:100%;display:inline-block}}@media screen and (min-width: 1024px){.tabs>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.tabs>ul>li>a{-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding-left:20px;padding-right:20px}.tabs>ul>li>a span.step-index{-ms-flex-item-align:center;align-self:center}.tabs>ul>li>a span.step-label{margin-left:20px;text-align:left}}";

const Steps = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stepsDidChange = createEvent(this, "balStepsDidChange", 7);
        this.stepOptions = [];
    }
    /**
     * Select a step.
     */
    async select(value) {
        this.steps.forEach((t) => t.setActive(t.value === value));
        this.readSteps();
    }
    componentWillLoad() {
        this.readSteps();
    }
    stepChanged() {
        this.readSteps();
    }
    get steps() {
        return Array.from(this.element.querySelectorAll("bal-step"));
    }
    readSteps() {
        Promise.all(this.steps.map((value) => value.getOptions())).then((stepOptions) => {
            this.stepOptions = stepOptions;
        });
    }
    async onSelectStep(step) {
        if (!step.disabled) {
            await this.select(step.value);
            this.stepsDidChange.emit(step);
        }
    }
    render() {
        return (h(Host, null, h("div", { class: ["tabs is-fullwidth"].join(" ") }, h("ul", null, this.stepOptions.map((step, index) => (h("li", { class: [
                step.active ? "is-active" : "",
                step.disabled ? "is-disabled" : "",
            ].join(" ") }, h("a", { onClick: () => this.onSelectStep(step) }, h("span", { class: "step-index" }, h("span", null, index + 1)), h("span", { class: "step-label" }, step.label)), h("span", { class: "bubble", style: !step.hasBubble && { display: "none" } })))))), h("slot", null)));
    }
    get element() { return getElement(this); }
};
Steps.style = stepsCss;

export { Steps as bal_steps };
