import { noticesUtils } from "../../utils/notices.utils";
class ToastController {
    create(options) {
        const toast = document.createElement("bal-toast");
        toast.innerHTML = options.message;
        toast.type = options.type || "is-success";
        noticesUtils.showNotice(toast, options.duration);
        return toast;
    }
}
export const balToastController = new ToastController();
