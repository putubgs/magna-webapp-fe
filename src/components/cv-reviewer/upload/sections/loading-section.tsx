"use client";

import Image from "next/image";
import {
  CheckCircle,
  Edit,
  Download,
  Loader,
  Circle,
  Check,
} from "lucide-react"; // Importing icons from Lucide React
import { useEffect, useState } from "react";

export default function LoadingSection() {
  const [uploading, setUploading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUploading(false);
    }, 3000);
  }, []);

  return (
    <section className="px-4 md:px-[120px] relative h-full md:h-[90vh] z-0 text-center flex flex-col gap-10 items-center justify-center bg-black">
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

      <div className="text-white">
        <h1 className="md:text-[72px] text-4xl font-normal mb-4 md:mt-0 mt-10">
          We’re Uploading Your Resume...
        </h1>{" "}
        {/* Set to 72px and not bold */}
        <p className="text-[18px] mb-8 text-start md:text-center md:mt-10 mt-8">
          We’re uploading your resume, organizing your details, and seamlessly
          applying your chosen template.
        </p>
        <ol className="list-none mb-8 md:mt-16">
          <li className="flex items-center mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/50 text-white mr-4 flex-shrink-0">
              1
            </span>
            <span className="text-[20px] text-start md:text-center">
              Review and customize each section to perfectly align with your
              unique experience.
            </span>
          </li>
          <li className="flex items-center mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/50 text-white mr-4 flex-shrink-0">
              2
            </span>
            <span className="text-[20px] text-start md:text-center">
              Leverage our expertly crafted content, designed to optimize your
              resume for screening software.
            </span>
          </li>
          <li className="flex items-center mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/50 text-white mr-4 flex-shrink-0">
              3
            </span>
            <span className="text-[20px] text-start md:text-center">
              Download or print your polished resume, and confidently apply for
              your next opportunity.
            </span>
          </li>
        </ol>
        {uploading ? (
          <div className="flex items-center justify-center text-[#EFF4B0] mt-16">
            <Loader className="mr-2 animate-spin" />{" "}
            {/* Loader icon for uploading */}
            <span className="text-[20px] animate-pulse">uploading...</span>{" "}
            {/* Set to 20px */}
          </div>
        ) : (
          <div className="flex items-center justify-center text-green-500 mt-16">
            <Check className="mr-2" /> {/* Check circle icon */}
            <span className="text-[20px]">Your resume is ready!</span>{" "}
            {/* Set to 20px */}
          </div>
        )}
      </div>
    </section>
  );
}
