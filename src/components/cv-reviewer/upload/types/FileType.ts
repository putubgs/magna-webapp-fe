export interface FileWithPreview extends File {
  preview?: string;
}

export enum FileUploadStatus {
  INITIAL = "INITIAL",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARN = "WARN",
}
