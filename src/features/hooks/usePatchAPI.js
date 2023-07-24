import { useState, useEffect } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";
import { toast } from "react-toastify";

const usePatchAPI = () => {
  const { token } = useSelector((state) => state.user);
  const [patchRes, setResponse] = useState(null);
  const [patchLoading, setLoading] = useState(false);
  const [patchError, setError] = useState("");
  const [patchSuccess, setSuccess] = useState(false);
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

  // Patch
  const patchData = async (url, payload, cbFunction, setValues, isFormData) => {
    setLoading(true);
    const headers = isFormData
      ? await getHeaders(token, true)
      : await getHeaders(token);
    try {
      const response = await apiClient.patch(url, payload, { headers });
      if (response?.data) {
        setResponse(response.data);
        setLoading(false);
        setError("");
        setSuccess(true);
        cbFunction && dispatch(cbFunction(response.data));
        setValues && setValues();
        if (response.data.message) notify("success", response.data.message);
    }
} catch (e) {
    setLoading(false);
    setSuccess(false);
    setError(e.message);
    if (e.message) notify("error", e.message);
    }
  };

  useEffect(() => {
    // method === "get" && get();
    // method === "post" && post();
  }, []);

  return {
    patchRes,
    patchLoading,
    patchError,
    patchSuccess,
    patchData,
  };
};

export default usePatchAPI;
