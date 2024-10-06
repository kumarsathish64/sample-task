import { useMemo, useState } from "react";

const UseMemoHook2 = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

 
  const slowFunction = (num) => {
    console.log("slow function running");
    for (let i = 0; i < 1000000000; i++) {}

    return num * 2;
  };
  // const doubleNumber = slowFunction(number);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((d) => !d)}>change theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoHook2;
