import React from "react";
import FAQsimg from "../../images/FAQs.png";
import { FaAngleDown } from "react-icons/fa";
import Accordion from "../../components/accordion/Accordion";

const FAQs = () => {
  return (
    <div className="flex md:flex-row flex-col px-6 xl:px-[90px] md:gap-0 gap-6 pt-0 xl:pt-[60px] ">
      <div className="flex xs:w-[70%] md:w-[40%] md:justify-normal w-auto justify-center">
        <img
          src={FAQsimg}
          className="max-w-[511px] max-h-[90px] w-full h-full"
          alt="FAQs"
        />
      </div>
      <Accordion />
    </div>
  );
};

export default FAQs;
