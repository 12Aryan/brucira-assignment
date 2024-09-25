import Marquee from "react-fast-marquee";

const MarqueeComponent = ({ children, styles = "flex " }) => {
  return (
    <>
      <Marquee pauseOnHover={true}>
        {/* Add padding to ensure consistent spacing between the first and last element */}
        <div className={styles}>
          {children.map((child, index) => (
            <div key={index} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default MarqueeComponent;
