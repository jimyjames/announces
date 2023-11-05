import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const LandingPageServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_landingpagelost.png')" }}
      >
        <div className="bg-gray-800_33 flex flex-col items-center justify-start m-auto pb-56 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Header className="bg-black-900_19 flex md:flex-col md:gap-10 gap-[200px] h-20 md:h-auto items-center justify-center p-2.5 md:px-5 shadow-bs1 w-full" />
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
                <Button
                  className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[200px]"
                  onClick={() => navigate("/")}
                  shape="square"
                >
                  Lost & Found
                </Button>
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
                <List
                  className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 grid-cols-2 w-[34%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-center w-[200px]">
                    <Text
                      className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Services
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[200px]">
                    <Text
                      className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                      size="txtInterSemiBold24"
                    >
                      Search
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1402px] mx-auto md:px-5 w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start mb-[29px] sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_17.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Design Services
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
                    Design Description
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start mb-[29px] sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_18.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Hearse Services
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
                    Hearse Description
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start mb-[29px] sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_19.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Coffins
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
                    Coffin Information
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
                  <Img
                    className="h-[335px] md:h-auto object-cover w-[335px]"
                    src="images/img_rectangle2_20.png"
                    alt="rectangleTwo"
                  />
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-center w-[337px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Flowers & Bouquets Services
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    Details
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl"
                    size="txtInterSemiBold24"
                  >
                    <>
                      Flowers & Bouquets <br />
                      Information
                    </>
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
              src="images/img_rectangle2_21.png"
              alt="rectangleTwo"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              P.A. & Sound Systems
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Details
            </Text>
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl"
              size="txtInterSemiBold24"
            >
              <>
                P.A. & Sound Systems
                <br />
                Description
              </>
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end ml-[375px] mt-[-204px] md:px-5 w-[24%] z-[1]">
          <div className="flex flex-col h-[335px] items-center justify-start w-[335px]">
            <Img
              className="h-[335px] md:h-auto object-cover w-[335px]"
              src="images/img_rectangle2_22.png"
              alt="rectangleTwo_One"
            />
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-center w-[335px]">
            <Text
              className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
              size="txtInterSemiBold24"
            >
              Tents Description
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
              Tents Description
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageServicesPage;
