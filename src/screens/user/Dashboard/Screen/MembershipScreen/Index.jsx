import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import {
  Heading2,
  Heading3,
} from "src/screens/user/Dashboard/Components/Heading";
import { P2, H3 } from "src/components";
import { Description, Box } from "./MembershipScreenComponent";
import { membershipScreenStaticContent as content } from "./Constant";
import React, { useState } from "react";
const Membership = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <Heading2>{content.yourPlan}</Heading2>
      <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
        {content.lorem}
      </P2>
      <HorizontalLine2 />
      <Description>
        <div className="sub-heading">
          <div className="small-box">
            <Heading3> {content.monthly}</Heading3>
            <H3>
              {content.price}
              <span>{content.month}</span>
            </H3>
          </div>
        </div>

        <P2 className="lorem_text">{content.lorem}</P2>
      </Description>
      <HorizontalLine2 />

      <Description>
        <div className="sub-heading">
          <div>
            <Heading3> {content.annually}</Heading3>
            <H3>
              {content.price}
              <span>{content.montBilledAnnually}</span>
            </H3>
          </div>
        </div>

        <P2 className="lorem_text">{content.lorem}</P2>
      </Description>
      <HorizontalLine2 />
      <Box>
        <input
          type="radio"
          name="yourPlanOption"
          id="yourPlanOption"
          value={selectedOption}
          onChange={handleOptionChange}
        />
        <label htmlFor="yourPlanOption">{content.lorem}</label>
      </Box>
    </div>
  );
};

export default Membership;
