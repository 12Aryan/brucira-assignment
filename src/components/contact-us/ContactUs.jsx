import React from "react";
import ButtonComponent from "../button-component/ButtonComponent";

const ContactUs = () => {
  return (
    <div>
      <ButtonComponent
        onClick={() => alert("This button will not perform any actions")}
        styles="flex justify-center items-center h-[30px] w-[136px] bg-[#EF001C] text-[14px] rounded-[32px] text-white"
      >
        Get Started
      </ButtonComponent>
    </div>
  );
};

export default ContactUs;
