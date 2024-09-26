import TestimonialCarousel from "../../components/testimony-carousel/TestimonyCarousel";
import Line from "../../icons/Line";

const Testimony = () => {
  return (
    <div className="flex flex-col md:py-[60px] py-12 items-center px-6 xl:px-[90px] gap-6 md:gap-9">
      <div className="flex gap-3 w-full justify-start items-center">
        <Line />
        <div className="font-semibold  xs:text-sm md:text-lg lg:text-xl text-[#DB2F2C]">
          TESTIMONY FROM OUR PARTNERS
        </div>
      </div>
      <TestimonialCarousel />
    </div>
  );
};

export default Testimony;
