import React from "react";
import { useEffect, useState, createContext } from "react";
export const Cursorcontext = createContext();
const ContextProvider = ({ children }) => {
  const [cursorPos, setcursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBG, setcursorBG] = useState("default");
  const mouseEnterHandler = () => {
    setcursorBG("text");
  };
  const mouseLeaveHandler = () => {
    setcursorBG("default");
  };
  const move = (e)=>{
    setcursorPos({
      x: e.clientX,
      y: e.clientY,
    })
  }
  useEffect(() => {
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move)
    };
  });
  
  const cursorVariants = {
    default: {
      backgroundColor: "#0e1112",
      x: cursorPos.x - 15,
      y: cursorPos.y - 15,
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
     
    },
  };
  return (
    <Cursorcontext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </Cursorcontext.Provider>
  );
};

export default ContextProvider;
