import Image from "next/image";

export default function CvReviewStepsSection() {
  return (
    <section className="py-10 px-4 md:px-[120px] relative space-y-[60px]">
      <div className="absolute size-[400px] -z-10 -top-10 -left-44 opacity-80">
        <Image
          src={"/assets/img/cv-review/blurred-circle-purple.png"}
          alt="Circle"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
        />
      </div>
      <div className="absolute size-[400px] -z-10 -top-3 -right-60 opacity-80">
        <Image
          src={"/assets/img/cv-review/blurred-circle-purple.png"}
          alt="Circle"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
        />
      </div>

      <h2 className="text-5xl sm:text-6xl md:text-7xl text-center">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9299F5] to-[#482796]">
          Easy Step
        </span>{" "}
        Using <br /> Our Feature
      </h2>

      <div className="grid px-5 md:p-0 md:grid-cols-3 gap-10">
        <div className="border-2 relative border-[#262626] rounded-xl flex items-center flex-col text-center">
          <div className="absolute size-[90px] -left-9 -top-9">
            <Image
              src={"/assets/img/cv-review/step-1.png"}
              alt="Step 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="relative w-full sm:w-80 aspect-[5/4] ">
            <Image
              src={"/assets/img/cv-review/step-upload.png"}
              alt="Upload icon"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="-mt-24 space-y-6 px-6 pb-8">
            <h3 className="text-3xl sm:text-5xl">Upload</h3>
            <p className="text-xl sm:text-2xl">Upload your Professional CV</p>
          </div>
        </div>

        <div className="border-2 relative border-[#262626] rounded-xl flex items-center flex-col text-center">
          <div className="absolute size-[92px] -left-9 -top-9">
            <Image
              src={"/assets/img/cv-review/step-2.png"}
              alt="Step 2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="relative w-full sm:w-80  aspect-[5/4] ">
            <Image
              src={"/assets/img/cv-review/step-edit.png"}
              alt="Edit icon"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="-mt-24 space-y-6 px-6 pb-8">
            <h3 className="text-5xl">Edit</h3>
            <p className="text-2xl">Edit your CV With Magna AI</p>
          </div>
        </div>

        <div className="border-2 relative border-[#262626] rounded-xl flex items-center flex-col text-center">
          <div className="absolute size-[92px] -left-9 -top-9">
            <Image
              src={"/assets/img/cv-review/step-3.png"}
              alt="Step 3"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="relative w-full sm:w-80  aspect-[5/4] ">
            <Image
              src={"/assets/img/cv-review/step-apply.png"}
              alt="Apply icon"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 90vw"
            />
          </div>
          <div className="-mt-24 space-y-6 px-6 pb-8">
            <h3 className="text-5xl">Apply</h3>
            <p className="text-2xl">Apply your CV to Job</p>
          </div>
        </div>
      </div>
    </section>
  );
}
