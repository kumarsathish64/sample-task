import { useCallback, useState } from "react";
import UseCallBackHook2 from "./UseCallBackHook2";
const UseCallBackHook = () => {
  const [prod, setProd] = useState(["item-1", "item-2"]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  console.log("parent re-rendered");

  const addtoCart = useCallback(() => {
    console.log(cart);
    setCart(cart + 1);
  },[cart]);
  return (
    <div>
      <h3>count {count}</h3>
      <button onClick={() => setCount(count + 1)}>add</button>

      <h2>Cart: {cart}</h2>
      <div>
        {prod.map((item, index) => {
          return (
            <UseCallBackHook2 key={index} addtoCart={addtoCart} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default UseCallBackHook;
