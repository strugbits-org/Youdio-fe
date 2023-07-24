import React, { useEffect, useMemo, useState } from "react";
import { H2 } from "src/components";
import { FeatureVideosCards } from "src/components/CardsSection";
import useGetAPI from "src/features/hooks/useGetAPI";
import { Container } from "./featureLessonComponent";
import { DropDownInput } from "src/components/AdminInput/AdminInput";
import usePostAPI from "src/features/hooks/usePostAPI";
import { useSelector } from "react-redux";

function FeatureLesson() {
    const [category, setCategory] = useState()
  const { getData, getLoading, getRes } = useGetAPI();
    const { postData, postRes } = usePostAPI();
    const { categories } = useSelector(state => state.filter)
    useEffect(() => {
      getData("category/get-category");
    getData("/video/get-featured");
    }, []);
    
    const handleCategory = (e) => { 
     setCategory(e.target.value)
    }

  const getFeatureVideos = useMemo(() => {
    if (getRes && getRes?.videos) {
      return getRes.videos;
    }
    return [];
  }, [getRes]);

  const getCategories = useMemo(() => {
    if (categories) {
        categories.map((category) => { 
            return ({
                label: category.name,
                value: category.name
            })
        })
    }
    return [];
  }, [postRes]);

  return (
    <div>
      <Container>
        <div className="leftSide">
          <H2>Feature Lesson</H2>
        </div>
              <div className="actionBox">
                  <select>
                      <option>hamza</option>
                      <option>hamza1</option>
                      <option>hamza2</option>
                      <option>hamza3</option>
                  </select>
          {/* <DropDownInput
            label="Category"
            id="search"
            name="search"
            type="text"
            style={{ fontSize: "16px" }}
            options={getCategories}
            value={category}
            onChange={handleCategory}
            disabled={getLoading}
          /> */}
        </div>
      </Container>
      {/* {getFeatureVideos} */}
      <FeatureVideosCards
        featureVideos={getFeatureVideos}
        handleDelete={() => {}}
        loading={getLoading}
        search={""}
      />
    </div>
  );
}

export default FeatureLesson;
