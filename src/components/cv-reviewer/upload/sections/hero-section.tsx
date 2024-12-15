"use client";
import FileUpload from "../ui/file-upload";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SelectLanguage from "../ui/select-language";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ButtonProcess from "../ui/button-process";
import LoadingSection from "./loading-section";
import { useFileStore } from "../store/file-store";

export default function CvReviewUploadHeroSection() {
  const { isLoading } = useFileStore();

  if (isLoading) {
    return <LoadingSection />;
  }

  return (
    <section className="px-4 md:px-[120px] relative h-full md:h-[90vh] z-0 text-center flex flex-col gap-10 items-center justify-start">
      <div className="absolute size-[600px] -z-10 -top-10 -left-28">
        <Image
          src={"/assets/img/cv-review/blurred-circle-purple.png"}
          alt="Circle"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
        />
      </div>

      <div className="absolute size-[550px] -z-10 -bottom-10 -right-28">
        <Image
          src={"/assets/img/cv-review/blurred-circle-green.png"}
          alt="Circle"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
        />
      </div>

      <div className="relative w-full text-start mt-11  md:h-full md:flex md:flex-col ">
        <h2 className="text-4xl sm:text-6xl md:text-7xl md:text-center md:my-14">
          Upload Your Resume
        </h2>
        <div className="flex flex-col sm:flex-row-reverse md:gap-5 md:h-full">
          <div className="md:basis-4/12  flex flex-col md:h-[80%] justify-between">
            <div>
              <p className="text-2xl mt-11 md:mt-0 font-semibold">Hello</p>
              <p className="text-4xl md:text-[40px] mt-4 font-semibold">
                Ahmad Jaelani Mustofa
              </p>
              <p className="md:text-xl mt-5">
                Upload your CV in ATS format, our system can provide feedback
                with 90% accuracy
              </p>
            </div>

            <div className="md:flex w-full flex-col gap-2 hidden">
              <SelectLanguage />
              <ButtonProcess />
            </div>
          </div>

          <div className="md:basis-8/12 md:h-[80%] flex flex-col">
            <FileUpload className="mt-11 md:mt-0 aspect-[334/420] md:aspect-auto h-full" />
          </div>
          <div className="flex w-full flex-col gap-2 md:hidden">
            <SelectLanguage />
            <ButtonProcess />
          </div>
        </div>
      </div>
    </section>
  );
}
