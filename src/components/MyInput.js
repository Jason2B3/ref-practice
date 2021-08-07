import React from "react";

function MyInput({ type, placeholder }, ref) {
  return <input ref={ref} type={type} placeholder={placeholder} />;
}

const forwardedInput = React.forwardRef(MyInput);
export default forwardedInput;
