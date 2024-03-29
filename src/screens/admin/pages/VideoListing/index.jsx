import React, { useEffect, useMemo, useState } from "react";
import { H2, InputIcon, PrimaryButton } from "src/components";
import { VideoClassesCards } from "src/components/CardsSection";
import useFetch from "src/features/hooks/useFetch";
import { icons } from "src/helpers";
import { Container } from "./videoListingComponent";
import { useNavigate } from "react-router-dom";
import { DeletePopup } from "src/components/Popups";
import usePostAPI from "src/features/hooks/usePostAPI";
import { useDebounce } from "src/features/hooks/useDebounce";

function VideoListing() {
  const { deleteData, loading } = useFetch();
  const { postData, postRes, postLoading } = usePostAPI()
  const [searchCategory, setSearchCategory] = useState("");
  const debounceCategory = useDebounce(searchCategory)
  const [videoId, setVideoId] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getVideos(debounceCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceCategory]);

  const getVideos = (category) => { 
    postData("video/admin", {category});
  }
  const videos = useMemo(() => {
    if (postRes && postRes.videos.length > 0) {
      return postRes.videos;
    }
    return [];
  }, [postRes]);

  const handleSearchCategory = (e) => {
    const value = e.target.value;
    setSearchCategory(value);
  };
  const handleDelete = (videoId) => {
    setOpen(true);
    setVideoId(videoId)
  };
  const handleEdit = (videoId) => {
    navigate("/dashboard/edit-video", { state: {videoId} });
  };
  const handleView = (videoId, instructorId) => {
    window.open(`/video-class/${videoId}/${instructorId}`, "_blank");
  };
  const handleAddSession = () => {
    navigate("/dashboard/add-video");
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleAction = () => {
    if (videoId) {
      deleteData(`video/${videoId}`, () => {
        getVideos("");
        setSearchCategory("")
        setOpen(false);
      });
    }
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
        loading={postLoading}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleView={handleView}
      />
      <DeletePopup
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
        loading={loading}
      />
    </React.Fragment>
  );
}

export default VideoListing;
