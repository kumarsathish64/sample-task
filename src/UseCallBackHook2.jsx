import { memo } from "react";
const UseCallBackHook2 = ({ item, addtoCart }) => {
  console.log(`${item} re-rendered`);
  return (
    <div>
      <h1>{item}</h1>
      <button onClick={addtoCart}>add to cart</button>
    </div>
  );
};

export default memo(UseCallBackHook2); //memo is used to avoid unnecessary re-rendering UseCallBackHook2;
