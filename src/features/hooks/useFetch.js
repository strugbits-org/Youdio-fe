import { useState, useEffect } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";
import { toast } from "react-toastify";
import axios from "axios";

const useFetch = () => {
  const { token } = useSelector((state) => state.user);
  const [res, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const notify = (type, mesg) => {
    if (type === "success") {
      toast.success(mesg, {
        position: "top-right",
        className: "toastPosition",
      });
    }
    if (type === "error") {
      toast.error(mesg, {
        position: "top-right",
        className: "toastPosition",
      });
    }
  };

  // Get
  const fetchData = async (url, cbFunction, setLocalState) => {
    setLoading(true);
    const headers = await getHeaders(token);
    try {
      const response = await apiClient.get(url, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        cbFunction && dispatch(cbFunction(response.data));
        setLocalState && setLocalState(response.data);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  // Get Data From Multiple endpoints
  const fetchMultipleData = async (url, cbFunction, setLocalState) => {
    setLoading(true);
    const headers = await getHeaders(token);
    try {
      if (typeof url === "object" && url.length > 0) {
        const response = await axios.all(
          url.map((endpoint) => {
            return apiClient
              .get(endpoint, { headers })
              .then((res) => res)
              .catch((e) => console.error(e));
          })
        );
        const isResponseValid = response.some((val) => val?.data && true);
        if (isResponseValid) {
          const responseData = [];
          response.forEach((res) => res?.data && responseData.push(res.data));
          setResponse(responseData);
          setLoading(false);
          setError("");
          cbFunction &&
            cbFunction.forEach((cb, ind) => dispatch(cb(responseData[ind], "Hamza")));
          // setLocalState && setLocalState(response.data);
        }
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  // Post
  const postData = async (url, payload, cbFunction, resetToken) => {
    setLoading(true);
    const headers = resetToken
      ? await getHeaders(resetToken)
      : await getHeaders(token);
    try {
      const response = await apiClient.post(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
        if (response.data?.message) notify("success", response.data.message);
      }
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      setError(e.message);
      notify("error", e.message);
    }
  };

  // Patch
  const patchData = async (url, payload, cbFunction, setValues) => {
    setLoading(true);
    const headers = await getHeaders(token, true);
    try {
      const response = await apiClient.patch(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
        setValues && setValues()
      }
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      setError(e.message);
      console.log("Error", e);
      }
  };

  useEffect(() => {
    // method === "get" && get();
    // method === "post" && post();
  }, []);

  return {
    res,
    loading,
    error,
    success,
    fetchData,
    fetchMultipleData,
    postData,
    patchData,
  };
};

export default useFetch;
