import React, { useMemo } from "react";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import {
  Heading2,
  Heading3,
} from "src/screens/user/Dashboard/Components/Heading";
import { P2, H3 } from "src/components";
import { Description } from "./MembershipScreenComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { externalLinks } from "src/helpers/constant";
const Membership = () => {
  const { user } = useSelector((state) => state.user);

  const currentPlan = useMemo(() => {
    if (user && user?.subscription?.plan?._id && user?.subscription?.isActive) {
      return user.subscription.plan;
    }
    return false;
  }, [user]);
  return (
    <div>
      {currentPlan ? (
        <React.Fragment>
          <Heading2>{currentPlan?.name}</Heading2>
          <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
            {currentPlan?.description.map((text) => text).join()}
          </P2>
          <HorizontalLine2 />
          <Description>
            <div className="sub-heading">
              <div className="small-box">
                <Heading3>{currentPlan?.type}</Heading3>
                <H3>
                  {`$${currentPlan?.price}/`}
                  <span>{currentPlan?.type}</span>
                </H3>
              </div>
            </div>

            <P2 className="lorem_text">
              {currentPlan?.description.map((text) => text).join()}
            </P2>
          </Description>
        </React.Fragment>
      ) : (
        !currentPlan && (
          <React.Fragment>
            <Heading2>No Plan</Heading2>
            <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
              Currently you have not purchase any plan, click here{" "}
              <Link
                style={{ textDecoration: "underline", fontWeight: "bold" }}
                to={externalLinks.subscriptionPlan.url}
                target="_blank"
              >
                Subsciption Plans
              </Link>{" "}
              for more details.
            </P2>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Membership;
