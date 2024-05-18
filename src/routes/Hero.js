import React, { useContext } from "react";
import heroImage from "../img/Hero/Hero2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Container } from "../components/Styled";
import { WrapContainer } from "../components/Styled";
import { PlaceHolderDiv } from "../components/Styled";
import { SectionContainer } from "../components/Styled";
import { DetailsWrap } from "../components/Styled";
import { PlaceHolderDiv2 } from "../components/Styled";
import { MdLocationPin } from "react-icons/md";
import { Cursorcontext } from "../context/CursorContext";
const Hero = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(Cursorcontext);
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      variants={spring}
      transition={transition1}
      className="wrapper wrap-section 0"
    >
      <Container className="relative bg-white overflow-hidden">
        <WrapContainer className="flex flex-col-1000 h-100 ">
          <PlaceHolderDiv className="flex h-100"></PlaceHolderDiv>
          <motion.div
            initial={{ opacity: 0, x: "-100%", y: "100%" }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: "100%", y: "-100%" }}
            transition={transition1}
            className="flex imgwrap overflow-hidden items-center border-top bg-blue-50 h-100 "
          >
            <img
              onMouseOver={() => {
                mouseEnterHandler();
              }}
              onMouseLeave={() => {
                mouseLeaveHandler();
              }}
              className="h-100"
              alt="photogapher"
              src={heroImage}
            />
          </motion.div>
        </WrapContainer>
        <SectionContainer className="flex flex-col-1000 padding-150 ">
          <DetailsWrap className="flex items-center h-100 ">
            <div
              onMouseEnter={() => {
                mouseEnterHandler();
              }}
              onMouseLeave={() => {
                mouseLeaveHandler();
              }}
              className="flex flex-col"
            >
              <h1 className="ease-in-out ">
                I'm a Photographer, <br /> Film Maker, Producer <br /> & <br />
                Digital Content Creator
              </h1>
              <span>
                <a
                  className="blue mt-2"
                  href="https://maps.google.com/Nairobi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nairobi , Kenya <MdLocationPin></MdLocationPin>
                </a>
              </span>
              <Link to="/about" className="btn-h mt-2 ease-in-out">
                View More
              </Link>
            </div>
          </DetailsWrap>
          <PlaceHolderDiv2 onMouseOver={() => {
                mouseEnterHandler();
              }}
              onMouseLeave={() => {
                mouseLeaveHandler();
              }} className="flex h-100 "></PlaceHolderDiv2>
        </SectionContainer>
      </Container>
    </motion.section>
  );
};

export default Hero;
