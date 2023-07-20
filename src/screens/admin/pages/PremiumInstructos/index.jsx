import React, { useState } from "react";
import { Container } from "./premiumInstructorsComponent";
import { H2, PrimaryButton, InputIcon } from "src/components";
import { icons } from "src/helpers";
import { useNavigate } from "react-router-dom";

function PremiumInstructors() {
  const [search] = useState("");
  const navigate = useNavigate()
  const handleSearch = () => {

  };
  const handleAddSession = () => {
    navigate("/dashboard/add-instructor")
  };
  return (
    <div>
      <Container>
        <div className="leftSide">
          <H2>Premium Instructors</H2>
          <PrimaryButton onClick={handleAddSession}>
            Add Instructor
          </PrimaryButton>
        </div>
        <div className="actionBox">
          <InputIcon
            isIcon={icons.searchIcon}
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </Container>
    </div>
  );
}

export default PremiumInstructors;
