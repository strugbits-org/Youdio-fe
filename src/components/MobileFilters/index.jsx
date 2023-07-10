// import React, { useEffect, useState } from "react";
// import Duration from "./Duration";
// import Difficulty from "./Difficulty";
// import Intensity from "./Intensity";
// import Instructors from "./Instructors";
// import Styles from "./Styles";
// import {
//   FilterBox,
//   FilterButton,
//   FilterOptions,
//   SelectionBox,
//   SelectionButton,
// } from "./filtersComponents";
// import { P3 } from "src/components";

// const filter = [
//   {
//     label: "DURATION",
//     value: "duration",
//   },
//   {
//     label: "INSTRUCTORS",
//     value: "instructors",
//   },
//   {
//     label: "STYLES",
//     value: "styles",
//   },
//   {
//     label: "DIFFICULTY",
//     value: "difficulty",
//   },
//   {
//     label: "INTENSITY",
//     value: "intensity",
//   },
// ];

// export function Filters() {
//   const [selectedFilter, setFilter] = useState(null);
//   const [allFilters, setAllFilters] = useState([]);
//   const [sort, setSort] = useState("newest");

//   useEffect(() => {}, [selectedFilter]);

//   const filterHandler = (filter) => {
//     filter === selectedFilter ? setFilter(null) : setFilter(filter);
//   };

//   return (
//     <React.Fragment>
//       <FilterBox>
//         {filter.map(({ label, value }, ind) => {
//           return (
//             <div key={`filter-button-${ind}`}>
//               <FilterButton
//                 name={label}
//                 selected={selectedFilter}
//                 clickEvent={() => filterHandler(value)}
//               />
//             </div>
//           );
//         })}

//         {selectedFilter !== null && (
//           <FilterOptions>
//             <P3 className="videoCount">SHOWING 316 VIDEOS</P3>
//             <div className="filters">
//               {selectedFilter === "duration" && <Duration />}
//               {selectedFilter === "instructors" && <Instructors />}
//               {selectedFilter === "styles" && (
//                 <Styles setAllFilters={setAllFilters} allFilters={allFilters} />
//               )}
//               {selectedFilter === "difficulty" && <Difficulty />}
//               {selectedFilter === "intensity" && <Intensity />}
//             </div>
//             <div className="sortOption">
//               <P3>SORT BY:</P3>
//               <select value={sort} onChange={(e) => setSort(e.target.value)}>
//                 <option value="newest">NEWEST</option>
//                 <option value="oldest">OLDEST</option>
//               </select>
//             </div>
//           </FilterOptions>
//         )}
//       </FilterBox>
//       <SelectionBox>
//         {allFilters.length > 0 &&
//           allFilters.map((value, index) => (
//             <SelectionButton key={`selected-${value}`} name={value} />
//           ))}
//       </SelectionBox>
//     </React.Fragment>
//   );
// }

import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { FilterBox } from "./filtersComponents";
import { IconButton } from "../Button";
import { icons } from "src/helpers";
import { HorizontalLine } from "../BreakLines";
import Instructors from "./Instructors";
import { setInstructors, setStyles } from "src/features/filterSlice";
import useFetch from "src/features/hooks/useFetch";
import Duration from "./Duration";

// const filter = [
//   {
//     label: "DURATION",
//     value: "duration",
//   },
//   {
//     label: "INSTRUCTORS",
//     value: "instructors",
//   },
//   {
//     label: "STYLES",
//     value: "styles",
//   },
//   {
//     label: "DIFFICULTY",
//     value: "difficulty",
//   },
//   {
//     label: "INTENSITY",
//     value: "intensity",
//   },
// ];

export default function MobileFilters({ open, setOpen, onClose }) {
  const [filterTab, setFilterTab] = useState("")
  const { fetchMultipleData} = useFetch()
  useEffect(() => {
    fetchMultipleData(
      ["category/get-sub-category", "instructor/get-instructor"],
      [setStyles, setInstructors],
      [{}, {}]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const list = () => (
    <FilterBox>
      <IconButton className="btnClose" onClick={() => setOpen(false)}>
        <img src={icons.cross} alt="" width="16" />
      </IconButton>
      <HorizontalLine />
      <button onClick={() => setFilterTab("instructors")}>Instructors</button>
      {filterTab === "instructors" && (
        <Instructors removeTag={() => {}} addTag={() => {}} />
      )}
      <HorizontalLine />
      <button onClick={() => setFilterTab("duration")}>Duration</button>
      {filterTab === "duration" && <Duration addDuration={() => {}} />}
      <HorizontalLine />
      <button>Difficulty</button>
      <HorizontalLine />
      <button>Intensity</button>
      <HorizontalLine />
      <button>Styles</button>
      <HorizontalLine />
    </FilterBox>
  );

  return (
    <React.Fragment>
      <Drawer anchor="top" open={open} onClose={() => console.log("closed")}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
