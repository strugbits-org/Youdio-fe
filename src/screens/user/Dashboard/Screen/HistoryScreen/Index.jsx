import React, { useEffect, useMemo } from "react";
import { Heading2 } from "../../Components/Heading";
import { WatchHistoryCards } from "src/components/CardsSection";
import useGetAPI from "src/features/hooks/useGetAPI";

const History = () => {
  const { getData, getRes, getLoading } = useGetAPI();

  useEffect(() => {
    getData("watchHistory/get");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const history = useMemo(() => {
    if (getRes && getRes?.watchHistory) {
      return getRes.watchHistory;
    }
    return [];
  }, [getRes]);
  return (
    <div>
      <Heading2>Watch History</Heading2>
      <WatchHistoryCards historyVideos={history} loading={getLoading} />
    </div>
  );
};

export default History;
