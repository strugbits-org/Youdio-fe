import React, { useEffect, useMemo } from "react";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import {
  Heading2,
  Heading3,
} from "src/screens/user/Dashboard/Components/Heading";
import { P2, H3, Loader } from "src/components";
import { Description } from "./MembershipScreenComponent";
import { useSelector } from "react-redux";
import useGetAPI from "src/features/hooks/useGetAPI";
import { Link } from "react-router-dom";
const Membership = () => {
  const { user } = useSelector((state) => state.user);
  const { getData, getRes, getLoading } = useGetAPI();

  useEffect(() => {
    isPlanPurchased && getData(`subscriptionPlan/${isPlanPurchased.plan}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check User have plan or not
  const isPlanPurchased = useMemo(() => {
    if (user?.subscription?.isActive) {
      return user.subscription;
    }
    return false;
  }, [user]);

  const currentPlan = useMemo(() => {
    if (getRes && getRes?.subscriptionPlan) {
      return getRes.subscriptionPlan;
    }
    return false;
  }, [getRes]);
  return (
    <div>
      {getLoading && <Loader />}
      {isPlanPurchased && currentPlan ? (
        <React.Fragment>
          <Heading2>{currentPlan.name}</Heading2>
          <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
            {currentPlan.description.map((text) => text).join()}
          </P2>
          <HorizontalLine2 />
          <Description>
            <div className="sub-heading">
              <div className="small-box">
                <Heading3>{currentPlan.type}</Heading3>
                <H3>
                  {`$${currentPlan.price}/`}
                  <span>{currentPlan.type}</span>
                </H3>
              </div>
            </div>

            <P2 className="lorem_text">
              {currentPlan.description.map((text) => text).join()}
            </P2>
          </Description>
        </React.Fragment>
      ) : (
        !isPlanPurchased && (
          <React.Fragment>
            <Heading2>No Plan</Heading2>
            <P2 style={{ color: "#999999", paddingBottom: "50px" }}>
              Currently you have not purchase any plan, click here for more
              details.{" "}
              <Link
                style={{ textDecoration: "underline" }}
                to={"https://www.google.com"}
                target="_blank"
              >
                Subsciption Plans
              </Link>
            </P2>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Membership;
