import { useState, useEffect } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";
import { toast } from "react-toastify";

const usePutAPI = () => {
  const { token } = useSelector((state) => state.user);
  const [putRes, setResponse] = useState(null);
  const [putLoading, setLoading] = useState(false);
  const [putError, setError] = useState("");
  const [putSuccess, setSuccess] = useState(false);
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

  // Put
  const putData = async (url, payload, cbFunction, setValues, formData) => {
    setLoading(true);
    const headers = formData
      ? await getHeaders(token, formData)
      : await getHeaders(token);
    try {
      const response = await apiClient.put(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
        setValues && setValues();
        if (response?.data.message) notify("success", response.data.message);
      }
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      setError(e.message);
    } finally {
      setLoading(false);
      setSuccess(false);
    }
  };

  useEffect(() => {
    // method === "get" && get();
    // method === "post" && post();
  }, []);

  return {
    putRes,
    putLoading,
    putError,
    putSuccess,
    putData,
  };
};

export default usePutAPI;
