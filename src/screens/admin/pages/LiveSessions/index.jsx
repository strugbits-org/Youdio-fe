import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { H2, InputIcon, PrimaryButton } from "src/components";
import { LiveClassesCards } from "src/components/CardsSection";
import useFetch from "src/features/hooks/useFetch";
import { icons } from "src/helpers";
import { Container, HoverBox } from "./liveSessionsComponent";
import { useNavigate } from "react-router-dom";
import { DeletePopup } from "src/components/Popups";

function LiveSessions() {
  const { postData, res, loading } = useFetch();
  const { resetFilters } = useSelector((state) => state.filter);
  const [searchInstructor, setSearchInstructor] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    postData("liveSession/get", resetFilters);
  }, []);
  const liveSession = useMemo(() => {
    if (res && res.liveSessions.length > 0) {
      return res.liveSessions;
    }
    return [];
  }, [res]);

  const handleSearchInstructor = (e) => {
    const value = e.target.value;
    setSearchInstructor(value);
  };
  const handleSearchCategory = (e) => {
    const value = e.target.value;
    setSearchCategory(value);
  };
  const handleDelete = () => {
    setOpen(true)
  };
  const handleEdit = () => {
    navigate("/");
  };
  const handleAddSession = () => {
    navigate("/");
  };
  const handleClose = () => {
    setOpen(!open)
  };
  const handleAction = () => {
      alert("Deleted")
        setOpen(false)
  };

  return (
    <React.Fragment>
      <Container>
        <div className="leftSide">
          <H2>Live Sessions</H2>
          <PrimaryButton onClick={handleAddSession}>
            Add Live Session
          </PrimaryButton>
        </div>
        <div className="actionBox">
          <InputIcon
            isIcon={icons.searchIcon}
            placeholder="Search Instructor"
            value={searchInstructor}
            onChange={handleSearchInstructor}
          />
          <InputIcon
            isIcon={icons.searchIcon}
            placeholder="Search Category"
            value={searchCategory}
            onChange={handleSearchCategory}
          />
        </div>
      </Container>
      <LiveClassesCards
        classes={liveSession}
        loading={loading}
        hoverChildren={
          <HoverBox>
            <img
              src={icons.bin}
              alt="Bin_Delete"
              onClick={handleDelete}
              width=""
              height=""
            />
            <img
              src={icons.pen}
              alt="Edit_Pen"
              onClick={handleEdit}
              width=""
              height=""
            />
          </HoverBox>
        }
      />
      <DeletePopup open={open} handleClose={handleClose} handleAction={handleAction}/>
    </React.Fragment>
  );
}

export default LiveSessions;
