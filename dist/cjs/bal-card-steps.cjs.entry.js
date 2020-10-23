'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const cardStepsCss = ".tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tabs:not(:last-child){margin-bottom:1.5rem}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.tabs{-webkit-overflow-scrolling:touch;-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;font-size:0.9375rem;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;color:#222222;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:-0;padding:0.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:transparent;color:#ffffff}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:transparent;color:#ffffff}.tabs ul{-ms-flex-align:center;align-items:center;border-bottom-color:#d3dbeb;border-bottom-style:solid;border-bottom-width:0;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-left{padding-right:0.75em}.tabs ul.is-center{-ms-flex:none;flex:none;-ms-flex-pack:center;justify-content:center;padding-left:0.75em;padding-right:0.75em}.tabs ul.is-right{-ms-flex-pack:end;justify-content:flex-end;padding-left:0.75em}.tabs .icon:first-child{margin-right:0.5em}.tabs .icon:last-child{margin-left:0.5em}.tabs.is-centered ul{-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f6;border-bottom-color:#d3dbeb}.tabs.is-boxed li.is-active a{background-color:#ffffff;border-color:#d3dbeb;border-bottom-color:transparent !important}.tabs.is-fullwidth li{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border-color:#d3dbeb;border-style:solid;border-width:1px;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f6;border-color:#e2e3e3;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-top-left-radius:4px;border-bottom-left-radius:4px}.tabs.is-toggle li:last-child a{border-top-right-radius:4px;border-bottom-right-radius:4px}.tabs.is-toggle li.is-active a{background-color:#009ee7;border-color:#009ee7;color:#003399;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:100%;border-top-left-radius:100%;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:100%;border-top-right-radius:100%;padding-right:1.25em}.tabs.is-small{font-size:0.8125rem}.tabs.is-medium{font-size:1.125rem}.tabs.is-large{font-size:1.375rem}:host{display:block;position:static;padding-top:20px}.tabs{margin:0 !important;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;width:100%;max-height:30px;min-height:30px}.tabs>ul{margin:0;padding:0;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.tabs>ul>li{position:relative;height:30px}.tabs>ul>li>a{line-height:1.2;cursor:pointer;display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0;width:30px}.tabs>ul>li>a span.step-index{background:#003399;border:1px solid #003399;border-radius:50%;display:-ms-flexbox;display:flex;height:8px;width:8px;opacity:50%}.tabs>ul>li>a span.step-label,.tabs>ul>li>a span.step-index span{display:none}.tabs>ul>li.is-done>a span.step-index{background:#003399;opacity:100%}.tabs>ul>li.is-active>a span.step-index{background:transparent;opacity:100%}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{cursor:not-allowed}.tabs.is-inverted>ul>li>a span.step-index{background:#ffffff;border:1px solid #ffffff}.tabs.is-inverted>ul>li.is-done>a span.step-index{background:#ffffff;opacity:100%}.tabs.is-inverted>ul>li.is-active>a span.step-index{background:transparent;opacity:100%}.tabs.is-inverted>ul>li.is-done>a span.step-index{background:#ffffff}.tabs.is-hidden{opacity:0}@media screen and (min-width: 1024px){.tabs>ul>li>a{width:50px;color:#7188b8;font-size:1.375rem}.tabs>ul>li>a span.step-index{height:26px;width:26px;line-height:26px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:transparent;border:1px solid #003399;color:#003399}.tabs>ul>li>a span.step-index span{display:-ms-flexbox;display:flex;font-size:0.9375rem}.tabs>ul>li.is-done>a span.step-index span{display:none}.tabs>ul>li.is-done>a span.step-index::after{display:inline-block;position:absolute;background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:24px 24px;content:\"\";top:8px;width:4px;height:10px;border-bottom:2px solid #ffffff;border-right:2px solid #ffffff;border-top:0;border-left:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.tabs>ul>li.is-active>a span.step-index{background:transparent;opacity:100%}.tabs>ul>li.is-active>a span.step-index span{display:-ms-flexbox;display:flex;color:#003399}.tabs>ul>li.is-active>a span.step-index::after{content:none}.tabs>ul>li.is-disabled>a,.tabs>ul>li.is-disabled>a:hover{cursor:not-allowed}.tabs>ul>li.is-disabled>a span.step-index,.tabs>ul>li.is-disabled>a:hover span.step-index{background:transparent;color:#003399}.tabs.is-inverted>ul>li>a{color:#7188b8}.tabs.is-inverted>ul>li>a span.step-index{background:transparent;border:1px solid #ffffff;color:#ffffff}.tabs.is-inverted>ul>li.is-done>a span.step-index{background:#ffffff}.tabs.is-inverted>ul>li.is-done>a span.step-index::after{border-bottom:2px solid #003399;border-right:2px solid #003399}.tabs.is-inverted>ul>li.is-active>a span.step-index{background:transparent}.tabs.is-inverted>ul>li.is-active>a span.step-index span{color:#ffffff}.tabs.is-inverted>ul>li.is-disabled>a span.step-index,.tabs.is-inverted>ul>li.is-disabled>a:hover span.step-index{background:transparent;color:#ffffff}}";

const CardSteps = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.stepsDidChange = index.createEvent(this, "balCardStepsDidChange", 7);
        this.stepOptions = [];
        /**
         * If `true` a the style is ready for a dark background.
         */
        this.inverted = false;
        /**
         * If `true` the steps navigation is hidden.
         */
        this.hidden = false;
        /**
         * If `true` the steps navigation is on.
         */
        this.navigation = false;
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
        return Array.from(this.element.querySelectorAll('bal-card-step'));
    }
    readSteps() {
        Promise.all(this.steps.map((value) => value.getOptions())).then((stepOptions) => {
            this.stepOptions = stepOptions;
        });
    }
    async onSelectStep(step) {
        if (!step.disabled && this.navigation) {
            await this.select(step.value);
            this.stepsDidChange.emit(step);
        }
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: ['tabs', this.inverted ? 'is-inverted' : '', this.hidden ? 'is-hidden' : ''].join(' ') }, index.h("ul", null, this.stepOptions.filter(step => !step.hidden && !this.hidden).map((step, index$1) => (index.h("li", { class: [
                step.active ? 'is-active' : '',
                step.disabled ? 'is-disabled' : '',
                step.done ? 'is-done' : '',
            ].join(' ') }, index.h("a", { onClick: () => this.onSelectStep(step), title: step.label }, index.h("span", { class: "step-index" }, index.h("span", null, index$1 + 1)))))))), index.h("slot", null)));
    }
    get element() { return index.getElement(this); }
};
CardSteps.style = cardStepsCss;

exports.bal_card_steps = CardSteps;
