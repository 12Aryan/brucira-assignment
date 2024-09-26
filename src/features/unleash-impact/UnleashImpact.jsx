import MarqueeComponent from "../../components/marquee/MarqueeComponent";
import UnleashImpactLogo from "../../icons/UnleashImpactLogo";

const UnleashImpact = () => {
  const UVI = [<UnleashImpactLogo key="UVI-logo" />];

  return (
    <div className="bg-[#111010]">
      <MarqueeComponent
        styles={"flex bg-[#111010] py-6 xl:py-11 items-center space-x-16 px-4"}
      >
        {UVI}
      </MarqueeComponent>
    </div>
  );
};

export default UnleashImpact;
