import ContactUs from "../../components/contact-us/ContactUs";
import SomethingNewimg from "../../images/somethingNew.png";
import FoundersSections from "../founders-section/FoundersSections";

const StartSomethingNew = () => {
  return (
    <div className="xs:pt-6 lg:pt-[60px] xl:pt-[120px] ">
      <div className="flex flex-col xl:flex-row bg-[#F1F2F6] xs:py-6 lg:py-[60px] xl:py-[80px] px-6 xl:px-[65px] gap-10 2xl:gap-[194px]  ">
        <div className="flex flex-col gap-16">
          <div>
            <img src={SomethingNewimg} alt="Let's start something new" />
          </div>
          <FoundersSections />
        </div>
        <div>
          <div className="font-semibold text-2xl text-[#111010] ">
            Give us few details and we’ll get in touch
          </div>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default StartSomethingNew;
