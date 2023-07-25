import React, { useEffect, useMemo, useState } from "react";
import { H2, InputIcon, PrimaryButton } from "src/components";
import { LiveClassesCards } from "src/components/CardsSection";
import useFetch from "src/features/hooks/useFetch";
import { icons } from "src/helpers";
import { Container } from "./liveSessionsComponent";
import { useNavigate } from "react-router-dom";
import { DeletePopup } from "src/components/Popups";
import usePostAPI from "src/features/hooks/usePostAPI";
import { useDebounce } from "src/features/hooks/useDebounce";


function LiveSessions() {
  const { deleteData, loading } = useFetch();
  const { postData, postRes, postLoading } = usePostAPI();
  const [searchInstructor, setSearchInstructor] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [open, setOpen] = useState(false);
  const debounceCategory = useDebounce(searchCategory)
  const debounceInstructor = useDebounce(searchInstructor)
  const navigate = useNavigate();
  useEffect(() => {
    getLiveSessions(debounceInstructor, debounceCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceCategory, debounceInstructor]);

  const getLiveSessions = (trainer, category) => {
    postData("liveSession/get-admin", {
      trainer,
      category,
    });
  };

  const liveSession = useMemo(() => {
    if (postRes && postRes.liveSessions?.length > 0) {
      return postRes.liveSessions;
    }
    return [];
  }, [postRes]);

  const handleSearchInstructor = (e) => {
    const value = e.target.value;
    setSearchInstructor(value);
  };
  const handleSearchCategory = (e) => {
    const value = e.target.value;
    setSearchCategory(value);
  };
  const handleDelete = (sessionId) => {
    setOpen(true);
    setSessionId(sessionId);
  };
  const handleEdit = (sessionId) => {
    navigate("/dashboard/edit-live-session", { state: { sessionId } });
  };
  const handleView = (sessionId) => {
    window.open(`/live-class/${sessionId}`, "_blank");
  };
  const handleAddSession = () => {
    navigate("/dashboard/add-live-session");
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleAction = () => {
    if (sessionId) {
      deleteData(`liveSession/delete/${sessionId}`, () => { 
        getLiveSessions("", "");
        setSearchCategory("")
        setSearchInstructor("")
        setOpen(false);
      });
    }
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

export default LiveSessions;
