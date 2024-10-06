import { useMemo } from "react";
import { useState } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([3, 2]);

  console.log("component re-rendered");

  const showMax = () => {
    console.log("max function running");
    return Math.max(...arr);
  };

  const memoVal = useMemo(() => showMax(), [arr]);

  return (
    <>
      <p>Count: {count}</p>
      <p>Max: {memoVal}</p>
      <p>{JSON.stringify(arr)}</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <button
        onClick={() => setArr([...arr, Math.round(count * Math.random())])}
      >
        add to arr
      </button>
    </>
  );
};

export default UseMemoHook;
