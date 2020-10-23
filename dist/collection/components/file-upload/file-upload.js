import { Component, Host, h, Prop, Element, Listen, State, Event, } from "@stencil/core";
import filesize from "filesize.js";
import { FileUploadRejectionReason, } from "./file-upload.type";
export class FileUpload {
    constructor() {
        this.bundleSize = 0;
        this.isOver = false;
        this.files = [];
        /**
         * Label of the drop area.
         */
        this.label = "Choose or drop a file...";
        /**
         * If `true` multiple file upload is possible.
         */
        this.multiple = true;
        /**
         * Accepted MIME-Types like `image/png,image/jpeg`.
         */
        this.accept = "";
        /**
         * Allowed number of files in the bundle.
         */
        this.maxFiles = undefined;
        /**
         * Allowed max file size in bytes.
         */
        this.maxFileSize = undefined;
        /**
         * Allowed max bundle size in bytes.
         */
        this.maxBundleSize = undefined;
    }
    dragenterHandler() {
        if (!this.disabled) {
            this.isOver = true;
        }
    }
    dragoverHandler() {
        if (!this.disabled) {
            this.isOver = true;
        }
    }
    dragleaveHandler() {
        if (!this.disabled) {
            this.isOver = false;
        }
    }
    dropHandler(event) {
        if (!this.disabled) {
            this.isOver = false;
            const dataTransfer = event.dataTransfer;
            if (event.dataTransfer) {
                this.handleFiles(dataTransfer.files);
            }
        }
    }
    handleFiles(files) {
        if (!this.disabled) {
            const list = [...this.files];
            for (let index = 0; index < files.length; index++) {
                const file = files.item(index);
                const rejectReasons = [];
                if (this.accept &&
                    this.accept.split(" ").join("").split(",").indexOf(file.type) === -1) {
                    rejectReasons.push(FileUploadRejectionReason.BAD_EXTENSION);
                }
                if (this.maxFileSize && file.size > this.maxFileSize) {
                    rejectReasons.push(FileUploadRejectionReason.FILE_TOO_BIG);
                }
                const transactionFileSizeSum = this.files
                    .map((f) => f.size)
                    .reduce((a, b) => a + b, 0);
                const bundleSize = file.size + transactionFileSizeSum;
                if (this.maxBundleSize && bundleSize > this.maxBundleSize) {
                    rejectReasons.push(FileUploadRejectionReason.FILE_SIZE_SUM_TOO_BIG);
                }
                if (this.maxFiles && list.length + 1 > this.maxFiles) {
                    rejectReasons.push(FileUploadRejectionReason.TOO_MANY_FILES);
                }
                const duplicatedFiles = list.filter((f) => f.size === file.size &&
                    f.name === file.name &&
                    f.type === file.type);
                if (duplicatedFiles.length > 0) {
                    rejectReasons.push(FileUploadRejectionReason.DUPLICATED_FILE);
                }
                if (rejectReasons.length > 0) {
                    this.balFileUploadRejectedFileEventEmitter.emit({
                        file: file,
                        reasons: rejectReasons,
                    });
                }
                else {
                    list.push(file);
                }
            }
            this.files = [...list];
            this.balChangeEventEmitter.emit(this.files);
        }
    }
    componentDidLoad() {
        ;
        ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
            this.element.addEventListener(eventName, this.preventDefaults, false);
            document.body.addEventListener(eventName, this.preventDefaults, false);
        });
    }
    componentDidUnload() {
        ;
        ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
            this.element.removeEventListener(eventName, this.preventDefaults, false);
            document.body.removeEventListener(eventName, this.preventDefaults, false);
        });
    }
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    removeFile(indexToRemove) {
        if (!this.disabled) {
            const list = [];
            for (let index = 0; index < this.files.length; index++) {
                if (index !== indexToRemove) {
                    list.push(this.files[index]);
                }
            }
            this.files = [...list];
            this.balChangeEventEmitter.emit(this.files);
        }
    }
    render() {
        return (h(Host, { class: ["bal-file-upload", this.disabled ? "is-disabled" : ""].join(" ") },
            h("div", { class: "file" },
                h("label", { class: [
                        "file-label",
                        this.isOver ? "is-hovered" : "",
                        this.disabled ? "is-disabled" : "",
                    ].join(" ") },
                    h("input", { class: "file-input", type: "file", name: "resume", multiple: this.multiple, disabled: this.disabled, accept: this.accept, onChange: () => this.handleFiles(this.fileInput.files), ref: (el) => (this.fileInput = el) }),
                    h("span", { class: "file-cta" },
                        h("span", { class: "file-icon" },
                            h("bal-icon", { name: "upload", size: "medium" })),
                        h("span", { class: "file-label" }, this.label)))),
            h("bal-list", { disabled: true, border: true }, this.files.map((file, index) => (h("bal-list-item", null,
                h("bal-list-item-icon", null,
                    h("bal-icon", { size: "medium", name: "document" })),
                h("bal-list-item-content", null,
                    h("bal-list-item-title", null, file.name),
                    h("bal-list-item-subtitle", null, filesize(file.size))),
                h("bal-list-item-icon", { right: true, class: "file-remove", onClick: () => this.removeFile(index) },
                    h("bal-icon", { size: "medium", name: "trash" }))))))));
    }
    static get is() { return "bal-file-upload"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["file-upload.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["file-upload.css"]
    }; }
    static get properties() { return {
        "label": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Label of the drop area."
            },
            "attribute": "label",
            "reflect": false,
            "defaultValue": "\"Choose or drop a file...\""
        },
        "multiple": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true` multiple file upload is possible."
            },
            "attribute": "multiple",
            "reflect": false,
            "defaultValue": "true"
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "If `true` the button is disabled"
            },
            "attribute": "disabled",
            "reflect": false
        },
        "accept": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Accepted MIME-Types like `image/png,image/jpeg`."
            },
            "attribute": "accept",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "maxFiles": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Allowed number of files in the bundle."
            },
            "attribute": "max-files",
            "reflect": false,
            "defaultValue": "undefined"
        },
        "maxFileSize": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Allowed max file size in bytes."
            },
            "attribute": "max-file-size",
            "reflect": false,
            "defaultValue": "undefined"
        },
        "maxBundleSize": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Allowed max bundle size in bytes."
            },
            "attribute": "max-bundle-size",
            "reflect": false,
            "defaultValue": "undefined"
        }
    }; }
    static get states() { return {
        "isOver": {},
        "files": {}
    }; }
    static get events() { return [{
            "method": "balChangeEventEmitter",
            "name": "balChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggers when a file is added or removed."
            },
            "complexType": {
                "original": "File[]",
                "resolved": "File[]",
                "references": {
                    "File": {
                        "location": "global"
                    }
                }
            }
        }, {
            "method": "balFileUploadRejectedFileEventEmitter",
            "name": "balFileUploadRejectedFile",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggers when a file is rejected due to not allowed MIME-Type and so on."
            },
            "complexType": {
                "original": "FileUploadRejectedFile",
                "resolved": "FileUploadRejectedFile",
                "references": {
                    "FileUploadRejectedFile": {
                        "location": "import",
                        "path": "./file-upload.type"
                    }
                }
            }
        }]; }
    static get elementRef() { return "element"; }
    static get listeners() { return [{
            "name": "dragenter",
            "method": "dragenterHandler",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "dragover",
            "method": "dragoverHandler",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "dragleave",
            "method": "dragleaveHandler",
            "target": undefined,
            "capture": false,
            "passive": true
        }, {
            "name": "drop",
            "method": "dropHandler",
            "target": undefined,
            "capture": false,
            "passive": true
        }]; }
}
