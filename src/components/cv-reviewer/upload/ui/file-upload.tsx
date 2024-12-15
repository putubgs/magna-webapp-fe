"use client";

import { EyeIcon, XIcon, CheckIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import PdfIcon from "@/components/icons/pdfIcon";
import { FileUploadStatus } from "../types/FileType";
import { useFileStore } from "../store/file-store";

export default function FileUpload({ className }: { className?: string }) {
  const {
    file,
    setFile,
    error,
    setError,
    status,
    setStatus,
    setIsProcessable,
  } = useFileStore();

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const errorMessages = rejectedFiles[0].errors.map((err: any) => {
        if (err.code === "file-too-large") {
          return "Your CV More Than 5mb, Please Upload Lower Than 5mb";
        }
        return err.message;
      });
      setError(errorMessages.join(", "));
      setStatus(FileUploadStatus.ERROR);
      return;
    }

    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setStatus(FileUploadStatus.WARN);
      setError(null);
      setIsProcessable(true);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
  });

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  const previewFile = () => {
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      window.open(fileUrl, "_blank");
    }
  };

  return (
    <div className="space-y-5 h-[100%]">
      <div
        className={`mt-4 border-2 border-dashed rounded-lg p-6 bg-gradient-to-r from-[#FFFFFF0D] via-[#FFFFFF2D] to-[#FFFFFF4D]
          ${
            isDragActive
              ? "border-indigo-500 bg-purple-50/10"
              : "border-gray-600"
          } 
          ${className || "h-[264px]"}
          ${error ? "border-red-500" : ""}`}
      >
        {
          (
            <div
              {...getRootProps()}
              className="flex flex-col h-full justify-center text-lg items-center gap-4 text-center cursor-pointer p-6 "
            >
              <input {...getInputProps()} />
              <PdfIcon className="size-[40px]" />
              <div>
                <div>
                  {!file ? "Click to upload or drag and drop" : file?.name}{" "}
                </div>
                {status === FileUploadStatus.SUCCESS && (
                  <div className="text-green-500 flex gap-2">
                    {" "}
                    <CheckIcon className="!size-6" /> Your CV is ATS Format
                  </div>
                )}
                {status === FileUploadStatus.ERROR && (
                  <div className="text-red-500 flex">
                    {" "}
                    <XIcon className="!size-6 flex-shrink-0" />
                    {error}
                  </div>
                )}
                {status === FileUploadStatus.WARN && (
                  <div className="text-yellow-500">
                    ! Your CV is non ATS Format, Please Upload ATS Format for
                    the Best Evaluation
                  </div>
                )}
                {status === FileUploadStatus.INITIAL && (
                  <div className="">PDF Max 5mb</div>
                )}
              </div>
            </div>
          )
        }
      </div>

      {error && <div className="mt-2 text-lg text-red-500">Error: {error}</div>}
    </div>
  );
}
