const ButtonComponent = ({
  styles,
  children,
  onClick,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button className={styles} onClick={onClick}>
      {leftIcon && <span className="icon-left">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
};

export default ButtonComponent;
