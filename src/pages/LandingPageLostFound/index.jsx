import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const LandingPageLostFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_landingpagelost.png')" }}
      >
        <div className="bg-gray-800_33 flex flex-col items-center justify-start m-auto pb-[253px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <header className="bg-black-900_19 flex md:flex-col md:gap-10 gap-[200px] h-20 md:h-auto items-center justify-center p-2.5 md:px-5 shadow-bs1 w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[29%] md:w-full">
                <Img
                  className="h-20 md:h-auto object-cover w-[82%]"
                  src="images/img_napexcommunications.png"
                  alt="napexcommunicat"
                />
              </div>
              <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
                <div className="flex flex-col items-center justify-center w-[150px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Home
                  </Text>
                </div>
                <Button
                  className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[150px]"
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
            <div className="bg-white-A700_7f flex flex-col h-[200px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full">
              <div className="flex flex-col h-[100px] md:h-auto items-center justify-center max-w-[1440px] w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-shadow-ts1 text-white-A700 w-auto"
                  size="txtInterSemiBold48"
                >
                  AD Space
                </Text>
              </div>
            </div>
            <div className="bg-black-900_19 flex flex-row items-center justify-center max-w-[1440px] p-2.5 shadow-bs1 w-full">
              <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start md:px-5 w-[88%]">
                <div className="flex flex-col items-center justify-center w-[200px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Lost & Found
                  </Text>
                </div>
                <Button
                  className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[400px]"
                  onClick={() =>
                    navigate("/landingpagedeathfuneralannouncements")
                  }
                  shape="square"
                >
                  Death & Funeral Announcements
                </Button>
                <Button
                  className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[200px]"
                  onClick={() => navigate("/landingpageanniversaries")}
                  shape="square"
                >
                  Anniversaries
                </Button>
                <Button
                  className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[200px]"
                  onClick={() => navigate("/landingpageservices")}
                  shape="square"
                >
                  Services
                </Button>
                <div className="flex flex-col items-center justify-center w-[200px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Search
                  </Text>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1400px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Item Description
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Details
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Contact Information
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_335x335.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Person Description
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Details
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Contact Information
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_1.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Document Description
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Details
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Contact Information
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_2.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Vehicle Description
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Details
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Contact Information
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end ml-5 mt-[-204px] md:px-5 w-[24%] z-[1]">
          <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
            <Img
              className="h-[335px] md:h-auto object-cover w-[335px]"
              src="images/img_rectangle2_3.png"
              alt="rectangleTwo"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Item Description
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Details
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Contact Information
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end ml-[375px] mt-[-204px] md:px-5 w-[24%] z-[1]">
          <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
            <Img
              className="h-[335px] md:h-auto object-cover w-[335px]"
              src="images/img_rectangle2_4.png"
              alt="rectangleTwo_One"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Person Description
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Details
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Contact Information
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end ml-auto mr-[375px] mt-[-204px] md:px-5 w-[24%] z-[1]">
          <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
            <Img
              className="h-[335px] md:h-auto object-cover w-[335px]"
              src="images/img_rectangle2_5.png"
              alt="rectangleTwo_Two"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Document Description
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Details
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Contact Information
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end ml-auto mr-5 mt-[-204px] md:px-5 w-[24%] z-[1]">
          <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
            <Img
              className="h-[335px] md:h-auto object-cover w-[335px]"
              src="images/img_rectangle2_6.png"
              alt="rectangleTwo_Three"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Vehicle Description
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Details
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Contact Information
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageLostFoundPage;
