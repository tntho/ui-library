var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-ec84eadc.js';
var dropdownCss = ".file{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select:not(.is-multiple):not(.is-loading)::after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:0.625em}.control.is-loading::after,.select.is-loading::after{-webkit-animation:spinAround 500ms infinite linear;animation:spinAround 500ms infinite linear;border:2px solid #ebecec;border-radius:100%;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}.file-cta,.file-name,.select select,.textarea,.input{-moz-appearance:none;-webkit-appearance:none;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-ms-inline-flexbox;display:inline-flex;font-size:0.9375rem;height:2.5em;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-bottom:calc(0.5em - 1px);padding-left:calc(0.75em - 1px);padding-right:calc(0.75em - 1px);padding-top:calc(0.5em - 1px);position:relative;vertical-align:top}.file-cta:focus,.file-name:focus,.select select:focus,.textarea:focus,.input:focus,.is-focused.file-cta,.is-focused.file-name,.select select.is-focused,.is-focused.textarea,.is-focused.input,.file-cta:active,.file-name:active,.select select:active,.textarea:active,.input:active,.is-active.file-cta,.is-active.file-name,.select select.is-active,.is-active.textarea,.is-active.input{outline:none}[disabled].file-cta,[disabled].file-name,.select select[disabled],[disabled].textarea,[disabled].input,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input{cursor:not-allowed}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}input.input,textarea.textarea{border-top:none;border-left:none;border-right:none;border-width:1px;border-radius:0;-webkit-box-shadow:none;box-shadow:none;padding:1px 0 2px 0;font-size:1.125rem;outline:none;color:#222222}input.input:focus,input.input.is-focused,textarea.textarea:focus,textarea.textarea.is-focused{border-width:2px;border-color:#003399;padding:1px 0 1px 0;-webkit-box-shadow:none;box-shadow:none}input.input:disabled,textarea.textarea:disabled{padding-left:5px;padding-right:5px}input.input.is-inverted,textarea.textarea.is-inverted{color:#ffffff;border-bottom-color:#99add6}input.input.is-inverted:focus,input.input.is-inverted.is-focused,textarea.textarea.is-inverted:focus,textarea.textarea.is-inverted.is-focused{border-width:2px;border-bottom-color:#ffffff}input.input.is-inverted:disabled,textarea.textarea.is-inverted:disabled{background-color:#002b82}input.input.is-inverted::-webkit-input-placeholder,textarea.textarea.is-inverted::-webkit-input-placeholder{color:#7188b8}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:31px !important}.control.has-icons-right .icon{top:5px !important;height:31px !important;width:31px !important}label.label bal-hint{margin-left:8px}.dropdown{display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:initial;top:auto}.dropdown-menu{display:none;left:0;min-width:18.75rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#ffffff;border-radius:0px;-webkit-box-shadow:0 0 16px 0 rgba(0, 33, 98, 0.15);box-shadow:0 0 16px 0 rgba(0, 33, 98, 0.15);padding-bottom:14px;padding-top:14px}.dropdown-item{color:#003399;display:block;font-size:0.875rem;line-height:1.5;padding:0.375rem 1rem;position:relative}a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:inherit;white-space:nowrap;width:100%}a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f0fbff;color:#003399}a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#f0fbff;color:#003399}.dropdown-divider{background-color:#99add6;border:none;display:block;height:1px;margin:0.5rem 0}.select select,.textarea,.input{background-color:transparent;border-color:#d3dbeb;border-radius:0;color:#222222}.select select::-moz-placeholder,.textarea::-moz-placeholder,.input::-moz-placeholder{color:#7e7e7e}.select select::-webkit-input-placeholder,.textarea::-webkit-input-placeholder,.input::-webkit-input-placeholder{color:#7e7e7e}.select select:-moz-placeholder,.textarea:-moz-placeholder,.input:-moz-placeholder{color:#7e7e7e}.select select:-ms-input-placeholder,.textarea:-ms-input-placeholder,.input:-ms-input-placeholder{color:#7e7e7e}.select select:hover,.textarea:hover,.input:hover,.select select.is-hovered,.is-hovered.textarea,.is-hovered.input{border-color:#d3dbeb}.select select:focus,.textarea:focus,.input:focus,.select select.is-focused,.is-focused.textarea,.is-focused.input,.select select:active,.textarea:active,.input:active,.select select.is-active,.is-active.textarea,.is-active.input{border-color:#003399;-webkit-box-shadow:0 none;box-shadow:0 none}.select select[disabled],[disabled].textarea,[disabled].input,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input{background-color:#f0fbff;border-color:#d3dbeb;-webkit-box-shadow:none;box-shadow:none;color:#7188b8}.select select[disabled]::-moz-placeholder,[disabled].textarea::-moz-placeholder,[disabled].input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder{color:#7188b8}.select select[disabled]::-webkit-input-placeholder,[disabled].textarea::-webkit-input-placeholder,[disabled].input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder{color:#7188b8}.select select[disabled]:-moz-placeholder,[disabled].textarea:-moz-placeholder,[disabled].input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder{color:#7188b8}.select select[disabled]:-ms-input-placeholder,[disabled].textarea:-ms-input-placeholder,[disabled].input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder{color:#7188b8}.textarea,.input{-webkit-box-shadow:none;box-shadow:none;max-width:100%;width:100%}[readonly].textarea,[readonly].input{-webkit-box-shadow:none;box-shadow:none}.is-white.textarea,.is-white.input{border-color:#ffffff}.is-white.textarea:focus,.is-white.input:focus,.is-white.is-focused.textarea,.is-white.is-focused.input,.is-white.textarea:active,.is-white.input:active,.is-white.is-active.textarea,.is-white.is-active.input{-webkit-box-shadow:0 rgba(255, 255, 255, 0.25);box-shadow:0 rgba(255, 255, 255, 0.25)}.is-black.textarea,.is-black.input{border-color:#222222}.is-black.textarea:focus,.is-black.input:focus,.is-black.is-focused.textarea,.is-black.is-focused.input,.is-black.textarea:active,.is-black.input:active,.is-black.is-active.textarea,.is-black.is-active.input{-webkit-box-shadow:0 rgba(34, 34, 34, 0.25);box-shadow:0 rgba(34, 34, 34, 0.25)}.is-light.textarea,.is-light.input{border-color:#fafafa}.is-light.textarea:focus,.is-light.input:focus,.is-light.is-focused.textarea,.is-light.is-focused.input,.is-light.textarea:active,.is-light.input:active,.is-light.is-active.textarea,.is-light.is-active.input{-webkit-box-shadow:0 rgba(250, 250, 250, 0.25);box-shadow:0 rgba(250, 250, 250, 0.25)}.is-dark.textarea,.is-dark.input{border-color:#003399}.is-dark.textarea:focus,.is-dark.input:focus,.is-dark.is-focused.textarea,.is-dark.is-focused.input,.is-dark.textarea:active,.is-dark.input:active,.is-dark.is-active.textarea,.is-dark.is-active.input{-webkit-box-shadow:0 rgba(0, 51, 153, 0.25);box-shadow:0 rgba(0, 51, 153, 0.25)}.is-primary.textarea,.is-primary.input{border-color:#009ee7}.is-primary.textarea:focus,.is-primary.input:focus,.is-primary.is-focused.textarea,.is-primary.is-focused.input,.is-primary.textarea:active,.is-primary.input:active,.is-primary.is-active.textarea,.is-primary.is-active.input{-webkit-box-shadow:0 rgba(0, 158, 231, 0.25);box-shadow:0 rgba(0, 158, 231, 0.25)}.is-link.textarea,.is-link.input{border-color:#009ee7}.is-link.textarea:focus,.is-link.input:focus,.is-link.is-focused.textarea,.is-link.is-focused.input,.is-link.textarea:active,.is-link.input:active,.is-link.is-active.textarea,.is-link.is-active.input{-webkit-box-shadow:0 rgba(0, 158, 231, 0.25);box-shadow:0 rgba(0, 158, 231, 0.25)}.is-info.textarea,.is-info.input{border-color:#003399}.is-info.textarea:focus,.is-info.input:focus,.is-info.is-focused.textarea,.is-info.is-focused.input,.is-info.textarea:active,.is-info.input:active,.is-info.is-active.textarea,.is-info.is-active.input{-webkit-box-shadow:0 rgba(0, 51, 153, 0.25);box-shadow:0 rgba(0, 51, 153, 0.25)}.is-success.textarea,.is-success.input{border-color:#3fc889}.is-success.textarea:focus,.is-success.input:focus,.is-success.is-focused.textarea,.is-success.is-focused.input,.is-success.textarea:active,.is-success.input:active,.is-success.is-active.textarea,.is-success.is-active.input{-webkit-box-shadow:0 rgba(63, 200, 137, 0.25);box-shadow:0 rgba(63, 200, 137, 0.25)}.is-warning.textarea,.is-warning.input{border-color:#ff9900}.is-warning.textarea:focus,.is-warning.input:focus,.is-warning.is-focused.textarea,.is-warning.is-focused.input,.is-warning.textarea:active,.is-warning.input:active,.is-warning.is-active.textarea,.is-warning.is-active.input{-webkit-box-shadow:0 rgba(255, 153, 0, 0.25);box-shadow:0 rgba(255, 153, 0, 0.25)}.is-danger.textarea,.is-danger.input{border-color:#ff3366}.is-danger.textarea:focus,.is-danger.input:focus,.is-danger.is-focused.textarea,.is-danger.is-focused.input,.is-danger.textarea:active,.is-danger.input:active,.is-danger.is-active.textarea,.is-danger.is-active.input{-webkit-box-shadow:0 rgba(255, 51, 102, 0.25);box-shadow:0 rgba(255, 51, 102, 0.25)}.is-small.textarea,.is-small.input{border-radius:4px;font-size:0.8125rem}.is-medium.textarea,.is-medium.input{font-size:1.125rem}.is-large.textarea,.is-large.input{font-size:1.375rem}.is-fullwidth.textarea,.is-fullwidth.input{display:block;width:100%}.is-inline.textarea,.is-inline.input{display:inline;width:auto}.input.is-rounded{border-radius:100%;padding-left:calc(calc(0.75em - 1px) + 0.375em);padding-right:calc(calc(0.75em - 1px) + 0.375em)}.input.is-static{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(0.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.radio,.checkbox{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.radio input,.checkbox input{cursor:pointer}.radio:hover,.checkbox:hover{color:#003399}[disabled].radio,[disabled].checkbox,fieldset[disabled] .radio,fieldset[disabled] .checkbox{color:#7188b8;cursor:not-allowed}.radio+.radio{margin-left:0.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:38px}.select:not(.is-multiple):not(.is-loading)::after{border-color:#009ee7;right:1.125em;z-index:4}.select.is-rounded select{border-radius:100%;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#d3dbeb}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:0.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#003399}.select.is-white:not(:hover)::after{border-color:#ffffff}.select.is-white select{border-color:#ffffff}.select.is-white select:hover,.select.is-white select.is-hovered{border-color:#f2f2f2}.select.is-white select:focus,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select.is-active{-webkit-box-shadow:0 rgba(255, 255, 255, 0.25);box-shadow:0 rgba(255, 255, 255, 0.25)}.select.is-black:not(:hover)::after{border-color:#222222}.select.is-black select{border-color:#222222}.select.is-black select:hover,.select.is-black select.is-hovered{border-color:#151515}.select.is-black select:focus,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select.is-active{-webkit-box-shadow:0 rgba(34, 34, 34, 0.25);box-shadow:0 rgba(34, 34, 34, 0.25)}.select.is-light:not(:hover)::after{border-color:#fafafa}.select.is-light select{border-color:#fafafa}.select.is-light select:hover,.select.is-light select.is-hovered{border-color:#ededed}.select.is-light select:focus,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select.is-active{-webkit-box-shadow:0 rgba(250, 250, 250, 0.25);box-shadow:0 rgba(250, 250, 250, 0.25)}.select.is-dark:not(:hover)::after{border-color:#003399}.select.is-dark select{border-color:#003399}.select.is-dark select:hover,.select.is-dark select.is-hovered{border-color:#002b80}.select.is-dark select:focus,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select.is-active{-webkit-box-shadow:0 rgba(0, 51, 153, 0.25);box-shadow:0 rgba(0, 51, 153, 0.25)}.select.is-primary:not(:hover)::after{border-color:#009ee7}.select.is-primary select{border-color:#009ee7}.select.is-primary select:hover,.select.is-primary select.is-hovered{border-color:#008dce}.select.is-primary select:focus,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select.is-active{-webkit-box-shadow:0 rgba(0, 158, 231, 0.25);box-shadow:0 rgba(0, 158, 231, 0.25)}.select.is-link:not(:hover)::after{border-color:#009ee7}.select.is-link select{border-color:#009ee7}.select.is-link select:hover,.select.is-link select.is-hovered{border-color:#008dce}.select.is-link select:focus,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select.is-active{-webkit-box-shadow:0 rgba(0, 158, 231, 0.25);box-shadow:0 rgba(0, 158, 231, 0.25)}.select.is-info:not(:hover)::after{border-color:#003399}.select.is-info select{border-color:#003399}.select.is-info select:hover,.select.is-info select.is-hovered{border-color:#002b80}.select.is-info select:focus,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select.is-active{-webkit-box-shadow:0 rgba(0, 51, 153, 0.25);box-shadow:0 rgba(0, 51, 153, 0.25)}.select.is-success:not(:hover)::after{border-color:#3fc889}.select.is-success select{border-color:#3fc889}.select.is-success select:hover,.select.is-success select.is-hovered{border-color:#35b97c}.select.is-success select:focus,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select.is-active{-webkit-box-shadow:0 rgba(63, 200, 137, 0.25);box-shadow:0 rgba(63, 200, 137, 0.25)}.select.is-warning:not(:hover)::after{border-color:#ff9900}.select.is-warning select{border-color:#ff9900}.select.is-warning select:hover,.select.is-warning select.is-hovered{border-color:#e68a00}.select.is-warning select:focus,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select.is-active{-webkit-box-shadow:0 rgba(255, 153, 0, 0.25);box-shadow:0 rgba(255, 153, 0, 0.25)}.select.is-danger:not(:hover)::after{border-color:#ff3366}.select.is-danger select{border-color:#ff3366}.select.is-danger select:hover,.select.is-danger select.is-hovered{border-color:#ff1a53}.select.is-danger select:focus,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select.is-active{-webkit-box-shadow:0 rgba(255, 51, 102, 0.25);box-shadow:0 rgba(255, 51, 102, 0.25)}.select.is-small{border-radius:4px;font-size:0.8125rem}.select.is-medium{font-size:1.125rem}.select.is-large{font-size:1.375rem}.select.is-disabled::after{border-color:#7188b8}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:0.625em;top:0.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:0.8125rem}.select.is-loading.is-medium:after{font-size:1.125rem}.select.is-loading.is-large:after{font-size:1.375rem}.file{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#ffffff;border-color:transparent;color:#222222}.file.is-white:hover .file-cta,.file.is-white.is-hovered .file-cta{background-color:#f9f9f9;border-color:transparent;color:#222222}.file.is-white:focus .file-cta,.file.is-white.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 255, 255, 0.25);box-shadow:0 0 0.5em rgba(255, 255, 255, 0.25);color:#222222}.file.is-white:active .file-cta,.file.is-white.is-active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#222222}.file.is-black .file-cta{background-color:#222222;border-color:transparent;color:#ffffff}.file.is-black:hover .file-cta,.file.is-black.is-hovered .file-cta{background-color:#1c1c1c;border-color:transparent;color:#ffffff}.file.is-black:focus .file-cta,.file.is-black.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(34, 34, 34, 0.25);box-shadow:0 0 0.5em rgba(34, 34, 34, 0.25);color:#ffffff}.file.is-black:active .file-cta,.file.is-black.is-active .file-cta{background-color:#151515;border-color:transparent;color:#ffffff}.file.is-light .file-cta{background-color:#fafafa;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-light:hover .file-cta,.file.is-light.is-hovered .file-cta{background-color:#f4f4f4;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-light:focus .file-cta,.file.is-light.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(250, 250, 250, 0.25);box-shadow:0 0 0.5em rgba(250, 250, 250, 0.25);color:rgba(0, 0, 0, 0.7)}.file.is-light:active .file-cta,.file.is-light.is-active .file-cta{background-color:#ededed;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-dark .file-cta{background-color:#003399;border-color:transparent;color:#fff}.file.is-dark:hover .file-cta,.file.is-dark.is-hovered .file-cta{background-color:#002f8c;border-color:transparent;color:#fff}.file.is-dark:focus .file-cta,.file.is-dark.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);color:#fff}.file.is-dark:active .file-cta,.file.is-dark.is-active .file-cta{background-color:#002b80;border-color:transparent;color:#fff}.file.is-primary .file-cta{background-color:#009ee7;border-color:transparent;color:#ffffff}.file.is-primary:hover .file-cta,.file.is-primary.is-hovered .file-cta{background-color:#0095da;border-color:transparent;color:#ffffff}.file.is-primary:focus .file-cta,.file.is-primary.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);color:#ffffff}.file.is-primary:active .file-cta,.file.is-primary.is-active .file-cta{background-color:#008dce;border-color:transparent;color:#ffffff}.file.is-link .file-cta{background-color:#009ee7;border-color:transparent;color:#003399}.file.is-link:hover .file-cta,.file.is-link.is-hovered .file-cta{background-color:#0095da;border-color:transparent;color:#003399}.file.is-link:focus .file-cta,.file.is-link.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);color:#003399}.file.is-link:active .file-cta,.file.is-link.is-active .file-cta{background-color:#008dce;border-color:transparent;color:#003399}.file.is-info .file-cta{background-color:#003399;border-color:transparent;color:#fff}.file.is-info:hover .file-cta,.file.is-info.is-hovered .file-cta{background-color:#002f8c;border-color:transparent;color:#fff}.file.is-info:focus .file-cta,.file.is-info.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);color:#fff}.file.is-info:active .file-cta,.file.is-info.is-active .file-cta{background-color:#002b80;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#3fc889;border-color:transparent;color:#ffffff}.file.is-success:hover .file-cta,.file.is-success.is-hovered .file-cta{background-color:#38c383;border-color:transparent;color:#ffffff}.file.is-success:focus .file-cta,.file.is-success.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(63, 200, 137, 0.25);box-shadow:0 0 0.5em rgba(63, 200, 137, 0.25);color:#ffffff}.file.is-success:active .file-cta,.file.is-success.is-active .file-cta{background-color:#35b97c;border-color:transparent;color:#ffffff}.file.is-warning .file-cta{background-color:#ff9900;border-color:transparent;color:#fff}.file.is-warning:hover .file-cta,.file.is-warning.is-hovered .file-cta{background-color:#f29100;border-color:transparent;color:#fff}.file.is-warning:focus .file-cta,.file.is-warning.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 153, 0, 0.25);box-shadow:0 0 0.5em rgba(255, 153, 0, 0.25);color:#fff}.file.is-warning:active .file-cta,.file.is-warning.is-active .file-cta{background-color:#e68a00;border-color:transparent;color:#fff}.file.is-danger .file-cta{background-color:#ff3366;border-color:transparent;color:#fff}.file.is-danger:hover .file-cta,.file.is-danger.is-hovered .file-cta{background-color:#ff265c;border-color:transparent;color:#fff}.file.is-danger:focus .file-cta,.file.is-danger.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 51, 102, 0.25);box-shadow:0 0 0.5em rgba(255, 51, 102, 0.25);color:#fff}.file.is-danger:active .file-cta,.file.is-danger.is-active .file-cta{background-color:#ff1a53;border-color:transparent;color:#fff}.file.is-small{font-size:0.8125rem}.file.is-medium{font-size:1.125rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.375rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{-ms-flex-direction:column;flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{-ms-flex-pack:center;justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-ms-flex-positive:1;flex-grow:1;max-width:none}.file.is-right{-ms-flex-pack:end;justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;-ms-flex-order:-1;order:-1}.file-label{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eeeef0;color:#003399}.file-label:hover .file-name{border-color:#cad4e7}.file-label:active .file-cta{background-color:#e8e8ea;color:#003399}.file-label:active .file-name{border-color:#c1cde3}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#d3dbeb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f6;color:#222222}.file-name{border-color:#d3dbeb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:1em;-ms-flex-pack:center;justify-content:center;margin-right:0.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#003399;display:block;font-size:0.9375rem;font-weight:700}.label:not(:last-child){margin-bottom:0.5em}.label.is-small{font-size:0.8125rem}.label.is-medium{font-size:1.125rem}.label.is-large{font-size:1.375rem}.help{display:block;font-size:0.8125rem;margin-top:0.25rem}.help.is-white{color:#ffffff}.help.is-black{color:#222222}.help.is-light{color:#fafafa}.help.is-dark{color:#003399}.help.is-primary{color:#009ee7}.help.is-link{color:#009ee7}.help.is-info{color:#003399}.help.is-success{color:#3fc889}.help.is-warning{color:#ff9900}.help.is-danger{color:#ff3366}.field:not(:last-child){margin-bottom:0.75rem}.field.has-addons{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered{z-index:2}.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]).is-active{z-index:3}.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover{z-index:4}.field.has-addons .control.is-expanded{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons.has-addons-centered{-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:0.75rem}.field.is-grouped>.control.is-expanded{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:0.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-0.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width: 769px), print{.field.is-horizontal{display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width: 768px){.field-label{margin-bottom:0.5rem}}@media screen and (min-width: 769px), print{.field-label{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:0.8125rem;padding-top:0.375em}.field-label.is-normal{padding-top:0.375em}.field-label.is-medium{font-size:1.125rem;padding-top:0.375em}.field-label.is-large{font-size:1.375rem;padding-top:0.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width: 769px), print{.field-body{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:0.75rem}}.control{-webkit-box-sizing:border-box;box-sizing:border-box;clear:both;font-size:0.9375rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#222222}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:0.8125rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.125rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.375rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#d3dbeb;height:38px;pointer-events:none;position:absolute;top:0;width:38px;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:38px}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:38px}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute !important;right:0.625em;top:0.625em;z-index:4}.control.is-loading.is-small:after{font-size:0.8125rem}.control.is-loading.is-medium:after{font-size:1.125rem}.control.is-loading.is-large:after{font-size:1.375rem}:host{display:block}:host .dropdown .dropdown-trigger i.icon-caret-down{-webkit-transition-duration:0.5s;transition-duration:0.5s}:host .dropdown.is-active .dropdown-trigger i.icon-caret-down{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host .dropdown.is-fixed .dropdown-content{overflow-y:hidden;padding:0}:host .dropdown.is-typeahead.is-multi-select .dropdown-content{max-height:297.5px !important}:host .dropdown .dropdown-menu{padding-top:0}:host .dropdown .dropdown-trigger input{font-family:MetaPro, Arial, sans-serif}:host .dropdown .dropdown-content-search{padding:10px 20px 0 20px}:host .dropdown .dropdown-content-options{overflow-y:auto;max-height:220px;padding:0}:host .dropdown:not(.is-typeahead) .dropdown-trigger .input{cursor:pointer}:host .dropdown.is-fullwidth,:host .dropdown.is-fullwidth .dropdown-trigger{width:100%}:host .dropdown.is-inverted .icon>i{color:#99add6}:host .dropdown.is-inverted ::-webkit-input-placeholder{color:#7188b8 !important}:host .dropdown.is-inverted ::-moz-placeholder{color:#7188b8 !important}:host .dropdown.is-inverted .dropdown-trigger>.control>.input{color:#ffffff;border-bottom-color:#99add6}:host .dropdown.is-inverted .dropdown-trigger>.control>.input:focus,:host .dropdown.is-inverted .dropdown-trigger>.control>.input.is-focused{border-width:2px;border-bottom-color:#ffffff}:host .dropdown.is-inverted .dropdown-trigger>.control>.input:disabled{background-color:#002b82;cursor:not-allowed}:host .dropdown .is-empty,:host .dropdown .no-search-results{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding-top:5px;padding-bottom:5px}";
var Dropdown = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.balInput = createEvent(this, "balInput", 7);
        this.balChange = createEvent(this, "balChange", 7);
        this.balBlur = createEvent(this, "balBlur", 2);
        this.balFocus = createEvent(this, "balFocus", 7);
        this.isPristine = true;
        this.selectedOption = null;
        this.hasFocus = false;
        this.maxDropdownWidth = 100;
        this.isActive = false;
        /**
         * The value of the selected dropdown item.
         */
        this.value = null;
        /**
         * Instructional text that shows before the input has a value.
         */
        this.placeholder = '';
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.readonly = false;
        /**
         * If `true`, the user cannot interact with the input.
         */
        this.disabled = false;
        /**
         * If `true` the dropdown can be used on blue background.
         */
        this.inverted = false;
        /**
         * If `true`, the height of the dropdown content is fixed.
         */
        this.fixed = true;
        /**
         * If `true`, the component uses the whole width.
         */
        this.expanded = false;
        /**
         * Defines the trigger icon on the right site.
         */
        this.triggerIcon = 'caret-down';
        /**
         * If `true` the dropdown shows the empty message
         */
        this.empty = false;
        /**
         * If `true` the dropdown allows multiple selection
         */
        this.multiSelect = false;
        /**
         * If `true`, the use can search for the option.
         */
        this.typeahead = false;
    }
    class_1.prototype.valueWatcher = function (newValue) {
        if (newValue) {
            this.selectedOption = this.value;
            this.updateLabel();
            this.updateActivatedOptions();
        }
    };
    class_1.prototype.disabledWatcher = function (newValue) {
        if (newValue === true) {
            this.isActive = false;
            this.fireBlurIfPossible();
        }
    };
    class_1.prototype.tabOutside = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.key === 'Tab' &&
                            !this.element.contains(document.activeElement) &&
                            this.isActive)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toggle()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.clickOnOutside = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.element.contains(event.target) && this.isActive)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toggle()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentWillLoad = function () {
        if (this.value) {
            this.selectedOption = this.value;
        }
    };
    class_1.prototype.componentDidLoad = function () {
        if (this.value) {
            this.updateLabel();
            this.updateActivatedOptions();
        }
    };
    /**
     * Selects an option.
     */
    class_1.prototype.select = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.multiSelect) {
                            this.value = this.prepareValues(this.value, option);
                            this.selectedOption = this.prepareValues(this.selectedOption, option);
                            this.value = this.value.filter(function (v) { return v; });
                            this.selectedOption = this.selectedOption.filter(function (v) { return v; });
                        }
                        else {
                            this.selectedOption = option;
                            this.value = option;
                        }
                        this.balChange.emit(option);
                        this.updateLabel();
                        if (!!this.multiSelect) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.updateActivatedOptions();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Returns the value of the dropdown.
     */
    class_1.prototype.getSelected = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.selectedOption];
            });
        });
    };
    /**
     * Open & closes the dropdown.
     */
    class_1.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.adjustMaxDropdownWidth();
                this.isActive = !this.isActive;
                this.fireBlurIfPossible();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Open the dropdown menu.
     */
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.adjustMaxDropdownWidth();
                this.isActive = true;
                return [2 /*return*/];
            });
        });
    };
    /**
     * Closes the dropdown menu.
     */
    class_1.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isActive = false;
                this.fireBlurIfPossible();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(class_1.prototype, "children", {
        get: function () {
            return Array.from(this.element.querySelectorAll('bal-dropdown-option'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "childrenWithHiddenState", {
        get: function () {
            return Promise.all(this.children.map(function (child) { return child.isHidden(); }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "childrenWithActivatedState", {
        get: function () {
            return Promise.all(this.children.map(function (child) { return child.selected; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "childrenWithValue", {
        get: function () {
            return Promise.all(this.children.map(function (child) { return child.value; }));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1.prototype, "isUp", {
        get: function () {
            var box = this.element.getBoundingClientRect();
            return window.innerHeight - box.top < window.innerHeight / 2;
        },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.onInputClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!this.typeahead || (this.typeahead && this.multiSelect))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.toggle()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (this.typeahead && this.multiSelect) {
                            setTimeout(function () { return _this.searchInputElement.focus(); }, 100);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.onInputFocus = function () {
        this.hasFocus = true;
        this.balFocus.emit();
    };
    class_1.prototype.onInputBlur = function () {
        this.hasFocus = false;
        this.balFocus.emit();
    };
    class_1.prototype.onInput = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var inputValue;
            return __generator(this, function (_a) {
                inputValue = event.target.value;
                this.balInput.emit(inputValue);
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.onKeyUp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var inputValue_1, children;
            return __generator(this, function (_a) {
                if (!this.disabled &&
                    ['Enter', 'ArrowUp', 'ArrowDown', 'Up', 'Down'].indexOf(event.key) < 0) {
                    inputValue_1 = event.target.value;
                    if (this.typeahead && !this.multiSelect) {
                        this.isActive = !!inputValue_1;
                        this.adjustMaxDropdownWidth();
                    }
                    children = this.children;
                    if (this.typeahead && children && children.length > 0) {
                        children.forEach(function (child) { return (child.highlight = inputValue_1); });
                    }
                    this.fireBlurIfPossible();
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.handleKeyUp = function (event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
            event.preventDefault();
            this.isActive = false;
            this.fireBlurIfPossible();
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: [
                'dropdown',
                this.expanded ? 'is-fullwidth' : '',
                this.isActive ? 'is-active' : '',
                this.fixed ? 'is-fixed' : '',
                this.isUp ? 'is-up' : '',
                this.typeahead ? 'is-typeahead' : '',
                this.multiSelect ? 'is-multi-select' : '',
                this.inverted ? 'is-inverted' : '',
            ].join(' ') }, h("div", { class: "dropdown-trigger" }, h("div", { class: [
                'control',
                this.triggerIcon && !this.typeahead ? 'has-icons-right' : '',
            ].join(' ') }, h("input", { part: "input", class: ['input', this.isActive ? 'is-focused' : ''].join(' '), autocomplete: "off", disabled: this.disabled, readOnly: this.readonly ||
                !this.typeahead ||
                (this.typeahead && this.multiSelect), placeholder: this.placeholder, onKeyUp: this.onKeyUp.bind(this), onInput: this.onInput.bind(this), onClick: this.onInputClick.bind(this), onBlur: this.onInputBlur.bind(this), onFocus: this.onInputFocus.bind(this), ref: function (el) { return (_this.inputElement = el); } }), h("bal-icon", { size: "medium", name: this.triggerIcon, isRight: true, style: {
                display: this.triggerIcon && !this.typeahead ? 'flex' : 'none',
            }, class: [this.inverted ? 'is-inverted' : ''].join(' ') }))), h("div", { class: "dropdown-menu", style: { maxWidth: this.maxDropdownWidth + 'px' }, role: "menu", ref: function (el) { return (_this.dropdownMenuElement = el); } }, h("div", { class: "dropdown-content" }, this.multiSelect && this.typeahead ? (h("div", { class: "dropdown-content-search" }, h("bal-field", { "icon-left": "search" }, h("input", { part: "input", class: ['input'].join(' '), autocomplete: "off", placeholder: this.placeholder, onKeyUp: this.onKeyUp.bind(this), ref: function (el) { return (_this.searchInputElement = el); } })))) : (''), h("div", { part: "content-options", class: "dropdown-content-options", ref: function (el) { return (_this.dropdownContentElement = el); } }, h("div", { style: (this.empty) && { display: 'none' } }, h("slot", null))), h("span", { class: "is-empty", style: (!this.empty) && { display: 'none' } }, h("slot", { name: "is-empty" }, "No item available")))))));
    };
    class_1.prototype.updateLabel = function () {
        var label = '';
        if (Array.isArray(this.value)) {
            label = this.value
                .filter(function (v) { return v; })
                .map(function (v) { return v.label; })
                .join(', ');
        }
        else {
            label = this.value.label;
        }
        this.inputElement.value = label;
    };
    class_1.prototype.prepareValues = function (value, option) {
        var values = Array.isArray(value) ? value : [value];
        values = values.filter(function (v) { return v; });
        if (values.map(function (v) { return v.value; }).indexOf(option.value) >= 0) {
            return values.filter(function (v) { return v.value !== option.value; });
        }
        return __spreadArrays(values, [option]);
    };
    class_1.prototype.fireBlurIfPossible = function () {
        if (!this.hasFocus && !this.isActive) {
            this.balBlur.emit();
        }
    };
    class_1.prototype.adjustMaxDropdownWidth = function () {
        var rect = this.inputElement.getBoundingClientRect();
        this.maxDropdownWidth = window.innerWidth - rect.x - Dropdown.MIN_DISTANCE_TO_BROWSER_BORDER;
    };
    class_1.prototype.updateActivatedOptions = function () {
        var _this = this;
        this.children.forEach(function (child) {
            if (Array.isArray(_this.selectedOption)) {
                child.selected =
                    _this.selectedOption
                        .filter(function (o) { return o; })
                        .map(function (o) { return o.value; })
                        .indexOf(child.value) >= 0;
            }
            else {
                child.selected = child.value === _this.selectedOption.value;
            }
        });
    };
    Object.defineProperty(class_1.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["valueWatcher"],
                "disabled": ["disabledWatcher"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
Dropdown.MIN_DISTANCE_TO_BROWSER_BORDER = 30;
Dropdown.style = dropdownCss;
var fieldCss = ".file{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select:not(.is-multiple):not(.is-loading)::after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:0.625em;margin-top:-0.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:0.625em}.control.is-loading::after,.select.is-loading::after{-webkit-animation:spinAround 500ms infinite linear;animation:spinAround 500ms infinite linear;border:2px solid #ebecec;border-radius:100%;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}.file-cta,.file-name,.select select,.textarea,.input{-moz-appearance:none;-webkit-appearance:none;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-ms-inline-flexbox;display:inline-flex;font-size:0.9375rem;height:2.5em;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-bottom:calc(0.5em - 1px);padding-left:calc(0.75em - 1px);padding-right:calc(0.75em - 1px);padding-top:calc(0.5em - 1px);position:relative;vertical-align:top}.file-cta:focus,.file-name:focus,.select select:focus,.textarea:focus,.input:focus,.is-focused.file-cta,.is-focused.file-name,.select select.is-focused,.is-focused.textarea,.is-focused.input,.file-cta:active,.file-name:active,.select select:active,.textarea:active,.input:active,.is-active.file-cta,.is-active.file-name,.select select.is-active,.is-active.textarea,.is-active.input{outline:none}[disabled].file-cta,[disabled].file-name,.select select[disabled],[disabled].textarea,[disabled].input,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input{cursor:not-allowed}*{-webkit-box-sizing:border-box;box-sizing:border-box;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%}.select select,.textarea,.input{background-color:#ffffff;border-color:#d3dbeb;border-radius:4px;color:#003399}.select select::-moz-placeholder,.textarea::-moz-placeholder,.input::-moz-placeholder{color:rgba(0, 51, 153, 0.3)}.select select::-webkit-input-placeholder,.textarea::-webkit-input-placeholder,.input::-webkit-input-placeholder{color:rgba(0, 51, 153, 0.3)}.select select:-moz-placeholder,.textarea:-moz-placeholder,.input:-moz-placeholder{color:rgba(0, 51, 153, 0.3)}.select select:-ms-input-placeholder,.textarea:-ms-input-placeholder,.input:-ms-input-placeholder{color:rgba(0, 51, 153, 0.3)}.select select:hover,.textarea:hover,.input:hover,.select select.is-hovered,.is-hovered.textarea,.is-hovered.input{border-color:#e2e3e3}.select select:focus,.textarea:focus,.input:focus,.select select.is-focused,.is-focused.textarea,.is-focused.input,.select select:active,.textarea:active,.input:active,.select select.is-active,.is-active.textarea,.is-active.input{border-color:#009ee7;-webkit-box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25);box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25)}.select select[disabled],[disabled].textarea,[disabled].input,fieldset[disabled] .select select,.select fieldset[disabled] select,fieldset[disabled] .textarea,fieldset[disabled] .input{background-color:#f5f5f6;border-color:#f5f5f6;-webkit-box-shadow:none;box-shadow:none;color:#d8d9d9}.select select[disabled]::-moz-placeholder,[disabled].textarea::-moz-placeholder,[disabled].input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder{color:rgba(216, 217, 217, 0.3)}.select select[disabled]::-webkit-input-placeholder,[disabled].textarea::-webkit-input-placeholder,[disabled].input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder{color:rgba(216, 217, 217, 0.3)}.select select[disabled]:-moz-placeholder,[disabled].textarea:-moz-placeholder,[disabled].input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder{color:rgba(216, 217, 217, 0.3)}.select select[disabled]:-ms-input-placeholder,[disabled].textarea:-ms-input-placeholder,[disabled].input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder{color:rgba(216, 217, 217, 0.3)}.textarea,.input{-webkit-box-shadow:inset 0 0.0625em 0.125em rgba(34, 34, 34, 0.05);box-shadow:inset 0 0.0625em 0.125em rgba(34, 34, 34, 0.05);max-width:100%;width:100%}[readonly].textarea,[readonly].input{-webkit-box-shadow:none;box-shadow:none}.is-white.textarea,.is-white.input{border-color:#ffffff}.is-white.textarea:focus,.is-white.input:focus,.is-white.is-focused.textarea,.is-white.is-focused.input,.is-white.textarea:active,.is-white.input:active,.is-white.is-active.textarea,.is-white.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(255, 255, 255, 0.25);box-shadow:0 0 0 0.125em rgba(255, 255, 255, 0.25)}.is-black.textarea,.is-black.input{border-color:#222222}.is-black.textarea:focus,.is-black.input:focus,.is-black.is-focused.textarea,.is-black.is-focused.input,.is-black.textarea:active,.is-black.input:active,.is-black.is-active.textarea,.is-black.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(34, 34, 34, 0.25);box-shadow:0 0 0 0.125em rgba(34, 34, 34, 0.25)}.is-light.textarea,.is-light.input{border-color:#fafafa}.is-light.textarea:focus,.is-light.input:focus,.is-light.is-focused.textarea,.is-light.is-focused.input,.is-light.textarea:active,.is-light.input:active,.is-light.is-active.textarea,.is-light.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(250, 250, 250, 0.25);box-shadow:0 0 0 0.125em rgba(250, 250, 250, 0.25)}.is-dark.textarea,.is-dark.input{border-color:#003399}.is-dark.textarea:focus,.is-dark.input:focus,.is-dark.is-focused.textarea,.is-dark.is-focused.input,.is-dark.textarea:active,.is-dark.input:active,.is-dark.is-active.textarea,.is-dark.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25);box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25)}.is-primary.textarea,.is-primary.input{border-color:#009ee7}.is-primary.textarea:focus,.is-primary.input:focus,.is-primary.is-focused.textarea,.is-primary.is-focused.input,.is-primary.textarea:active,.is-primary.input:active,.is-primary.is-active.textarea,.is-primary.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25);box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25)}.is-link.textarea,.is-link.input{border-color:#009ee7}.is-link.textarea:focus,.is-link.input:focus,.is-link.is-focused.textarea,.is-link.is-focused.input,.is-link.textarea:active,.is-link.input:active,.is-link.is-active.textarea,.is-link.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25);box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25)}.is-info.textarea,.is-info.input{border-color:#003399}.is-info.textarea:focus,.is-info.input:focus,.is-info.is-focused.textarea,.is-info.is-focused.input,.is-info.textarea:active,.is-info.input:active,.is-info.is-active.textarea,.is-info.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25);box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25)}.is-success.textarea,.is-success.input{border-color:#3fc889}.is-success.textarea:focus,.is-success.input:focus,.is-success.is-focused.textarea,.is-success.is-focused.input,.is-success.textarea:active,.is-success.input:active,.is-success.is-active.textarea,.is-success.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(63, 200, 137, 0.25);box-shadow:0 0 0 0.125em rgba(63, 200, 137, 0.25)}.is-warning.textarea,.is-warning.input{border-color:#ff9900}.is-warning.textarea:focus,.is-warning.input:focus,.is-warning.is-focused.textarea,.is-warning.is-focused.input,.is-warning.textarea:active,.is-warning.input:active,.is-warning.is-active.textarea,.is-warning.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(255, 153, 0, 0.25);box-shadow:0 0 0 0.125em rgba(255, 153, 0, 0.25)}.is-danger.textarea,.is-danger.input{border-color:#ff3366}.is-danger.textarea:focus,.is-danger.input:focus,.is-danger.is-focused.textarea,.is-danger.is-focused.input,.is-danger.textarea:active,.is-danger.input:active,.is-danger.is-active.textarea,.is-danger.is-active.input{-webkit-box-shadow:0 0 0 0.125em rgba(255, 51, 102, 0.25);box-shadow:0 0 0 0.125em rgba(255, 51, 102, 0.25)}.is-small.textarea,.is-small.input{border-radius:4px;font-size:0.8125rem}.is-medium.textarea,.is-medium.input{font-size:1.125rem}.is-large.textarea,.is-large.input{font-size:1.375rem}.is-fullwidth.textarea,.is-fullwidth.input{display:block;width:100%}.is-inline.textarea,.is-inline.input{display:inline;width:auto}.input.is-rounded{border-radius:100%;padding-left:calc(calc(0.75em - 1px) + 0.375em);padding-right:calc(calc(0.75em - 1px) + 0.375em)}.input.is-static{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:calc(0.75em - 1px);resize:vertical}.textarea:not([rows]){max-height:40em;min-height:8em}.textarea[rows]{height:initial}.textarea.has-fixed-size{resize:none}.radio,.checkbox{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.radio input,.checkbox input{cursor:pointer}.radio:hover,.checkbox:hover{color:#003399}[disabled].radio,[disabled].checkbox,fieldset[disabled] .radio,fieldset[disabled] .checkbox{color:#d8d9d9;cursor:not-allowed}.radio+.radio{margin-left:0.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.5em}.select:not(.is-multiple):not(.is-loading)::after{border-color:#009ee7;right:1.125em;z-index:4}.select.is-rounded select{border-radius:100%;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f6}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:0.5em 1em}.select:not(.is-multiple):not(.is-loading):hover::after{border-color:#003399}.select.is-white:not(:hover)::after{border-color:#ffffff}.select.is-white select{border-color:#ffffff}.select.is-white select:hover,.select.is-white select.is-hovered{border-color:#f2f2f2}.select.is-white select:focus,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(255, 255, 255, 0.25);box-shadow:0 0 0 0.125em rgba(255, 255, 255, 0.25)}.select.is-black:not(:hover)::after{border-color:#222222}.select.is-black select{border-color:#222222}.select.is-black select:hover,.select.is-black select.is-hovered{border-color:#151515}.select.is-black select:focus,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(34, 34, 34, 0.25);box-shadow:0 0 0 0.125em rgba(34, 34, 34, 0.25)}.select.is-light:not(:hover)::after{border-color:#fafafa}.select.is-light select{border-color:#fafafa}.select.is-light select:hover,.select.is-light select.is-hovered{border-color:#ededed}.select.is-light select:focus,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(250, 250, 250, 0.25);box-shadow:0 0 0 0.125em rgba(250, 250, 250, 0.25)}.select.is-dark:not(:hover)::after{border-color:#003399}.select.is-dark select{border-color:#003399}.select.is-dark select:hover,.select.is-dark select.is-hovered{border-color:#002b80}.select.is-dark select:focus,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25);box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25)}.select.is-primary:not(:hover)::after{border-color:#009ee7}.select.is-primary select{border-color:#009ee7}.select.is-primary select:hover,.select.is-primary select.is-hovered{border-color:#008dce}.select.is-primary select:focus,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25);box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25)}.select.is-link:not(:hover)::after{border-color:#009ee7}.select.is-link select{border-color:#009ee7}.select.is-link select:hover,.select.is-link select.is-hovered{border-color:#008dce}.select.is-link select:focus,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25);box-shadow:0 0 0 0.125em rgba(0, 158, 231, 0.25)}.select.is-info:not(:hover)::after{border-color:#003399}.select.is-info select{border-color:#003399}.select.is-info select:hover,.select.is-info select.is-hovered{border-color:#002b80}.select.is-info select:focus,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25);box-shadow:0 0 0 0.125em rgba(0, 51, 153, 0.25)}.select.is-success:not(:hover)::after{border-color:#3fc889}.select.is-success select{border-color:#3fc889}.select.is-success select:hover,.select.is-success select.is-hovered{border-color:#35b97c}.select.is-success select:focus,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(63, 200, 137, 0.25);box-shadow:0 0 0 0.125em rgba(63, 200, 137, 0.25)}.select.is-warning:not(:hover)::after{border-color:#ff9900}.select.is-warning select{border-color:#ff9900}.select.is-warning select:hover,.select.is-warning select.is-hovered{border-color:#e68a00}.select.is-warning select:focus,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(255, 153, 0, 0.25);box-shadow:0 0 0 0.125em rgba(255, 153, 0, 0.25)}.select.is-danger:not(:hover)::after{border-color:#ff3366}.select.is-danger select{border-color:#ff3366}.select.is-danger select:hover,.select.is-danger select.is-hovered{border-color:#ff1a53}.select.is-danger select:focus,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select.is-active{-webkit-box-shadow:0 0 0 0.125em rgba(255, 51, 102, 0.25);box-shadow:0 0 0 0.125em rgba(255, 51, 102, 0.25)}.select.is-small{border-radius:4px;font-size:0.8125rem}.select.is-medium{font-size:1.125rem}.select.is-large{font-size:1.375rem}.select.is-disabled::after{border-color:#d8d9d9}.select.is-fullwidth{width:100%}.select.is-fullwidth select{width:100%}.select.is-loading::after{margin-top:0;position:absolute;right:0.625em;top:0.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:0.8125rem}.select.is-loading.is-medium:after{font-size:1.125rem}.select.is-loading.is-large:after{font-size:1.375rem}.file{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#ffffff;border-color:transparent;color:#222222}.file.is-white:hover .file-cta,.file.is-white.is-hovered .file-cta{background-color:#f9f9f9;border-color:transparent;color:#222222}.file.is-white:focus .file-cta,.file.is-white.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 255, 255, 0.25);box-shadow:0 0 0.5em rgba(255, 255, 255, 0.25);color:#222222}.file.is-white:active .file-cta,.file.is-white.is-active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#222222}.file.is-black .file-cta{background-color:#222222;border-color:transparent;color:#ffffff}.file.is-black:hover .file-cta,.file.is-black.is-hovered .file-cta{background-color:#1c1c1c;border-color:transparent;color:#ffffff}.file.is-black:focus .file-cta,.file.is-black.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(34, 34, 34, 0.25);box-shadow:0 0 0.5em rgba(34, 34, 34, 0.25);color:#ffffff}.file.is-black:active .file-cta,.file.is-black.is-active .file-cta{background-color:#151515;border-color:transparent;color:#ffffff}.file.is-light .file-cta{background-color:#fafafa;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-light:hover .file-cta,.file.is-light.is-hovered .file-cta{background-color:#f4f4f4;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-light:focus .file-cta,.file.is-light.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(250, 250, 250, 0.25);box-shadow:0 0 0.5em rgba(250, 250, 250, 0.25);color:rgba(0, 0, 0, 0.7)}.file.is-light:active .file-cta,.file.is-light.is-active .file-cta{background-color:#ededed;border-color:transparent;color:rgba(0, 0, 0, 0.7)}.file.is-dark .file-cta{background-color:#003399;border-color:transparent;color:#fff}.file.is-dark:hover .file-cta,.file.is-dark.is-hovered .file-cta{background-color:#002f8c;border-color:transparent;color:#fff}.file.is-dark:focus .file-cta,.file.is-dark.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);color:#fff}.file.is-dark:active .file-cta,.file.is-dark.is-active .file-cta{background-color:#002b80;border-color:transparent;color:#fff}.file.is-primary .file-cta{background-color:#009ee7;border-color:transparent;color:#ffffff}.file.is-primary:hover .file-cta,.file.is-primary.is-hovered .file-cta{background-color:#0095da;border-color:transparent;color:#ffffff}.file.is-primary:focus .file-cta,.file.is-primary.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);color:#ffffff}.file.is-primary:active .file-cta,.file.is-primary.is-active .file-cta{background-color:#008dce;border-color:transparent;color:#ffffff}.file.is-link .file-cta{background-color:#009ee7;border-color:transparent;color:#003399}.file.is-link:hover .file-cta,.file.is-link.is-hovered .file-cta{background-color:#0095da;border-color:transparent;color:#003399}.file.is-link:focus .file-cta,.file.is-link.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);box-shadow:0 0 0.5em rgba(0, 158, 231, 0.25);color:#003399}.file.is-link:active .file-cta,.file.is-link.is-active .file-cta{background-color:#008dce;border-color:transparent;color:#003399}.file.is-info .file-cta{background-color:#003399;border-color:transparent;color:#fff}.file.is-info:hover .file-cta,.file.is-info.is-hovered .file-cta{background-color:#002f8c;border-color:transparent;color:#fff}.file.is-info:focus .file-cta,.file.is-info.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);box-shadow:0 0 0.5em rgba(0, 51, 153, 0.25);color:#fff}.file.is-info:active .file-cta,.file.is-info.is-active .file-cta{background-color:#002b80;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#3fc889;border-color:transparent;color:#ffffff}.file.is-success:hover .file-cta,.file.is-success.is-hovered .file-cta{background-color:#38c383;border-color:transparent;color:#ffffff}.file.is-success:focus .file-cta,.file.is-success.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(63, 200, 137, 0.25);box-shadow:0 0 0.5em rgba(63, 200, 137, 0.25);color:#ffffff}.file.is-success:active .file-cta,.file.is-success.is-active .file-cta{background-color:#35b97c;border-color:transparent;color:#ffffff}.file.is-warning .file-cta{background-color:#ff9900;border-color:transparent;color:#fff}.file.is-warning:hover .file-cta,.file.is-warning.is-hovered .file-cta{background-color:#f29100;border-color:transparent;color:#fff}.file.is-warning:focus .file-cta,.file.is-warning.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 153, 0, 0.25);box-shadow:0 0 0.5em rgba(255, 153, 0, 0.25);color:#fff}.file.is-warning:active .file-cta,.file.is-warning.is-active .file-cta{background-color:#e68a00;border-color:transparent;color:#fff}.file.is-danger .file-cta{background-color:#ff3366;border-color:transparent;color:#fff}.file.is-danger:hover .file-cta,.file.is-danger.is-hovered .file-cta{background-color:#ff265c;border-color:transparent;color:#fff}.file.is-danger:focus .file-cta,.file.is-danger.is-focused .file-cta{border-color:transparent;-webkit-box-shadow:0 0 0.5em rgba(255, 51, 102, 0.25);box-shadow:0 0 0.5em rgba(255, 51, 102, 0.25);color:#fff}.file.is-danger:active .file-cta,.file.is-danger.is-active .file-cta{background-color:#ff1a53;border-color:transparent;color:#fff}.file.is-small{font-size:0.8125rem}.file.is-medium{font-size:1.125rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.375rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{-ms-flex-direction:column;flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{-ms-flex-pack:center;justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-ms-flex-positive:1;flex-grow:1;max-width:none}.file.is-right{-ms-flex-pack:end;justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;-ms-flex-order:-1;order:-1}.file-label{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eeeef0;color:#003399}.file-label:hover .file-name{border-color:#cad4e7}.file-label:active .file-cta{background-color:#e8e8ea;color:#003399}.file-label:active .file-name{border-color:#c1cde3}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#d3dbeb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f6;color:#222222}.file-name{border-color:#d3dbeb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:inherit;text-overflow:ellipsis}.file-icon{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:1em;-ms-flex-pack:center;justify-content:center;margin-right:0.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#003399;display:block;font-size:0.9375rem;font-weight:700}.label:not(:last-child){margin-bottom:0.5em}.label.is-small{font-size:0.8125rem}.label.is-medium{font-size:1.125rem}.label.is-large{font-size:1.375rem}.help{display:block;font-size:0.8125rem;margin-top:0.25rem}.help.is-white{color:#ffffff}.help.is-black{color:#222222}.help.is-light{color:#fafafa}.help.is-dark{color:#003399}.help.is-primary{color:#009ee7}.help.is-link{color:#009ee7}.help.is-info{color:#003399}.help.is-success{color:#3fc889}.help.is-warning{color:#ff9900}.help.is-danger{color:#ff3366}.field:not(:last-child){margin-bottom:0.75rem}.field.has-addons{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered{z-index:2}.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]).is-active{z-index:3}.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover{z-index:4}.field.has-addons .control.is-expanded{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons.has-addons-centered{-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:0.75rem}.field.is-grouped>.control.is-expanded{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:0.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-0.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media screen and (min-width: 769px), print{.field.is-horizontal{display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width: 768px){.field-label{margin-bottom:0.5rem}}@media screen and (min-width: 769px), print{.field-label{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:0.8125rem;padding-top:0.375em}.field-label.is-normal{padding-top:0.375em}.field-label.is-medium{font-size:1.125rem;padding-top:0.375em}.field-label.is-large{font-size:1.375rem;padding-top:0.375em}}.field-body .field .field{margin-bottom:0}@media screen and (min-width: 769px), print{.field-body{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:0.75rem}}.control{-webkit-box-sizing:border-box;box-sizing:border-box;clear:both;font-size:0.9375rem;position:relative;text-align:inherit}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#222222}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:0.8125rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.125rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.375rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#d3dbeb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.5em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.5em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading::after{position:absolute !important;right:0.625em;top:0.625em;z-index:4}.control.is-loading.is-small:after{font-size:0.8125rem}.control.is-loading.is-medium:after{font-size:1.125rem}.control.is-loading.is-large:after{font-size:1.375rem}.icon{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}:host{display:block}.form>.label{font-size:0.9375rem !important;margin-bottom:0 !important;font-family:MetaPro, Arial, sans-serif}p.help{min-height:22.5px;margin-top:0 !important;margin-bottom:0 !important;font-family:MetaPro, Arial, sans-serif}.control.has-icons-left *::part(input){padding-left:38px}.form.is-inverted .label{color:#ffffff}.form.is-inverted .control .input{color:#ffffff;border-bottom-color:#99add6}.form.is-inverted .control .input:focus,.form.is-inverted .control .input.is-focused{border-bottom-color:#ffffff}.form.is-inverted .control .input::-webkit-input-placeholder{color:#d3dbeb}.form.is-inverted p.help:not(.is-danger){color:#99add6}.form.is-inverted .sc-bal-icon-h>.icon>.font{color:#99add6}";
var Field = /** @class */ (function () {
    function Field(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Label text
         */
        this.label = "";
        /**
         * If `true` a asterix (*) is added to the label text
         */
        this.required = false;
        /**
         * Validation message text
         */
        this.validationMessage = "";
        /**
         * Baloise icon for the right side of the input
         */
        this.iconRight = "";
        /**
         * Baloise icon for the left side of the input
         */
        this.iconLeft = "";
        /**
         * If `true` the field can be used on blue background.
         */
        this.inverted = false;
    }
    Object.defineProperty(Field.prototype, "buildIconLeftTemplate", {
        get: function () {
            if (this.iconLeft) {
                return h("bal-icon", { name: this.iconLeft, isLeft: true, size: "medium" });
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "buildIconRightTemplate", {
        get: function () {
            if (this.iconRight) {
                return h("bal-icon", { name: this.iconRight, isRight: true, size: "medium" });
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Field.prototype.render = function () {
        return (h(Host, null, h("div", { class: ["form",
                this.inverted ? "is-inverted" : ""
            ].join(" ") }, h("label", { class: "label" }, this.label, this.required === true ? "*" : "", h("slot", { name: "hint" })), h("div", { class: "control" +
                (this.iconLeft ? " has-icons-left" : "") +
                (this.iconRight ? " has-icons-right" : "") }, h("slot", null), this.buildIconLeftTemplate, this.buildIconRightTemplate), h("p", { class: "help is-danger" }, this.validationMessage))));
    };
    return Field;
}());
Field.style = fieldCss;
export { Dropdown as bal_dropdown, Field as bal_field };
