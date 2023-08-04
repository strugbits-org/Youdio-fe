import { useState } from "react";
import { apiClient } from "src/config/https";
import { useSelector, useDispatch } from "react-redux";
import { getHeaders } from "src/helpers/config";
import { toast } from "react-toastify";

const useGetAPI = () => {
  const { token } = useSelector((state) => state.user);
  const [getRes, setResponse] = useState(null);
  const [getLoading, setLoading] = useState(false);
  const [getError, setError] = useState("");
  const [getSuccess] = useState(false);
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

  const getData = async (url, cbFunction, setLocalState) => {
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
        if (response.data?.msg) notify("success", response.data.msg);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
      notify("error", e.message);
    }
  };
  return {
    getRes,
    getLoading,
    getError,
    getSuccess,
    getData,
  };
};

export default useGetAPI;
