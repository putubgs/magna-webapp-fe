"use client";

import { EyeIcon, XIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import PdfIcon from "../icons/pdfIcon";
import { Button } from "./button";

interface FileWithPreview extends File {
  preview?: string;
}

export default function FileUpload( { className } : {className?: string} ) {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const errorMessages = rejectedFiles[0].errors.map((err: any) => {
        if (err.code === "file-too-large") {
          return "File cannot be larger than 5MB";
        }
        return err.message;
      });
      setError(errorMessages.join(", "));
      return;
    }

    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setError(null);
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
    <div className="space-y-5">
      {file && (
        <div className="flex justify-end">
          <Button
            onClick={removeFile}
            size={"icon"}
            variant={"ghost"}
            aria-label="Remove file"
          >
            <XIcon className="!size-6" />
          </Button>
        </div>
      )}
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
        {!file ? (
          <div
            {...getRootProps()}
            className="flex flex-col h-full justify-center text-lg items-center gap-4 text-center cursor-pointer p-6 "
          >
            <input {...getInputProps()} />
            <PdfIcon className="size-[40px]" />
            <p>
              Click to upload or drag and drop
              <br />
              PDF Max 5mb
            </p>
          </div>
        ) : (
          <div className="space-y-5 py-5 px-10">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center space-x-4">
                <PdfIcon className="size-[32px]" />
                <div className="text-xl text-gray-200">{file.name}</div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={previewFile}
                  aria-label="Preview file"
                >
                  <EyeIcon className="!size-6" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {file && (
        <Button className="w-full text-lg font-extrabold">
          Check Your Resume
        </Button>
      )}

      {error && <div className="mt-2 text-lg text-red-500">Error: {error}</div>}
    </div>
  );
}
