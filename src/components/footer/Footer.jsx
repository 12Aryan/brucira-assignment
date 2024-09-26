import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col xs:pt-10 lg:pt-[80px] pb-[38px] px-6 xl:px-[90px]">
      <div></div>
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
