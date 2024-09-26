import React, { useState } from "react";
import ButtonComponent from "../button-component/ButtonComponent";
import RightIcon from "../../icons/RightIcon";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("No actions were performed. ");
  };

  return (
    <form
      className="flex flex-col gap-8 w-full max-w-[468px]"
      onSubmit={handleSubmit}
    >
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          className=" pb-3 w-full text-base text-black placeholder-[#808082] bg-transparent focus:outline-none"
        />
        <hr className="border-[1px] border-[#808082]" />
      </div>
      <div>
        <input
          type="text"
          name="companyName"
          placeholder="Company name"
          value={formData.companyName}
          onChange={handleChange}
          className=" pb-3 w-full text-base text-black placeholder-[#808082] bg-transparent focus:outline-none"
        />
        <hr className="border-[1px] border-[#808082]" />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className=" pb-3 w-full text-base text-black placeholder-[#808082] bg-transparent focus:outline-none"
        />
        <hr className="border-[1px] border-[#808082]" />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone no*"
          value={formData.phone}
          onChange={handleChange}
          className=" pb-3 w-full text-base text-black placeholder-[#808082] bg-transparent focus:outline-none"
        />
        <hr className="border-[1px] border-[#808082]" />
      </div>
      <div>
        <input
          name="message"
          placeholder="Message*"
          value={formData.message}
          onChange={handleChange}
          className="pb-3 w-full text-base text-black placeholder-[#808082] bg-transparent focus:outline-none resize-none"
          rows="4"
        />
        <hr className="border-[1px] border-[#808082]" />
      </div>

      <ButtonComponent
        rightIcon={<RightIcon />}
        onClick={() => {}}
        styles="flex mt-2 justify-center items-center bg-[#EF001C] text-[14px] rounded-[34px] px-8 py-4 text-white gap-2.5 md:w-[468px] h-[60px] w-[250px]"
      >
        Contact Us
      </ButtonComponent>
    </form>
  );
};

export default ContactUs;
