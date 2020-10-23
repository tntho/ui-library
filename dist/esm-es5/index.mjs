export { F as FileUploadRejectionReason } from './file-upload.type-721605f0.js';
var createNoticesUtils = function () {
    var DURATION = 5000;
    var container;
    var shouldQueue = function () {
        return container.childElementCount > 0;
    };
    var setupContainer = function () {
        container = document.querySelector("body" + ">.bal-notices");
        if (container)
            return;
        if (!container) {
            container = document.createElement("div");
            container.className = "bal-notices";
        }
        document.body.appendChild(container);
    };
    var showNotice = function (element, duration) {
        if (shouldQueue()) {
            // Call recursively if should queue
            setTimeout(function () { return showNotice(element, duration); }, 250);
            return;
        }
        container.insertAdjacentElement("afterbegin", element);
        element.closeIn(duration || DURATION);
    };
    setupContainer();
    return {
        showNotice: showNotice,
    };
};
var noticesUtils = createNoticesUtils();
var ToastController = /** @class */ (function () {
    function ToastController() {
    }
    ToastController.prototype.create = function (options) {
        var toast = document.createElement("bal-toast");
        toast.innerHTML = options.message;
        toast.type = options.type || "is-success";
        noticesUtils.showNotice(toast, options.duration);
        return toast;
    };
    return ToastController;
}());
var balToastController = new ToastController();
export { balToastController };
