import React from "react";
import { Heading2 } from "../../Components/Heading";
import { historyScreenStaticContent as content, ArrHistory } from "./Constant";
import { HistoryCard } from "src/components/Cards/HistoryCard";
import { HistoryList } from "./HistoryComponent";

const History = () => {
  return (
    <div>
      <Heading2>{content.historyH2}</Heading2>
      <HistoryList>
        {ArrHistory.map((value) => {
          return <HistoryCard {...value} />;
        })}
      </HistoryList>
    </div>
  );
};

export default History;
