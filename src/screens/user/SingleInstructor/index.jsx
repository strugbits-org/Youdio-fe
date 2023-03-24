import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  SingleImage,
  CardsBox,
  Sec,
  TextSec,
  TwoCardsBox,
  ReviewCards,
  CenterButton,
  StyledDiv,
} from "./singleInstructorStyle";
import { icons } from "src/helpers";
import { H1, P1, H2, Section, H4 } from "src/components";
import { SingleinstClassStaticContent } from "./constant";
import {
  SingleInstructorCard,
  TwoCardInstructor,
} from "src/components/Cards/SingleInstructorCard";
import { ReviewCard } from "src/components/Cards";
import { IconButton, PrimaryButton, PrimaryWhiteButton } from "src/components";

function SingleInstructor() {
  // single id data fetch function
  // const [user, setUser] = useState([]);

  // const { id } = useParams();
  // console.log(id, "userid");

  // const getUser = async () => {
  //   const response = await fetch(`---/${id}`).catch((err) => {
  //     console.log("Err", err);
  //   });
  //   setUser(await response.json());
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <React.Fragment>
      <Sec backgroundImage={icons.singBgInstructor} paddingBlock="15.2vw">
        <H1>{SingleinstClassStaticContent.singleInstructorH1}</H1>
        <P1>{SingleinstClassStaticContent.singleInstructorP1}</P1>
      </Sec>
      <SingleImage>
        <img src={icons.singleInstructorImg} alt="" />
      </SingleImage>

      <TextSec backgroundColor="#fff">
        <H2 className="h2">
          {SingleinstClassStaticContent.singleInstructorH2}
        </H2>
        <P1 className="p1">
          {SingleinstClassStaticContent.singleInstructorPara1}
        </P1>
        <P1 className="p2">
          {SingleinstClassStaticContent.singleInstructorPara2}
        </P1>
      </TextSec>

      <StyledDiv />

      {/* Single-Instructor Cards Section */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>
          {SingleinstClassStaticContent.singleInstructorCardH2}
        </H2>
        <CardsBox>
          {[...Array(6).keys()].map((val) => (
            <SingleInstructorCard key={`card-${val}`} />
          ))}
        </CardsBox>
      </Section>

      {/* Horizontal Line */}
      <StyledDiv />

      {/* Two Card Section */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>
          {SingleinstClassStaticContent.TwoInstructorCardH2}
        </H2>
        <TwoCardsBox>
          {[...Array(2).keys()].map((val) => (
            <TwoCardInstructor key={`card-${val}`} />
          ))}
        </TwoCardsBox>
      </Section>

      {/* Horizontal Line */}
      <StyledDiv />

      {/* Review-Card */}
      <Section backgroundColor="#fff">
        <H2 style={{ textAlign: "center" }}>
          {SingleinstClassStaticContent.ReviewH2}
        </H2>
        <ReviewCards>
          {[...Array(6).keys()].map((val) => (
            <ReviewCard key={`card-${val}`} />
          ))}
        </ReviewCards>
      </Section>

      {/* Button issue => not come in center take full width  */}

      {/* <CenterButton>{SingleinstClassStaticContent.ButtonH4}</CenterButton> */}
    </React.Fragment>
  );
}

export default SingleInstructor;
