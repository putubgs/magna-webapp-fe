import { FileUploadStatus, FileWithPreview } from "../types/FileType";
import { create } from "zustand";

interface FileStore {
  file: FileWithPreview | null;
  error: string | null;
  status: FileUploadStatus | null;
  isProcessable: boolean;
  isLoading: boolean;
  setFile: (file: FileWithPreview | null) => void;
  setError: (error: string | null) => void;
  setStatus: (status: FileUploadStatus | null) => void;
  setIsProcessable: (isProcessable: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export const useFileStore = create<FileStore>((set) => ({
  file: null,
  error: null,
  status: null,
  isProcessable: false,
  isLoading: false,
  setFile: (file) => set({ file }),
  setError: (error) => set({ error }),
  setStatus: (status) => set({ status }),
  setIsProcessable: (isProcessable) => set({ isProcessable }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));
