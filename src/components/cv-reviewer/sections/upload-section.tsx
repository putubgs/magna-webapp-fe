import FileUpload from "@/components/ui/file-upload";
import Image from "next/image";

export default function CvReviewUploadSection() {
  return (
    <section
      id="upload"
      className="py-10 relative text-center bg-black px-4 md:px-[120px]"
    >
      <div className="absolute size-[400px] -z-10 -top-32 -left-10 opacity-80">
        <Image
          src={"/assets/img/cv-review/blurred-circle-purple.png"}
          alt="Circle"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
        />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl">
        <span className="text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r bg-clip-text from-[#9299F5] to-[#482796] text-transparent font-extrabold">
          TRY NOW!
        </span>{" "}
        <br className="md:hidden" />
        Upload your Resume
      </h2>
      <p className="mt-5 mb-11 text-lg md:text-2xl">
        Upload your CV in PDF format by clicking or dragging and dropping the
        file into this area to receive an automatic evaluation and improvement
        suggestions.
      </p>
      <FileUpload />
    </section>
  );
}
