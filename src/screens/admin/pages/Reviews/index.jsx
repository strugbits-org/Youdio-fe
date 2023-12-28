import React, { useEffect, useMemo, useState } from "react";
import { H2, PrimaryButton } from "src/components";
import useFetch from "src/features/hooks/useFetch";
import { Container } from "./reviewsComponent";
import { useNavigate } from "react-router-dom";
import { DeletePopup, ViewPopup } from "src/components/Popups";
import ReviewsList from "./ReviewsList";
import useGetAPI from "src/features/hooks/useGetAPI";
import moment from "moment/moment";

function Reviews() {
  const { deleteData, loading } = useFetch();
  const { getData, getRes, getLoading } = useGetAPI();
  const [reviewId, setReviewId] = useState("");
  const [reviewText, setReviewText] = useState("");
  // const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  // const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getReviews() {
    getData("/review/get-reviews");
  }

  function createData(_id, instructorName, customerName, date, rating, review) {
    return { instructorName, customerName, date, rating, review, _id };
  }

  const reviewsMemo = useMemo(() => {
    if (getRes && getRes?.reviews?.length) {
      let rows = getRes.reviews.map((row) => {
        const { _id, instructor: { firstName, lastName}, customerName, date, rating, review } = row;
        return createData(_id, `${firstName} ${lastName}`, customerName, moment(date).format("ll"), rating, review);
      });
      // if (search.trim().length) { 
      //   rows = rows.filter(({ instructorName }) => {
      //     console.log(instructorName, search, "result");
      //     instructorName.toLowerCase().includes(search.toLowerCase());
      //   });
      // }
      return rows;
    }
    return [];
  }, [getRes]);

  const handleDelete = (id) => {
    setOpen(true);
    setReviewId(id);
  };

  const handleView = (text) => {
    setViewOpen(true);
    setReviewText(text);
  };
  const handleAddReview = () => {
    navigate("/dashboard/add-review");
  };
  const handleClose = (popup) => {
    if (popup === "delete") setOpen(!open);
    if (popup === "view") setViewOpen(!viewOpen);
  };
  const handleAction = () => {
    if (reviewId) {
      deleteData(`review/delete-review/${reviewId}`, () => {
        setOpen(false);
        getReviews();
      });
    }
  };

  // const handleSearch = (e) => { 
  //   setSearch(e.target.value)
  // }

  return (
    <React.Fragment>
      <Container>
        <div className="leftSide">
          <H2>Reviews</H2>
          <PrimaryButton onClick={handleAddReview}>Add Reviews</PrimaryButton>
        </div>
        <div className="actionBox">
          {/* <InputIcon
            isIcon={icons.searchIcon}
            placeholder="Search Instructor"
            value={search}
            onChange={handleSearch}
          /> */}
        </div>
      </Container>
      <ReviewsList
        rows={reviewsMemo}
        handleDelete={handleDelete}
        handleView={handleView}
        loading={getLoading}
      />
      <DeletePopup
        open={open}
        handleClose={() => handleClose("delete")}
        handleAction={handleAction}
        loading={loading}
      />
      <ViewPopup
        open={viewOpen}
        handleClose={() => handleClose("view")}
        data={{ review: reviewText }}
      />
    </React.Fragment>
  );
}

export default Reviews;
