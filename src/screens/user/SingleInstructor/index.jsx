import React from "react";
import { ImgCard,InstructorText } from "./singleInstructorStyle";
import { icons } from "src/helpers";
import { H1, P1, H2 } from "src/components";
import { SingleinstClassStaticContent } from "./constant";

const backgroundImg = icons.singBgInstructor;

function SingleInstructor() {
  return (
    <React.Fragment>
      {/* <ImgCard>
        <img src={icons.singBgInstructor} alt="" width="100%" height="auto" />
        <ImgSection backgroundColor="#fff">
          <H1M>{SingleinstClassStaticContent.singleInstructorH1}</H1M>
          <P1M>{SingleinstClassStaticContent.singleInstructorP1}</P1M>
        </ImgSection>
      </ImgCard> */}

      <ImgCard
        style={{
          backgroundImage: `url(${backgroundImg})`,
          height: "auto",
          width: "100%",

        }}
      >
        <section backgroundColor="#fff" className="section">
          <H1 style={{ color: "#fff" }}>
            {SingleinstClassStaticContent.singleInstructorH1}
          </H1>
          <P1 style={{ color: "#fff" }}>
            {SingleinstClassStaticContent.singleInstructorP1}
          </P1>

          {/* <SingleImage>
            <img src={icons.singleInstructorImg} alt="" />
          </SingleImage> */}
        </section>
      </ImgCard>

      <InstructorText>
        <H2 className="h2">{SingleinstClassStaticContent.singleInstructorH2}</H2>
        <P1 className="p1">{SingleinstClassStaticContent.singleInstructorPara1}</P1>
        <P1 className="p2">{SingleinstClassStaticContent.singleInstructorPara2}</P1>
      </InstructorText>


    </React.Fragment>
  );
}

export default SingleInstructor;
