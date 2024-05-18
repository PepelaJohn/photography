import React from "react";
import styled from "styled-components";
import { CgPaypal } from "react-icons/cg";
import { CgPatreon } from "react-icons/cg";
import { ImAmazon } from "react-icons/im";
import { MdCardGiftcard } from "react-icons/md";
import { ImGift } from "react-icons/im";
import { MdCopyright } from "react-icons/md";
import { Wrap } from "../components/Styled";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <Wrap className="wrapper flex-col flex align-center w-100 ">
      <PlaceHolderDiv className="flex bg-purple-50 w-100">
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={transition1}
          className="flex  items-center space-between flex-col padding-150 w-100"
        >
          <div className="flex flex-col items-center w-100">
            <h1 className="h1">Partner with me</h1>
            <p>These are some of the ways to support me.</p>
            <ul className="flex flex-col items-center affil">
              <li>
                <a
                  className="blue hover:underline capitalize  flex items-center align-center"
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>PAYPAL</span> <CgPaypal></CgPaypal>
                </a>
              </li>
              <li>
                <a
                  className="blue hover:underline flex items-center align-center"
                  href="https://www.patreon.com/mastermedia"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>PATREON </span> <CgPatreon />{" "}
                </a>
              </li>
              <li>
                <a
                  className="blue hover:underline flex items-center align-center"
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>AMAZON AFFILIATE </span> <ImAmazon></ImAmazon>{" "}
                </a>
              </li>
              <li>
                <a
                  className="blue hover:underline flex items-center align-center"
                  href="https://www.daraja.com/api/0798015559"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>M-PESA </span>
                  <ImGift></ImGift>
                </a>
              </li>
              <li>
                <a
                  className="blue hover:underline flex items-center align-center"
                  href="https://www.gmail.com/compose"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>GIFT CARD </span>
                  <MdCardGiftcard></MdCardGiftcard>
                </a>
              </li>
            </ul>
            <p>
              We are curently working on more methods to be able to patronize
              us. <br />
            </p>

            <p>Stay tuned</p>
          </div>
          <div className="copyright flex items-center">
            <p>
              <MdCopyright></MdCopyright> Copyright - Pepela John
            </p>
          </div>
        </motion.div>
      </PlaceHolderDiv>
    </Wrap>
  );
};

export default Contact;
export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const PlaceHolderDiv = styled.div`
  flex: 1;

  h1 {
    font-size: 60px;
  }
  p {
    font-size: 18px;
    text-align: center;
  }
  a {
    font-size: 15px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 550px) {
    p {
      font-size: 15px;
    }
    a {
      font-size: 13px;
    }
    .copyright p {
      font-size: 10px !important;
    }
  }
`;
