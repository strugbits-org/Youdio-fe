import React, { useEffect, useMemo, useState } from "react";
import { Container } from "./instructorsComponent";
import { H2, PrimaryButton, InputIcon } from "src/components";
import { icons } from "src/helpers";
import { useNavigate } from "react-router-dom";
import usePostAPI from "src/features/hooks/usePostAPI";
import { InstructorCards } from "src/components/CardsSection";
import { DeletePopup } from "src/components/Popups";
import useFetch from "src/features/hooks/useFetch";
import { useDebounce } from "src/features/hooks/useDebounce";

function Instructors() {
  const [search, setSearch] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [open, setOpen] = useState(false);
  const debounce = useDebounce(search);
  const navigate = useNavigate();
  const { postData, postRes, postLoading } = usePostAPI();
  const { deleteData, loading } = useFetch();

  useEffect(() => {
    getInstructor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const getInstructor = () => {
    postData("instructor/get-instructor", { search });
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleEdit = (instructorId) => {
    navigate("/dashboard/edit-instructor", { state: { instructorId } });
  };
  const handleView = (instructorId) => {
    window.open(`/singleinstructor/${instructorId}`, "_blank");
  };
  const handleDelete = (instructorId) => {
    setOpen(true);
    setInstructorId(instructorId);
  };
  const handleAddInstructor = () => {
    navigate("/dashboard/add-instructor");
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const handleAction = () => {
    if (instructorId) {
      // alert(`Deleted ${instructorId}`);
      deleteData(`instructor/delete-instructor/${instructorId}`, () => {
        getInstructor();
        setOpen(false);
      });
    }
  };

  const instructors = useMemo(() => {
    if (postRes && postRes.instructors.length > 0) {
      return postRes.instructors;
    }
    return [];
  }, [postRes]);

  
  return (
    <div>
      <Container>
        <div className="leftSide">
          <H2>Instructors</H2>
          <PrimaryButton onClick={handleAddInstructor}>
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
      <InstructorCards
        instructors={instructors}
        loading={postLoading}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleView={handleView}
        search={debounce}
      />
      <DeletePopup
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
        loading={loading}
      />
    </div>
  );
}

export default Instructors;
