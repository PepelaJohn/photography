import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="wrap flex-col wrap-section flex align-center w-100 "
    >
      <ImgWrap></ImgWrap>
      <PlaceHolderDiv className="flex bg-blue-50 w-100">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={transition1}
          className="flex padding-150 w-100"
        >
          <div className=" flex flex-col flex-1-i flex-col-end w-100 ">
            <form className="form items-center w-100 flex flex-col ">
              <h1 className="h1">Reach me</h1>
              <div className="form-inputs w-100 flex   flex-col items-center">
                <div className="name-email flex gap-5 w-100">
                  <FormInput
                    type="text"
                    className="border-bottom"
                    placeholder="John Doe"
                  />
                  <FormInput
                    type="email"
                    className="border-bottom"
                    placeholder="abc@email.com"
                  />
                </div>
                <input
                  type="text"
                  className="message w-100 mt-10 border-bottom"
                  placeholder="Your message...."
                />
                <button className="btn-h ease-in-out cursor-pointer mt-5">
                  SEND
                </button>
              </div>
            </form>
          </div>
          <PlaceHolder className=""></PlaceHolder>
        </motion.div>
      </PlaceHolderDiv>
    </motion.section>
  );
};

export default Contact;
export const ImgWrap = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
`;
export const PlaceHolderDiv = styled.div`
  flex: 0.7;
  @media (max-width: 1000px) {
    /* display:none; */
    h1 {
      font-size: 40px;
    }
  }
`;
const PlaceHolder = styled.div`
  flex: 1;
  @media (max-width: 1000px) {
    display: none !important;
  }
`;
const FormInput = styled.input`
  flex: 1;
`;
