import MarqueeComponent from "../../components/marquee/MarqueeComponent";
import DrawInbox from "../../icons/DrawInbox";
import Wipro from "../../icons/Wipro";
import Indeed from "../../icons/Indeed";
import Ikea from "../../icons/Ikea";
import Igt from "../../icons/Igt";
import Healthify from "../../icons/Healthify";
import Swiggy from "../../icons/Swiggy";
import MyCircle from "../../icons/MyCircle";

const CompanyLogos = () => {
  const companyLogos = [
    <DrawInbox key="draw-inbox-logo" />,
    <Wipro key="wipro-logo" />,
    <Indeed key="indeed-logo" />,
    <MyCircle key="my-circle-logo" />,
    <Ikea key="ikea-logo" />,
    <Igt key="igt-logo" />,
    <Healthify key="healthify-logo" />,
    <Swiggy key="swiggy-logo" />,
    <MyCircle key="my-circle-logo" />,
  ];
  return (
    <div className="xl:py-[60px] pt-3 ">
      <MarqueeComponent styles={"flex items-center space-x-16 "}>
        {companyLogos}
      </MarqueeComponent>
    </div>
  );
};

export default CompanyLogos;
