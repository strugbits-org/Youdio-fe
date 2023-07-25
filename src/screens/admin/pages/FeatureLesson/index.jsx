import React, { useEffect, useMemo, useState } from "react";
import { H2, Label } from "src/components";
import { FeatureVideosCards } from "src/components/CardsSection";
import useGetAPI from "src/features/hooks/useGetAPI";
import { Container } from "./featureLessonComponent";
import usePostAPI from "src/features/hooks/usePostAPI";
import { DropInput } from "src/components/AdminInput/AdminInpComp";
import { DeletePopup } from "src/components/Popups";

function FeatureLesson() {
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [featureVideoId, setFeatureVideoId] = useState("");
  const { getData, getRes } = useGetAPI();
  const api = usePostAPI();
  const { postData, postRes, postLoading } = usePostAPI();

  useEffect(() => { 
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  useEffect(() => {
    getData("category/get-category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategory = () => {
    postData("video/get-featured", { category: category });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleRemoveFromFeature = () => {
    api.postData(
      `video/feature-video/${featureVideoId}`,
      { bool: false },
      undefined,
      undefined,
      undefined,
      () => {
        getCategory();
        handleClose();
      }
    );
  };

  const handleDelete = (featureVideoId) => {
    setFeatureVideoId(featureVideoId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const getFeatureVideos = useMemo(() => {
    if (postRes && postRes?.videos) {
      return postRes.videos;
    }
    return [];
  }, [postRes]);

  const getCategories = useMemo(() => {
    if (getRes && getRes.categories) {
      return getRes.categories.map(({ name }) => ({ name }));
    }
    return [];
  },[getRes]);

  return (
    <div>
      <Container>
        <div className="leftSide">
          <H2>Feature Lesson</H2>
        </div>
        <div className="actionBox">
          <Label>Category</Label>
          <DropInput onChange={handleCategory} value={category}>
            <option value="" key={"all"}>
              All
            </option>
            {getCategories.map(({ name }) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </DropInput>
        </div>
      </Container>
      <FeatureVideosCards
        featureVideos={getFeatureVideos}
        handleDelete={handleDelete}
        loading={postLoading}
        search={""}
      />

      <DeletePopup
        data={{
          text: "Are you sure you want to delete this video form feature list?",
        }}
        handleClose={handleClose}
        handleAction={handleRemoveFromFeature}
        loading={api.postLoading}
        open={open}
      />
    </div>
  );
}

export default FeatureLesson;
