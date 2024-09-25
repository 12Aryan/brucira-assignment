import { useState } from "react";
import ButtonComponent from "../button-component/ButtonComponent";
import testimonyOne from "../../images/acc2.png";
import testimonyTwo from "../../images/acc1.png";
import testimonyThree from "../../images/acc2.png";
import LeftIcon from "../../icons/LeftIcon";
import RightIcon from "../../icons/RightIcon";

const testimonials = [
  {
    image: testimonyOne,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "LISSA SMITH, VYMO",
    position: "Director of Marketing.",
  },
  {
    image: testimonyTwo,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "JOHN DOE, COMPANY",
    position: "CEO",
  },
  {
    image: testimonyThree,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "JANE ROE, FIRM",
    position: "Manager",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="carousel relative ">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="carousel-item flex gap-3 sm:gap-8" key={index}>
            <div className="flex w-[40%]">
              <img
                src={testimonial.image}
                className="max-h-[517px] max-w-[485px] w-full h-full"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between w-[60%] sm:gap-0 gap-3">
              <div className="font-semibold xs:text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-2xl">
                {testimonial.text}
              </div>
              <div className="flex flex-col">
                <div className="text-[28px] xs:text-sm md:text-lg lg:text-xl font-bold ">
                  {testimonial.name}
                </div>
                <div className="uppercase xs:text-xs md:text-sm 2xl:text-lg font-semibold text-[#111010CC] ">
                  {testimonial.position}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex max-w-max mt-4 gap-3 lg:absolute relative bottom-0 right-0 ">
        <ButtonComponent
          styles="border-[1px] border-[#111010] rounded-[34px] md:py-4 md:px-6  px-4 py-2 bg-[white] "
          onClick={previousTestimonial}
        >
          <LeftIcon />
        </ButtonComponent>
        <ButtonComponent
          styles="rounded-[34px] md:py-4 md:px-6 px-4 py-2 bg-[#EF001C]"
          onClick={nextTestimonial}
        >
          <RightIcon />
        </ButtonComponent>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
