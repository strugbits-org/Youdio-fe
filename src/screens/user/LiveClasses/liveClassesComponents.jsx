import styled from "styled-components";

export const ContentBox = styled.div`
    max-width:632px;
`

export const MonthBox = styled.div`
    display:flex;
    justify-content:space-between;
`

export const WeekBox = styled.div`
    ul{
        display:flex;
        justify-content:space-between;
        gap: 1vw;
        
        li{
            flex:1;
        }
    }
    
    .buttons{
        display:flex;
        justify-content:space-between;
            
    }


`

export const DayBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 1vw;
        
    div{
        flex:1;
    }
`

export const FilterBox = styled.div`
    display:flex;
    justify-content:left;
    align-items:center;
    flex-wrap:wrap;
    gap: 1vw;
        
    div{
        flex:1;
    }
`
