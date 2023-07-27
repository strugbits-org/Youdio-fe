import React from "react";
import styled from "styled-components";
import { icons } from "src/helpers";
import { H3 } from "src/components";
import { layout } from "src/helpers";
import { ClockTime, H6, P2, InstructorLink } from "src/components";
import moment from "moment";
import { Link } from "react-router-dom";
const { mobileLarge, laptop, desktop } = layout;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 5vw;
  /* max-width: 435px; */
  filter: ${({ disabled }) => (disabled ? "grayscale(0.5)" : "initial")};
  color: ${({ disabled }) =>
    disabled ? "var(--textParaGrey) !important" : "initial"};
  margin-inline: auto;
  @media only screen and (min-width: ${mobileLarge}) {
    margin-inline: initial;
    /* max-width: 1517px; */
    flex-direction: row;
    align-items: center;
  }

  @media only screen and (min-width: ${desktop}) {
    gap: 100px;
  }
`;
const MediaBox = styled.div`
  position: relative;
  img {
    width: 100%;
    min-width: 147px;
    max-width: 217px;
    aspect-ratio: 0.75/1;
    object-fit: cover;
    border-radius: 3px;
  }
  .overlay {
    aspect-ratio: 0.75/1;
    width: 100%;
    min-width: 147px;
    max-width: 217px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    left: 0;
    position: absolute;
    top: 0;
  }

  .videoCamera {
    width: clamp(28px, 1.6vw, 32px);
    aspect-ratio: 1/1;
    border: 2px solid #fff;
    border-radius: 100%;
    min-width: initial;
    background: #fff;
    position: absolute;
    object-position: center;
    top: 16px;
    left: 16px;
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  h2 {
    &:first-child {
      margin-bottom: 8px;
    }
  }
  .cardP {
    font-size: 12px;
    color: var(--backgroundGrey);
    margin-bottom: 18px;
    .bold {
      font-weight: 700;
    }
  }
  .lastP {
    max-width: 324px;
    font-size: 12px;
  }

  .sessionDetail {
    display: flex;
    /* justify-content: space-between; */
    gap: 16px;
    max-width: 424px;
    margin-bottom: 24px;
    flex-wrap: wrap;

    .detail {
      h6 {
        &:first-child {
          margin-bottom: 6px;
        }
      }
    }
    .date {
      div {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }

  @media only screen and (min-width: ${mobileLarge}) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 16px;
    .lastP {
      max-width: 424px;
      font-size: 12px;
    }
    .sessionDetail {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      max-width: 574px;
      margin-bottom: 1.6vw;
    }
  }
  @media only screen and (min-width: ${laptop}) {
    gap: 24px;
    .cardP {
      margin-bottom: 24px;
    }
  }
`;

export const CustomPrimaryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  transition: var(--transition03s);
  border-radius: 0px;
  width: 110px;
  font-size: 12px;
  min-height: 30px;
  background: var(--borderLightGrey);
  color: var(--textHeadingBlack);
  margin-block: auto 5%;
  &:hover {
    color: var(--textHeadingWhite);
    transition: var(--transition03s);
    background: var(--backgroundGreenHover);
  }
  &:disabled {
    color: var(--textParaGrey);
    background: var(--borderLightGrey);
  }
`;

const CustomH6 = styled(H6)`
  font-size: clamp(9px, 0.6vw, 12px);
`;

const LiveBookingCard = ({
  bookedSession,
  disabled,
  handleCancel,
  sessionId,
}) => {
  return (
    <Card disabled={disabled}>
      <MediaBox>
        <img
          src={bookedSession.thumbnail}
          alt="Trainer"
          width=""
          height=""
          title="Join Zoom Link"
        />
        <div className="overlay"></div>
        {bookedSession?.zoomLink && (
          <Link to={bookedSession.zoomLink} target="_blank">
            <img
              className="videoCamera"
              src={icons.videoCamera}
              alt="Camera"
              width=""
              height=""
            />
          </Link>
        )}
      </MediaBox>
      <ContentBox>
        <div>
          <H3>{bookedSession.title}</H3>
          <P2 className="cardP">
            by{" "}
            <span className="bold">{`${bookedSession.trainer?.firstName} ${bookedSession.trainer?.lastName}`}</span>
          </P2>
          <div className="sessionDetail">
            <div className="totalRunTme detail">
              <CustomH6>TOTAL RUN TIME</CustomH6>
              <ClockTime
                time={`${bookedSession.totalTime} min`}
                align={"left"}
                fontSize={"clamp(11px, 0.7vw, 14px)"}
              />
            </div>
            <div className="date detail">
              <CustomH6>DATE</CustomH6>
              <ClockTime
                time={
                  bookedSession.date &&
                  moment(bookedSession.date).format("MM-DD-YYYY")
                }
                align={"left"}
                fontSize={"clamp(11px, 0.7vw, 14px)"}
                icon={icons.calendarImg}
              />
            </div>
            <div className="intensity detail">
              <CustomH6>Booking Time</CustomH6>
              <ClockTime
                time={`${bookedSession.time} min`}
                align={"left"}
                fontSize={"clamp(11px, 0.7vw, 14px)"}
              />
            </div>
          </div>
          <InstructorLink
            imageSrc={bookedSession.trainer?.image}
            title={`${bookedSession.trainer?.firstName} ${bookedSession.trainer?.lastName}`}
            imgWidth={"26px"}
            fontSize={"14px"}
          />
          <P2 className="cardP lastP">{bookedSession.description}</P2>
        </div>
        <CustomPrimaryButton
          onClick={() => handleCancel(sessionId)}
          disabled={disabled}
        >
          Cancel
        </CustomPrimaryButton>
      </ContentBox>
    </Card>
  );
};

export default LiveBookingCard;
