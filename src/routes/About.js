import React from "react";
import heroImage from "../img/Hero/Hero3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Wrap } from "../components/Styled";
import { Container } from "../components/Styled";
import { WrapContainer } from "../components/Styled";
import { PlaceHolderDiv } from "../components/Styled";
import { SectionContainer } from "../components/Styled";
import { DetailsWrap } from "../components/Styled";
import { PlaceHolderDiv2 } from "../components/Styled";
const About = () => {
  return (
    <Wrap className="wrapper 0">
      <Container className="relative overflow-hidden">
        <WrapContainer className="flex invert overflow-hidden ease-in-out flex-col-1000 h-100 ">
          <motion.div
            initial={{ opacity: 0, x:'100%', y:"-100%" }}
            animate={{ opacity: 1, x:0, y:0 }}
            exit={{ opacity: 0, x:'100%', y:"100%" }}
            transition={transition1}
            className="flex imgwrap flex-end overflow-hidden items-center bg-blue-50 h-100 "
          >
            <img
              className="h-100 border-top-xl "
              alt="photogapher"
              src={heroImage}
            />
          </motion.div>
          <PlaceHolderDiv className="flex h-100"></PlaceHolderDiv>
        </WrapContainer>
        <SectionContainer className="flex invert ease-in-out flex-col-1000 padding-150 ">
          <PlaceHolderDiv2 className="flex flex-1 h-100 "></PlaceHolderDiv2>
          <DetailsWrap className="flex flex-1  h-100 ">
            <div className="flex flex-col items-center mw-300">
              <h1 className="ease-in-out">About Me</h1>
              <p className="font-sm ease-in-out">
                I am a media personality. I can do alot of stuff that concern
                media and related. Most importantly I'm a
                <span> Photogragher and Film Maker. </span>
                <br />
                <br />I take pictures, direct Production, make films and
                essentially create all types of digital content for your brand.
                The focal point of all these is current and up to date digital
                marketting for customer satisfaction with product credibility
                notwithstanding.
              </p>
              <span className=" ">
                {" "}
                <Link to="/contact" className="btn-h mt-5 mr-5 ease-in-out">
                  HIRE ME
                </Link>
                <Link to="/portfolio" className="btn-h mt-5 ease-in-out">
                  PORTFOLIO
                </Link>
              </span>
            </div>
          </DetailsWrap>
        </SectionContainer>
      </Container>
    </Wrap>
  );
};

export default About;
