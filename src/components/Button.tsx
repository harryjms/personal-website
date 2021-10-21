import React, { MouseEvent } from "react";

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ onClick, disabled, ...props }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };
  return <button onClick={handleClick} aria-disabled={disabled} {...props} />;
};

export default Button;
