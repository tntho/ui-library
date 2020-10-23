var FileUploadRejectionReason;
(function (FileUploadRejectionReason) {
    FileUploadRejectionReason["BAD_EXTENSION"] = "BAD_EXTENSION";
    FileUploadRejectionReason["FILE_TOO_BIG"] = "FILE_TOO_BIG";
    FileUploadRejectionReason["FILE_SIZE_SUM_TOO_BIG"] = "FILE_SIZE_SUM_TOO_BIG";
    FileUploadRejectionReason["TOO_MANY_FILES"] = "TOO_MANY_FILES";
    FileUploadRejectionReason["DUPLICATED_FILE"] = "DUPLICATED_FILE";
})(FileUploadRejectionReason || (FileUploadRejectionReason = {}));

export { FileUploadRejectionReason as F };
