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

      {/* Accordion */}
      {/* <div className="flex flex-col md:w-[60%] md:justify-normal w-auto justify-center">
        <div className="flex justify-between items-center">
          <div className="font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] pb-6">
            How do I sign up?
          </div>
          <FaAngleDown />
        </div>
        <hr className="border-[1px] border-[#11101026]" />
        <div className="flex justify-between items-center">
          <div className="font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] py-6">
            What information do I need to provide during the sign-up process?
          </div>
          <FaAngleDown />
        </div>
        <hr className="border-[1px] border-[#11101026]" />
        <div className="flex justify-between items-center">
          <div className="font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] py-6">
            Is my information secure during the sign-up process?{" "}
          </div>
          <FaAngleDown />
        </div>
        <hr className="border-[1px] border-[#11101026]" />
        <div className="flex justify-between items-center">
          <div className="font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] py-6">
            Who can apply?
          </div>
          <FaAngleDown />
        </div>
        <hr className="border-[1px] border-[#11101026]" />
        <div className="flex justify-between items-center">
          <div className="font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] py-6">
            What are the terms and conditions for the collaboration?
          </div>
          <FaAngleDown />
        </div>
        <hr className="border-[1px] border-[#11101026]" />
        <div className="flex justify-between items-center">
          <div className="font-normal xs:text-sm md:text-base lg:text-base xl:text-lg text-[#111010] py-6">
            What is the minimum duration of the contract?
          </div>
          <FaAngleDown />
        </div>
        <hr className="border-[1px] border-[#11101026]" />
      </div> */}
      <Accordion />
    </div>
  );
};

export default FAQs;
