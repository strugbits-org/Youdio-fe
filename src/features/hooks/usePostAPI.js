import { useState, useEffect } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";
import { toast } from "react-toastify";

const usePostAPI = () => {
  const { token } = useSelector((state) => state.user);
  const [postRes, setResponse] = useState(null);
  const [postLoading, setLoading] = useState(false);
  const [postError, setError] = useState("");
  const [postSuccess, setSuccess] = useState(false);
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

  // Post
  const postData = async (
    url,
    payload,
    cbFunction,
    resetToken,
    formData,
    setLocalState
  ) => {
    setLoading(true);
    const headers = resetToken
      ? await getHeaders(resetToken)
      : await getHeaders(token, formData);
    try {
      const response = await apiClient.post(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
        setLocalState && setLocalState(response.data);
        if (response.data?.message) notify("success", response.data.message);
        if (response.data?.msg) notify("success", response.data.msg);
      }
    } catch (e) {
      setLoading(false);
      setSuccess(false);
      e.message && setError(e.message);
      e.errors && e.errors.length > 0 && setError(e.errors[0].msg);
      // e.message && notify("error", e.message);
      // e.errors && e.errors.length > 0 && notify("error", e.errors[0].msg);
    }
  };

  useEffect(() => {
    // method === "get" && get();
    // method === "post" && post();
  }, []);

  return {
    postRes,
    postLoading,
    postError,
    postSuccess,
    postData,
  };
};

export default usePostAPI;
