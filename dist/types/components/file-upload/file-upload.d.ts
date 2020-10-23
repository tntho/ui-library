import { EventEmitter } from "../../stencil-public-runtime";
import { FileUploadRejectedFile } from "./file-upload.type";
export declare class FileUpload {
    element: HTMLElement;
    fileInput: HTMLInputElement;
    bundleSize: number;
    isOver: boolean;
    files: File[];
    /**
     * Label of the drop area.
     */
    label: string;
    /**
     * If `true` multiple file upload is possible.
     */
    multiple: boolean;
    /**
     * If `true` the button is disabled
     */
    disabled: boolean;
    /**
     * Accepted MIME-Types like `image/png,image/jpeg`.
     */
    accept: string;
    /**
     * Allowed number of files in the bundle.
     */
    maxFiles: number;
    /**
     * Allowed max file size in bytes.
     */
    maxFileSize: number;
    /**
     * Allowed max bundle size in bytes.
     */
    maxBundleSize: number;
    /**
     * Triggers when a file is added or removed.
     */
    balChangeEventEmitter: EventEmitter<File[]>;
    /**
     * Triggers when a file is rejected due to not allowed MIME-Type and so on.
     */
    balFileUploadRejectedFileEventEmitter: EventEmitter<FileUploadRejectedFile>;
    dragenterHandler(): void;
    dragoverHandler(): void;
    dragleaveHandler(): void;
    dropHandler(event: DragEvent): void;
    handleFiles(files: FileList): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    preventDefaults(e: Event): void;
    removeFile(indexToRemove: number): void;
    render(): any;
}
