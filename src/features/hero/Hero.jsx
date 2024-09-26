import ButtonComponent from "../../components/button-component/ButtonComponent";
import HeroIcon from "../../icons/HeroIcon";
import RightIcon from "../../icons/RightIcon";
import UserGroup from "../../icons/UserGroup";
import UserName from "../../icons/UserName";
import showReel from "../../images/showReel.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col px-6 xl:px-[90px] pt-9 relative ">
        <HeroIcon />
        <div className="flex xl:flex-row flex-col  py-12 justify-between gap-9">
          <div className="flex flex-col gap-10 ">
            <div>
              <div className="text-2xl xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold">
                Designed with the specific needs of large B2B enterprises in
                mind,
              </div>
              <div className="text-2xl xs:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold text ">
                our platform offers a comprehensive solution to simplify.
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[21px]">
              <ButtonComponent
                onClick={() =>
                  alert("This button will not perform any actions")
                }
                rightIcon={<RightIcon />}
                styles="flex items-center justify-center gap-2.5 md:px-8 h-[60px] bg-[#EF001C] md:w-auto xs:w-[270px] sm:w-[350px]  font-bold rounded-[34px] text-white xs:text-xs sm:text-sm md:text-sm xl:text-base"
              >
                <div>GET PROFESSIONAL VIDEO SERVICES</div>
              </ButtonComponent>
              <div className="flex gap-3 items-center">
                <div>
                  <UserGroup />
                </div>
                <div>
                  <UserName />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end flex-shrink-0">
            <img
              src={showReel}
              alt="show reel img"
              className="w-[256px] h-[138px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
