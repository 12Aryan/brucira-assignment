import { useState } from "react";
import HeaderLogo from "../../icons/HeaderLogo";
import ButtonComponent from "../button-component/ButtonComponent";
import ArrowDownRight from "../../icons/ArrowDownRight";
import ArrowUpRight from "../../icons/ArrowUpRight";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [clickedLink, setClickedLink] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "SERVICE", href: "#services" },
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
  ];

  return (
    <>
      <header className="flex items-center justify-between px-6 xl:px-[90px] h-[86px]">
        <div className="flex items-center">
          <HeaderLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-3 lg:gap-10 items-center">
          <div className="flex gap-3 lg:gap-10 ">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                onClick={() => setClickedLink(index)}
                className={`flex cursor-pointer text-[14px] font-semibold ${
                  clickedLink === index ? "text-[#111010]" : "text-[#818181]"
                } hover:text-gray-900`}
              >
                {link.name}
                {clickedLink === index ? <ArrowDownRight /> : <ArrowUpRight />}
              </div>
            ))}
          </div>
          <ButtonComponent styles="flex justify-center items-center h-[30px] w-[136px] bg-[#EF001C] text-[14px] rounded-[32px] text-white">
            Get Started
          </ButtonComponent>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden z-10 bg-white w-full absolute top-[86px] left-0 shadow-md">
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                onClick={() => {
                  setClickedLink(index);
                  setIsMenuOpen(false);
                }}
                className={`flex cursor-pointer text-[16px] font-semibold ${
                  clickedLink === index ? "text-[#111010]" : "text-[#818181]"
                } hover:text-gray-900`}
              >
                {link.name}
                {clickedLink === index ? <ArrowDownRight /> : <ArrowUpRight />}
              </div>
            ))}
            <ButtonComponent styles="flex justify-center items-center h-[36px] w-[160px] bg-[#EF001C] text-[16px] rounded-[32px] text-white">
              Get Started
            </ButtonComponent>
          </div>
        </div>
      )}
      <hr className="border-[1px] border-[#0000001A]" />
    </>
  );
};

export default Header;
