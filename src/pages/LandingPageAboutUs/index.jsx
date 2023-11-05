import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const LandingPageAboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-white-A700 flex flex-col font-inter h-[1024px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_landingpagelost.png')" }}
      >
        <div className="bg-gray-800_33 flex flex-col md:gap-10 gap-[105px] items-center justify-start pb-[185px] w-full">
          <header className="bg-black-900_19 flex md:flex-col md:gap-10 gap-[200px] h-20 md:h-auto items-center justify-center p-2.5 md:px-5 shadow-bs1 w-full">
            <div
              className="common-pointer flex md:flex-1 flex-col items-start justify-start w-[29%] md:w-full"
              onClick={() => navigate("/")}
            >
              <Img
                className="h-20 md:h-auto object-cover w-[82%]"
                src="images/img_napexcommunications.png"
                alt="napexcommunicat"
              />
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
              <Button
                className="common-pointer !text-white-A700 cursor-pointer font-semibold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[150px]"
                onClick={() => navigate("/")}
                shape="square"
              >
                Home
              </Button>
              <List
                className="sm:flex-col flex-row gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-4/5 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-center w-[150px]">
                  <Text
                    className="text-2xl md:text-[22px] text-shadow-ts text-white-A700 sm:text-xl w-auto"
                    size="txtInterSemiBold24"
                  >
                    About Us
                  </Text>
                </div>
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
          <div className="flex flex-col gap-2.5 h-[654px] md:h-auto items-start justify-start max-w-[1164px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-shadow-ts2"
                size="txtInterSemiBold48Black900"
              >
                Who We Are
              </Text>
            </div>
            <Text
              className="text-2xl md:text-[22px] text-center text-shadow-ts text-white-A700 sm:text-xl"
              size="txtInterSemiBold24"
            >
              <>
                Welcome to our heartfelt community at Napex Communications
                Services. We&#39;re here to support and connect individuals
                during some of life&#39;s most sensitive and profound moments.
                <br />
                At Napex Communications Services, we understand the emotional
                weight attached to lost and found items. Our dedicated team
                works tirelessly to reunite cherished possessions with their
                rightful owners, offering a beacon of hope in what can be a
                distressing situation. With a commitment to compassion and
                efficiency, we strive to bring closure and joy by reuniting
                people with their lost belongings.
                <br />
                In addition to our lost and found services, we also honor the
                memory of loved ones through our platform for death and funeral
                announcements, as well as commemorating the beautiful legacies
                on their anniversaries. We believe in celebrating lives, sharing
                stories, and providing a space for remembrance and healing.
                <br />
                Our mission goes beyond the practical aspects of lost items; it
                extends to providing a supportive and respectful space to
                commemorate the lives of those who have passed. Whether it&#39;s
                sharing the details of a funeral service, paying tribute on
                anniversaries, or offering a compassionate platform for
                remembrance, Napex Communications Services is a place of solace
                and connection.
                <br />
                We are honored to serve our community and be a part of these
                significant moments in your lives. Napex Communications Services
                is more than just a service - it&#39;s a caring community,
                standing by you through the highs and lows, with empathy,
                understanding, and unwavering support.
              </>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageAboutUsPage;
