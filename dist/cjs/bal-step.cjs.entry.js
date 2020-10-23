'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9347317.js');

const stepCss = ":host{display:block;position:static}";

const Step = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.stepChanged = index.createEvent(this, "balStepChanged", 7);
        this.isContentHidden = true;
        /**
         * This is the key of the step.
         */
        this.value = "";
        /**
         * Label for the step.
         */
        this.label = "";
        /**
         * If `true` a small red bubble is added to the step.
         */
        this.bubble = false;
        /**
         * If `true` the step is disabled.
         */
        this.disabled = false;
        /**
         * Tell's if the step is active and the content is visible.
         */
        this.active = false;
    }
    activatedHandler(newActive) {
        this.isContentHidden = !newActive;
    }
    get options() {
        return {
            value: this.value,
            label: this.label,
            active: this.active,
            disabled: this.disabled,
            hasBubble: this.bubble,
        };
    }
    /**
     * Options of the step like label, value etc.
     */
    async getOptions() {
        return this.options;
    }
    /**
     * Sets the step active.
     */
    async setActive(active) {
        this.active = active;
    }
    componentWillLoad() {
        this.isContentHidden = !this.active;
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { style: this.isContentHidden && { display: "none" } }, index.h("slot", null))));
    }
    static get watchers() { return {
        "active": ["activatedHandler"]
    }; }
};
Step.style = stepCss;

exports.bal_step = Step;
