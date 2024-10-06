import { useRef } from "react";

import { useState } from "react";
const FormWithUseRef = () => {
  const nameRef = useRef(null);
  const [displayedName, setDisplayedName] = useState("");

  const readMe = () => {
    const name = nameRef.current.value;

    setDisplayedName(name);
  };
  return (
    <div>
      <h2>Enter Your Name</h2>
      <input ref={nameRef} type="text" placeholder="enter your name" />
      <button onClick={readMe}>submit</button>
      {displayedName && <h2>Hello {displayedName}</h2>}
    </div>
  );
};

export default FormWithUseRef;
