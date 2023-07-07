import React from "react";
import Rating from "@mui/material/Rating";
import { P2, H3, P3 } from "src/components/Typography";
import styled from "styled-components";
import { icons } from "src/helpers";

const Card = styled.div`
  padding-inline: 30px;
  background: var(--backgroundLightGrey);
  border-radius: 7px;
  transition: var(--transition01s);
  &:hover {
    background: var(--backgroundGreenHover);
    color: #fff !important;
    box-shadow: 0px 5px 20px 7px rgba(0, 0, 0, 0.1);
    transition: var(--transition01s);
    p {
      transition: var(--transition01s);
      color: #fff !important;
    }
    img {
      transition: var(--transition01s);
      border-color: #fff;
    }
    .cardUpperRow {
      span {
        span {
          color: #fff;
          span svg path {
            color: #fff;
          }
        }
      }
    }
    .quotation {
      background: #fff;
      transition: var(--transition01s);
      svg {
        path {
          stroke: var(--backgroundGreen);
          transition: var(--transition01s);
        }
      }
    }
  }
`;

const QuotationIcon = styled.div`
  width: clamp(56px, 4vw, 81px);
  height: clamp(56px, 4vw, 81px);
  border-radius: 7px;
  padding: 14px;
  background: var(--backgroundGreen);
  transform: translateY(-50%);
  svg{
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  padding-inline: 8px;
  padding-bottom: 40px;
  .cardUpperRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    span {
      span {
        color: var(--backgroundGreen);
        border-color: var(--backgroundGreen);
        font-size: 16px;
        span svg path {
          color: var(--backgroundGreen);
        }
      }
    }
  }
  .reviewPara {
    color: var(--textParaGrey);
    margin-bottom: 16px;
  }
`;

const CustomerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: clamp(40px, 2.5vw, 61px);
    aspect-ratio: 1/1;
    border-radius: 100%;
    border: 1px solid black;
    object-fit: cover;
  }
  .detail {
  }
`;

export const ReviewCard = () => {
  return (
    <Card>
      <QuotationIcon className="quotation">
        <svg
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5388 40.4031V36.9526L29.2643 36.8105L29.2649 36.8104C32.0065 36.2719 34.115 35.1658 35.2779 33.3636L35.278 33.3636L35.2841 33.3539C35.8659 32.4287 36.197 31.3708 36.2443 30.2817L36.2888 29.2587H35.2649H29.4482C29.2016 29.2587 28.9684 29.1622 28.7991 28.9958C28.6304 28.83 28.5388 28.6087 28.5388 28.3817V15.3798C28.5388 13.8885 29.779 12.6454 31.3379 12.6454H42.6765C42.9231 12.6454 43.1563 12.7419 43.3256 12.9083C43.4943 13.0741 43.5859 13.2954 43.5859 13.5224V28.3817V28.4804L43.5935 28.5177C43.5951 28.5465 43.597 28.5888 43.5984 28.6438C43.6018 28.7698 43.6029 28.9585 43.5936 29.1984C43.5748 29.679 43.5145 30.3587 43.3502 31.1486C43.0207 32.7319 42.2812 34.7215 40.6554 36.4558C38.2485 39.0202 34.5368 40.4031 29.4482 40.4031H28.5388ZM43.5911 28.4811C43.5912 28.4817 43.5913 28.4828 43.5914 28.4844C43.5896 28.4674 43.5896 28.463 43.5911 28.4811ZM22.7853 28.3817V28.4804L22.7929 28.5179C22.7945 28.5466 22.7964 28.589 22.7979 28.6441C22.8014 28.7701 22.8025 28.9588 22.7932 29.1987C22.7746 29.6793 22.7145 30.3589 22.5502 31.1488C22.221 32.7319 21.4816 34.7214 19.855 36.4556C17.4481 39.0202 13.7363 40.4031 8.64757 40.4031H7.7382V36.9526L8.46371 36.8105L8.46426 36.8104C11.2059 36.2719 13.3144 35.1658 14.4773 33.3636L14.4774 33.3636L14.4835 33.3539C15.0653 32.4287 15.3964 31.3708 15.4437 30.2817L15.4882 29.2587H14.4643H8.64757C8.40098 29.2587 8.16783 29.1622 7.99854 28.9958C7.82982 28.83 7.7382 28.6087 7.7382 28.3817V15.3798C7.7382 13.8885 8.97835 12.6454 10.5373 12.6454H21.8759C22.1225 12.6454 22.3556 12.7419 22.5249 12.9083C22.6937 13.0741 22.7853 13.2954 22.7853 13.5224V28.3817ZM22.7906 28.4814C22.7906 28.4821 22.7907 28.4831 22.7908 28.4847C22.789 28.4678 22.7891 28.4633 22.7906 28.4814Z"
            stroke="white"
            strokeWidth="1.96078"
          />
        </svg>
      </QuotationIcon>
      <Content>
        <div className="cardUpperRow">
          <Rating value={3} readOnly />
          <P3>22/12/2022</P3>
        </div>
        <P2 className="reviewPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          lectus iaculis netus sem fringilla adipiscing.
        </P2>
        <CustomerBox>
          <img src={icons.profileImage} alt="" width="" height="" />
          <div className="detail">
            <H3>Customer</H3>
            <P3>CEO</P3>
          </div>
        </CustomerBox>
      </Content>
    </Card>
  );
};

export default ReviewCard;
