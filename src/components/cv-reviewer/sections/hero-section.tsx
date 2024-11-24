import Image from "next/image";
import Link from "next/link";

export default function CvReviewHeroSection() {
  return (
    <section className="h-[90vh] px-4 md:px-[120px] relative z-0 text-center flex flex-col gap-10 items-center justify-center">
      <div className="relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl">
          Stand Out with <span className="font-semibold">Magna</span> <br /> and
          Get Your Job
        </h2>

        <div className="absolute size-[600px] -z-10 -top-64 -left-80">
          <Image
            src={"/assets/img/cv-review/blurred-circle-purple.png"}
            alt="Circle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
          />
        </div>

        <div className="absolute size-[550px] -z-10 -top-40 -right-52">
          <Image
            src={"/assets/img/cv-review/blurred-circle-green.png"}
            alt="Circle"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
          />
        </div>
      </div>
      <p className="md:w-4/5 text-lg md:text-xl">
        Increase your chances of securing your dream job with our powerful ATS
        resume checker. Instantly scan your resume, receive a personalized
        score, and get tailored recommendations to make your application truly
        stand out.
      </p>
      <Link
        href={""}
        className="py-3 px-12 border border-dashed border-white font-extrabold bg-magna-purple hover:bg-magna-purple/90 rounded-lg transition-colors duration-150"
      >
        Check Your Resume
      </Link>
    </section>
  );
}
