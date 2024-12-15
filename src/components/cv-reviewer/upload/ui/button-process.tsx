"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useFileStore } from "../store/file-store";

export default function ButtonProcess() {
  const { isProcessable, setIsLoading } = useFileStore();

  const handleProcess = () => {
    if (isProcessable) {
      setIsLoading(true);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 3000);
    }
  };
  return (
    <>
      <Button
        onClick={handleProcess}
        variant={isProcessable ? "process" : "processDisabled"}
        className={`font-semibold mt-5 ${
          isProcessable ? "!cursor-pointer" : "!cursor-default"
        }`}
      >
        Process <ArrowRight size={24} />
      </Button>
    </>
  );
}
