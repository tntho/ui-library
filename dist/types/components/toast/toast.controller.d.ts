interface ToastOptions {
    message: string;
    duration?: number;
    type?: "is-primary" | "is-info" | "is-success" | "is-warning" | "is-danger";
}
declare class ToastController {
    create(options: ToastOptions): HTMLBalToastElement;
}
export declare const balToastController: ToastController;
export {};
