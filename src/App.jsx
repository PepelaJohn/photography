import React from "react";
import Routes from "./components/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
// import { Cursorcontext } from "./context/CursorContext";
const App = () => {
  // const { cursorVariants, cursorBG } = useContext(Cursorcontext);
  return (
    <Router>
      <Routes />
      {/* cursor */}
      <motion.div
        // variants={cursorVariants}
        // animate={cursorBG}
        className="fixed display-none rounded-full bg-primary top-0 left-0 w-[32px] h-[32px] z-500 pointer-events-none"
      ></motion.div>
    </Router>
  );
};

export default App;
