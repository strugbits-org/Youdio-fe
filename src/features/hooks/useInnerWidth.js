import { useState, useEffect } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";
import { toast } from "react-toastify";

const useInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState();
  const daysInWeek = () => {};

  const getInnerWidth = () => {
    const windowWidth = window.innerWidth;
    const width = windowWidth < 768 ? "mobileFilters" : "webFilters";
    setInnerWidth(width)
  };

    useEffect(() => {
      getInnerWidth();
  }, []);

  return { innerWidth, getInnerWidth };
};

export default useInnerWidth;
