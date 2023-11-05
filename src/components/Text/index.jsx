import React from "react";

const sizeClasses = {
  txtInterSemiBold24WhiteA7007f: "font-inter font-semibold",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold48Black900: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
