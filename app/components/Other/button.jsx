import "./button.css";

const Button = (props) => {
  // Add accessible name via aria-label or pass-through
  const { ariaLabel, children, className, style, ...rest } = props;
  return (
    <button
      className={`boton-elegante${className ? ` ${className}` : ""}`}
      style={style}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;