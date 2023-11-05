import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-start justify-start w-[29%] md:w-full">
          <Img
            className="h-20 md:h-auto object-cover w-[82%]"
            src="images/img_napexcommunications.png"
            alt="napexcommunicat"
          />
        </div>
        <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
          <Button
            className="common-pointer !text-white-A700 cursor-pointer font-inter font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[150px]"
            onClick={() => navigate("/")}
            shape="square"
          >
            Home
          </Button>
          <Button
            className="common-pointer !text-white-A700 cursor-pointer font-inter font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[150px]"
            onClick={() => navigate("/landingpageaboutus")}
            shape="square"
          >
            About Us
          </Button>
          <List
            className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 grid-cols-3 w-3/5 md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-col items-center justify-center w-[150px]">
              <Text
                className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                size="txtInterSemiBold24"
              >
                Services
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px]">
              <Text
                className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                size="txtInterSemiBold24"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-[150px]">
              <Text
                className="text-2xl md:text-[22px] text-shadow-ts text-white-A700_7f sm:text-xl w-auto"
                size="txtInterSemiBold24WhiteA7007f"
              >
                Search
              </Text>
            </div>
          </List>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
