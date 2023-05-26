import { useState } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";

const useFetch = () => {
  const { token } = useSelector((state) => state.user);
  const [res, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch();

  // Get
  const fetchData = async (url, cbFunction) => {
    setLoading(true);

    const headers = await getHeaders(token);
    try {
      const response = await apiClient.get(url, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        cbFunction && dispatch(cbFunction(response.data));
        // console.log("response", res.data);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  // Post
  const postData = async (url, payload, cbFunction) => {
    setLoading(true);
    const headers = await getHeaders(token);
    try {
      const response = await apiClient.post(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
      }
    } catch (e) {
      setLoading(false);
        setSuccess(false);
      setError(e.message);
    }
  };

  // Patch
  const patchData = async (url, payload, cbFunction) => {
    setLoading(true);
    const headers = await getHeaders(token);
    try {
      const response = await apiClient.patch(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
      }
    } catch (e) {
      setLoading(false);
        setSuccess(false);
      setError(e.message);
    }
  };

  // useEffect(() => {
  //   // method === "get" && get();
  //   // method === "post" && post();
  // }, [url, payload]);

  return { res, loading, error, success, fetchData, postData, patchData };
};
export default useFetch;
