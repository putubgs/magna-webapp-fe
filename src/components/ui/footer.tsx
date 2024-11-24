import Link from "next/link";
import InstaIcon from "../icons/instaIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import MailIcon from "../icons/mailIcon";

export default function Footer() {
  return (
    <div
      id="contact"
      className={`footer-background flex flex-col items-center md:p-[80px] space-y-[40px] justify-center`}
    >
      <div className="flex flex-col items-center text-[16px] text-center">
        <div className="md:text-[24px] text-[16px]">Contact Us</div>
        <div className={`md:text-[48px] text-[32px]`}>
          Stay connected with Magna Partners!
        </div>
      </div>
      <div className="flex gap-y-6 md:gap-x-[60px] gap-x-[25px]">
        <Link
          className="flex md:space-x-3 space-x-0 items-center"
          href="https://www.instagram.com/magna.partners/"
          target="_blank"
        >
          <div className="md:flex hidden items-center justify-center rounded-full border border-white w-[30px] h-[30px]">
            <InstaIcon size={15} color="white" />
          </div>
          <div
            className="flex md:hidden items-center justify-center rounded-full border border-white w-[50px] h-[50px]"
            aria-label="Magna Partners Instagram"
          >
            <InstaIcon size={25} color="white" />
          </div>
          <div className="md:flex hidden">@magna.partners</div>
        </Link>
        <Link
          className="flex md:space-x-3 space-x-0 items-center"
          href="mailto:magnainitiatives.id@gmail.com"
        >
          <div className="md:flex hidden items-center justify-center rounded-full border border-white w-[30px] h-[30px]">
            <MailIcon size={15} color="white" />
          </div>
          <div
            className="flex md:hidden items-center justify-center rounded-full border border-white w-[50px] h-[50px]"
            aria-label="Magna Partners Email"
          >
            <MailIcon size={25} color="white" />
          </div>
          <div className="md:flex hidden">magnainitiatives.id@gmail.com</div>
        </Link>

        <Link
          className="flex md:space-x-3 space-x-0 items-center"
          href="https://www.linkedin.com/company/magna-id/"
          target="_blank"
        >
          <div className="md:flex hidden items-center justify-center rounded-full border border-white w-[30px] h-[30px]">
            <LinkedinIcon size={15} color="white" />
          </div>
          <div
            className="flex md:hidden items-center justify-center rounded-full border border-white w-[50px] h-[50px]"
            aria-label="Magna Partners LinkedIn"
          >
            <LinkedinIcon size={25} color="white" />
          </div>
          <div className="md:flex hidden">Magna Partners</div>
        </Link>
      </div>
    </div>
  );
}
