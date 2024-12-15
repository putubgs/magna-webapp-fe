import CvReviewerNavbar from "@/components/cv-reviewer/navigations/navbar";
import CvReviewFormSection from "@/components/cv-reviewer/sections/form-section";
import CvReviewHeroSection from "@/components/cv-reviewer/sections/hero-section";
import CvReviewReasonsSection from "@/components/cv-reviewer/sections/reasons-section";
import CvReviewStepsSection from "@/components/cv-reviewer/sections/steps-section";
import CvReviewTutorialSection from "@/components/cv-reviewer/sections/tutorial-section";
import CvReviewUploadSection from "@/components/cv-reviewer/sections/upload-section";
import CvReviewUploadHeroSection from "@/components/cv-reviewer/upload/sections/hero-section";
import Footer from "@/components/ui/footer";

export default function CvReviewerPage() {
  return (
    <div className="overflow-x-clip">
      <CvReviewerNavbar />
      <main className="space-y-[120px] mb-[120px]">
        <CvReviewUploadHeroSection />
      </main>
      <Footer />
    </div>
  );
}
