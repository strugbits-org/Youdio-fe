import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { H2, InputIcon, PrimaryButton } from "src/components";
import { VideoClassesCards } from "src/components/CardsSection";
import useFetch from "src/features/hooks/useFetch";
import { icons } from "src/helpers";
import { Container, HoverBox } from "./videoListingComponent";
import { useNavigate } from "react-router-dom";
import { DeletePopup } from "src/components/Popups";

function VideoListing() {
  const { postData, res, loading } = useFetch();
  const { resetFilters } = useSelector((state) => state.filter);
  const [searchCategory, setSearchCategory] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    postData("video/filter", resetFilters);
  }, []);
  const videos = useMemo(() => {
    if (res && res.videos.length > 0) {
      return res.videos;
    }
    return [];
  }, [res]);

  const handleSearchCategory = (e) => {
    const value = e.target.value;
    setSearchCategory(value);
  };
  const handleDelete = () => {
    setOpen(true);
  };
  const handleEdit = () => {
    navigate("/");
  };
  const handleAddSession = () => {
    navigate("/");
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleAction = () => {
    alert("Deleted");
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="leftSide">
          <H2>Video Listing</H2>
          <PrimaryButton onClick={handleAddSession}>
            Add New Video
          </PrimaryButton>
        </div>
        <div className="actionBox">
          {/* <InputIcon
            isIcon={icons.searchIcon}
            placeholder="Search Instructor"
            value={searchInstructor}
            onChange={handleSearchInstructor}
          /> */}
          <InputIcon
            isIcon={icons.searchIcon}
            placeholder="Search Category"
            value={searchCategory}
            onChange={handleSearchCategory}
          />
        </div>
      </Container>
      <VideoClassesCards
        videos={videos}
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
      <DeletePopup
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
      />
    </React.Fragment>
  );
}

export default VideoListing;
