export { F as FileUploadRejectionReason } from './file-upload.type-721605f0.js';

const createNoticesUtils = () => {
    const DURATION = 5000;
    let container;
    const shouldQueue = () => {
        return container.childElementCount > 0;
    };
    const setupContainer = () => {
        container = document.querySelector("body" + ">.bal-notices");
        if (container)
            return;
        if (!container) {
            container = document.createElement("div");
            container.className = "bal-notices";
        }
        document.body.appendChild(container);
    };
    const showNotice = (element, duration) => {
        if (shouldQueue()) {
            // Call recursively if should queue
            setTimeout(() => showNotice(element, duration), 250);
            return;
        }
        container.insertAdjacentElement("afterbegin", element);
        element.closeIn(duration || DURATION);
    };
    setupContainer();
    return {
        showNotice,
    };
};
const noticesUtils = createNoticesUtils();

class ToastController {
    create(options) {
        const toast = document.createElement("bal-toast");
        toast.innerHTML = options.message;
        toast.type = options.type || "is-success";
        noticesUtils.showNotice(toast, options.duration);
        return toast;
    }
}
const balToastController = new ToastController();

export { balToastController };
