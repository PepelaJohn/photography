import React, { useContext } from "react";
import styled from "styled-components";
import logoImage from "../img/header/logoimage.png";
import { Link } from "react-router-dom";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Cursorcontext } from "../context/CursorContext";
const NavigationBar = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(Cursorcontext);
  const pathnames = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },

    {
      id: 1,
      name: "About",
      path: "/about",
    },
    {
      id: 2,
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "Sponsor",
      path: "/sponsor",
    },
  ];
  const location = useLocation();

  const [openSide, setOpenSide] = React.useState("false");
  const flipMenu = () => {
    setOpenSide(openSide === "false" ? "true" : "false");
  };

  React.useEffect(() => {
    // console.log(document.title);
    document.title =
      location.pathname === "/"
        ? "Master Media".toLocaleUpperCase()
        : "Master Media - ".toUpperCase() +
          location.pathname.slice(1).toUpperCase();
  });
  return (
    <NavBar className="bg-blue-50 padding-150 nav">
      <NavBarContentWrapper className=" flex items-center">
        <Link to="/">
          <img
            onMouseEnter={() => {
              mouseEnterHandler();
            }}
            onMouseLeave={() => {
              mouseLeaveHandler();
            }}
            src={logoImage}
            className="logoImage ease-in-out"
            alt="logo"
          ></img>
        </Link>
        <PageLinkWrapper className="hidden xl:flex items-center">
          <PagesWrapper
            onMouseEnter={() => {
              mouseEnterHandler();
            }}
            onMouseLeave={() => {
              mouseLeaveHandler();
            }}
            className="flex items-center pages ease-in-out"
          >
            {pathnames.map((element) => {
              return (
                <li
                  key={element.id}
                  className={` mw-100 ${
                    location.pathname === element.path
                      ? "font-semibold"
                      : "inherit"
                  }`}
                >
                  <Link className="ease-in-out" to={element.path}>
                    {element.name}
                  </Link>
                </li>
              );
            })}
          </PagesWrapper>
          <LinksWrapper
            onMouseEnter={() => {
              mouseEnterHandler();
            }}
            onMouseLeave={() => {
              mouseLeaveHandler();
            }}
            className="flex items-center h-100"
          >
            <li>
              <a
                className="flex items-center h-100 ml-5"
                href="https://www.facebook.com/masterphotography"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a
                className="flex items-center h-100 ml-5"
                href="https://www.instagram.com/masterphotography"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a
                className="flex items-center h-100 ml-5"
                href="https://www.twitter.com/masterphotography"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoTwitter />
              </a>
            </li>
          </LinksWrapper>
        </PageLinkWrapper>
        {openSide === "false" && (
          <ToggleDiv
            onClick={flipMenu}
            className="items-center xl:hidden flex ease-in-out "
          >
            <CgMenuRight></CgMenuRight>
          </ToggleDiv>
        )}
      </NavBarContentWrapper>
      <AsideBar
        toggle={openSide}
        className="flex xl:hidden flex-col shadow items-center ease-in-out"
      >
        {openSide === "true" && (
          <ToggleClose onClick={flipMenu} className="flex items-center">
            <IoMdClose />
          </ToggleClose>
        )}
        <PagesWrapper1 className="flex flex-col items-center">
          {pathnames.map((element) => {
            return (
              <li
                key={element.id}
                onClick={flipMenu}
                className="mb-5 font-bold"
              >
                <Link className="ease-in-out" to={element.path}>
                  {element.name}
                </Link>
              </li>
            );
          })}
        </PagesWrapper1>
      </AsideBar>
    </NavBar>
  );
};

export default NavigationBar;

const NavBar = styled.nav`
  position: fixed;
  /* width: 100%; */
  height: 120px;
  z-index: 100;
  display: grid;
  align-content: center;
  top: 0;
  left: 0;
  right: 0;
  transition: all ease-in-out 0.2s;
`;

const NavBarContentWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;
const PageLinkWrapper = styled.div`
  /* background-color: yellow; */
  justify-content: flex-end;
  max-width: 100%;
`;
const LinksWrapper = styled.ul`
  /* display: flex; */
  height: 100%;

  font-size: 20px;
  color: black;
`;
const PagesWrapper = styled.ul`
  /* display: flex; */
`;
const ToggleDiv = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
const AsideBar = styled.aside`
  position: absolute;
  top: 0;
  right: ${($prop) => ($prop?.toggle === "true" ? "0px" : "-700px")};

  height: 100vh;
  background-color: white;

  min-width: 300px;
  align-items: center;
`;
const PagesWrapper1 = styled.div`
  display: flex;
  height: calc(100% - 120px);
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ToggleClose = styled.div`
  height: 120px;
  font-size: 25px;
  cursor: pointer;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;
