import React, { useEffect, useMemo, useState } from "react";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import {
  Heading2,
  Heading3,
} from "src/screens/user/Dashboard/Components/Heading";
import { P2, H3, PrimaryButton } from "src/components";
import { Container, Description } from "./MembershipScreenComponent";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { externalLinks } from "src/helpers/constant";
import { DeletePopup } from "src/components/Popups";
import { icons } from "src/helpers";
import useGetAPI from "src/features/hooks/useGetAPI";
import { setUser } from "src/features/userSlice";

const Membership = () => {
  const [open, setOpen] = useState(false)
  const { user } = useSelector((state) => state.user);
  const { getData, getLoading, getError } = useGetAPI();

  const handleCancelSubscription = () => { 
    setOpen(true)
  }
  const handleClose = () => { 
    setOpen(!open)
  }
  const handleAction = () => {
    getData("/subscription/cancel", setUser, () => handleClose(!open));
  }

  useEffect(() => { 
    getError && setOpen(false)
  }, [getError])
  const currentPlan = useMemo(() => {
    if (user && user?.subscription?.plan?._id && user?.subscription?.isActive) {
      return user.subscription.plan;
    }
    return false;
  }, [user]);
  return (
    <Container>
      {currentPlan ? (
        <React.Fragment>
          <div className="buttonBox">
            <PrimaryButton onClick={handleCancelSubscription}>
              Cancel Subscription
            </PrimaryButton>
          </div>
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
      <DeletePopup
        open={open}
        handleClose={handleClose}
        data={{
          heading: "Do wish to cancel",
          text: "Are you sure want to cancel your subscription?",
          icon: icons.warningGreen,
        }}
        handleAction={handleAction}
        loading={getLoading}
    />
    </Container>
  );
};

export default Membership;
