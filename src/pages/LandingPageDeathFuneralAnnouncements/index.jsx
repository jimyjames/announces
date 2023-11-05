import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const LandingPageDeathFuneralAnnouncementsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[39px] items-center justify-end w-full">
          <div className="sm:h-[1024px] md:h-[1069px] h-[1239px] md:px-5 relative w-full">
            <div className="absolute h-[1024px] md:h-[1069px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[1024px] m-auto object-cover w-full"
                src="images/img_landingpagelost.png"
                alt="pexelsandreadav"
              />
              <div className="absolute bg-gray-800_33 flex flex-col h-full inset-[0] items-start justify-center m-auto pb-[253px] w-full">
                <Header className="bg-black-900_19 flex md:flex-col md:gap-10 gap-[200px] h-20 md:h-auto items-center justify-center p-2.5 shadow-bs1 w-full" />
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
                  <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-[88%]">
                    <Button
                      className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[200px]"
                      onClick={() => navigate("/")}
                      shape="square"
                    >
                      Lost & Found
                    </Button>
                    <div className="flex flex-col items-center justify-center w-[400px] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                        size="txtInterSemiBold24"
                      >
                        Death & Funeral Announcements
                      </Text>
                    </div>
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
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[730px] w-[48%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[335px] md:h-auto object-cover w-full"
                      src="images/img_rectangle2_335x690.png"
                      alt="rectangleTwo"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-center max-w-[690px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Jane Doe
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
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[1%] w-[48%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  className="h-[803px] md:h-auto object-cover w-full"
                  src="images/img_rectangle2_803x690.png"
                  alt="rectangleTwo_One"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center max-w-[690px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  John Doe
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
                  Tributes
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[26%] w-[24%]">
              <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                <Img
                  className="h-[335px] md:h-auto object-cover w-[335px]"
                  src="images/img_rectangle2_7.png"
                  alt="rectangleTwo_Two"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  John Doe
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
                  Tributes
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[1%] w-[24%]">
              <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                <Img
                  className="h-[335px] md:h-auto object-cover w-[335px]"
                  src="images/img_rectangle2_8.png"
                  alt="rectangleTwo_Three"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  Jane Doe
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
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1400px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                <Img
                  className="h-[335px] md:h-auto object-cover w-[335px]"
                  src="images/img_rectangle2_9.png"
                  alt="rectangleTwo"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  John Doe
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
                  Tributes
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                <Img
                  className="h-[335px] md:h-auto object-cover w-[335px]"
                  src="images/img_rectangle2_10.png"
                  alt="rectangleTwo"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  Jane Doe
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
            <div
              className="bg-cover bg-no-repeat flex flex-1 flex-col h-[442px] items-center justify-start w-full"
              style={{
                backgroundImage: "url('images/img_johndoedetails.png')",
              }}
            >
              <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                <Img
                  className="h-[335px] md:h-auto object-cover w-[335px]"
                  src="images/img_rectangle2_11.png"
                  alt="rectangleTwo"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  John Doe
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
                  Tributes
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                <Img
                  className="h-[335px] md:h-auto object-cover w-[335px]"
                  src="images/img_rectangle2_12.png"
                  alt="rectangleTwo"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                <Text
                  className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                  size="txtInterSemiBold24"
                >
                  Jane Doe
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
    </>
  );
};

export default LandingPageDeathFuneralAnnouncementsPage;
