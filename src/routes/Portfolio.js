import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { Wrap } from "../components/Styled";
import { Container } from "../components/Styled";
import { SectionContainer } from "../components/Styled";
import { DetailsWrap } from "../components/Styled";
import { PlaceHolderDiv2 } from "../components/Styled";
import Private from "../img/portfolio/1.png";
import Corporate from "../img/portfolio/2.png";
import Event from "../img/portfolio/3.png";
import FilmMaking from "../img/portfolio/4.png";
import styled from "styled-components";
const Portfolio = () => {
  const images = [
    { path: Private, name: "Private Shoot" },
    { path: Corporate, name: "Corporate" },
    { path: Event, name: "Events" },
    { path: FilmMaking, name: "Film Making" },
  ];
  return (
    <Wrap className="wrapper pt-3">
      <Container className="relative">
        <SectionContainer className="flex flex-col-1000 padding-150 ">
          <DetailsWrap className="flex items-center h-100 ">
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={transition1}
              className="flex flex-col align-center items-center mw-300"
            >
              <h1 className="">MY WORK</h1>
              <p className="font-sm">
                <Link to="/portfolio" className="blue">
                  Photogaphy
                </Link>{" "}
                is for corporate events. They say class attracts class. I offer
                the best packages of photography - the best quality there is at
                a good price range i.e not too much price and still not a
                mediocre price - always a sign for mediocre work that you wont
                complain because of the price.
                <br />
                <br />
                <Link to="/portfolio" className="blue">
                  Film making{" "}
                </Link>
                is my other speciality. I have overseen the production of many
                of the famous films in kenya and beyond. The most famous one is
                Click Click Bang.
                <br />
                <br />
              </p>
              <div className="flex flex-col items-center">
                <Link
                  to="/portfolio"
                  className="flex items-center align-center blue  ease-in-out"
                >
                  There is more!!
                </Link>
                <Link to="/contact" className="btn-h flex items-center mt-2  ease-in-out">
                  HIRE ME
                </Link>
              </div>
            </motion.div>
          </DetailsWrap>
          <PlaceHolderDiv2 className="flex  items-center h-100 ">
            <div className="image-container overflow-hidden ">
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="image-div gap-2 overflow-hidden relative cursor-pointer relative"
                  >
                    <img src={image.path} alt="" />
                    <ImageDetails className="flex items-center align-center bg-black-200 ease-in-out">
                      {image.name}
                    </ImageDetails>
                  </div>
                );
              })}
            </div>
          </PlaceHolderDiv2>
        </SectionContainer>
      </Container>
    </Wrap>
  );
};

export default Portfolio;
const ImageDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: black; */
`;
