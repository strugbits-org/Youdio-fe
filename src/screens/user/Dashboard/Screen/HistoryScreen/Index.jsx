import React from "react";
import Sidebar from "../../Components/Sidebar/Index";
import { Container } from "../../Components/Container";
import { Heading, Heading2 } from "../../Components/Heading";
import { Wrapper } from "../../Components/Wrapper";
import { HorizontalLine2 } from "../MyProfileScreen/ProfileComponent";
import { historyScreenStaticContent as content ,ArrHistory} from "./Constant";
import { HistoryCard } from "src/components/Cards/HistoryCard";
import { HistoryList } from "./HistoryComponent";

const History = () => {
  return (
    <Wrapper>
      <Heading>{content.historyH1}</Heading>
      <HorizontalLine2 />
      <div className="whole_box">
        <Sidebar />
        <Container>
          <Heading2>{content.historyH2}</Heading2>
          <HistoryList>
            {
              ArrHistory.map((value)=>{
                return <HistoryCard {...value}/>
              })
            }
           
             
            
            <HistoryCard />
          </HistoryList>
        </Container>
      </div>
    </Wrapper>
  );
};

export default History;
