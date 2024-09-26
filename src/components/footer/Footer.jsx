import CompanyIcon from "../../icons/CompanyIcon";
import ContactIcon from "../../icons/ContactIcon";
import ResourcesIcon from "../../icons/ResourcesIcon";
import ServicesIcon from "../../icons/ServicesIcon";
import WorkIcon from "../../icons/WorkIcon";

const Footer = () => {
  return (
    <div className="flex flex-col xs:pt-10 lg:pt-[50px] pb-[38px] px-6 xl:px-[90px]">
      <div className="flex flex-wrap xs:pb-[40px] md:pb-[60px] xl:pb-[78px]">
        <div className="flex flex-col xs:w-[50%] sm:w-[33%] md:w-[25%] lg:w-[20%] gap-4 pt-7">
          <CompanyIcon />
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            About Features Works
          </div>
        </div>

        <div className="flex flex-col xs:w-[50%] sm:w-[33%] md:w-[25%] lg:w-[20%] gap-4 pt-7">
          <ResourcesIcon />
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Blog
          </div>
        </div>

        <div className="flex flex-col xs:w-[50%] sm:w-[33%] md:w-[25%] lg:w-[20%] gap-4 pt-7">
          <WorkIcon />
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Video
          </div>
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Shoot
          </div>
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Post
          </div>
        </div>

        <div className="flex flex-col xs:w-[50%] sm:w-[33%] md:w-[25%] lg:w-[20%] gap-4 pt-7">
          <ServicesIcon />
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Video
          </div>
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Shoot
          </div>
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Post
          </div>
        </div>

        <div className="flex flex-col xs:w-[50%] sm:w-[33%] md:w-[25%] lg:w-[20%] gap-4 pt-7">
          <ContactIcon />
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Video
          </div>
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Talk about us
          </div>
          <div className="xs:text-sm md:text-base font-normal text-[#111010]">
            Collab
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex w-full">
          <hr
            className="border-[1px] border-[#11101033] w-full
          "
          />
        </div>
        <div className="flex justify-between gap-4 items-center w-full flex-wrap">
          <div className="font-base font-normal text-[#111010]">
            {" "}
            Copyright ©2023 Red Bangle
          </div>
          <div className="flex gap-4 lg:gap-8 ">
            #111010
            <div className="font-base font-normal text-[#111010]">
              Privacy Policy
            </div>
            <div className="font-base font-normal text-[#111010]">Legal</div>
            <div className="font-base font-normal text-[#111010]">
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
