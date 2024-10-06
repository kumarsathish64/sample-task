import { useContext } from "react";
import { ThemeContext } from "./UseContextTheme";

const UseContextTheme2 = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>toggleTheme</button>
    </div>
  );
};

export default UseContextTheme2;
