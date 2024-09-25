import { useState } from "react";

// Dummy images (replace with real images)
import InnovativeImage from "../../images/acc1.png";
import ReliableImage from "../../images/acc2.png";
import QualityImage from "../../images/acc1.png";

const accordionData = [
  {
    id: 1,
    title: "Innovative",
    content:
      "We focus on innovation to bring unique solutions that meet the modern challenges.",
    image: InnovativeImage,
  },
  {
    id: 2,
    title: "Reliable",
    content:
      "Creation, ensuring your messages resonate worldwide. From concept to distribution, our platform serves as your strategic partner.",
    image: ReliableImage,
  },
  {
    id: 3,
    title: "Quality",
    content:
      "Our emphasis on quality ensures that every product we deliver meets the highest standards.",
    image: QualityImage,
  },
];

const Accordion = ({ title, content, isOpen, onClick, id }) => {
  return (
    <div className="cursor-pointer">
      {id === 1 && <hr className="border-[1px] border-[#0000001A]" />}
      <div
        onClick={onClick}
        className={`flex flex-col pt-4 md:pt-6 ${!isOpen && "pb-4  md:pb-6 "}`}
      >
        {isOpen && (
          <div
            className="text-xl text-[#EF001C]"
            style={{ width: "max-content" }}
          >{`0${id}`}</div>
        )}
        <div
          className={` ${
            isOpen
              ? "text-[#111010] md:text-[24px] text-[20px] "
              : "text-[#aaa9a9] md:text-[20px] text-[16px]  "
          } `}
        >
          {title}
        </div>
      </div>
      {isOpen && (
        <div className="text-sm font-normal text-[#111010CC] py-2 md:pb-6 pb-4">
          {content}
        </div>
      )}
      <hr className="border-[1px] border-[#0000001A]" />
    </div>
  );
};

const ImageAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion
  const [currentImage, setCurrentImage] = useState(InnovativeImage); // Initial image

  const handleAccordionClick = (index, image) => {
    setActiveIndex(index === activeIndex ? null : index);
    setCurrentImage(image);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-normal items-center w-full md:gap-[51px] gap-6">
      <div className="md:w-[40%] w-[70%]">
        <img
          src={currentImage}
          alt="Accordion related"
          className="w-full h-auto max-h-[451px] max-w-[484px] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 ">
        {accordionData.map((item, index) => (
          <Accordion
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => handleAccordionClick(index, item.image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageAccordion;
