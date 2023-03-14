import React, { useEffect, useState } from 'react'
import Duration from './Duration'
import Difficulty from './Difficulty'
import Intensity from './Intensity'
import Styles from './Styles'
import { P3 } from '../Typography'
import { FilterBox, FilterButton, FilterOptions, SelectionBox, SelectionButton } from './filtersComponents'
import Instructors from './Instructors'

const filter = [
    {
        label:"DURATION",
        value: "duration",
    },
    {
        label: "INSTRUCTORS",
        value: "instructors",
    },
    {
        label: "STYLES",
        value: "styles",
    },
    {
        label: "DIFFICULTY",
        value: "difficulty",
    },
    {
        label: "INTENSITY",
        value: "intensity",
    }
]

export function Filters() {

    const [selectedFilter, setFilter] = useState(null)

    useEffect(() => {

    }, [selectedFilter])

    const filterHandler = (filter) => {
        filter === selectedFilter ? setFilter(null) : setFilter(filter)
    }
 
    return <React.Fragment>
        <FilterBox open={selectedFilter}>

            {
                filter.map(({ label, value }) => { 
                    return <div>
                        <FilterButton name={label} selected={selectedFilter} clickEvent={() => filterHandler(value)} />
                    </div>
                } )
            }
            
            {
                selectedFilter !== null && <FilterOptions>
                    <P3 className='videoCount'>SHOWING 316 VIDEOS</P3>
                    {selectedFilter === "duration" && <Duration />}
                    {selectedFilter === "instructors" && <Instructors />}
                    {selectedFilter === "styles" && <Styles />}
                    {selectedFilter === "difficulty" && <Difficulty />}
                    {selectedFilter === "intensity" && <Intensity />}

                </FilterOptions>
            }

        </FilterBox>
        <SelectionBox>
            <SelectionButton key={ 0 } name={"YOGA"} />
            <SelectionButton key={ 1 } name={"YOGA"} />
            <SelectionButton key={ 2 } name={"YOGA"} />
            <SelectionButton key={ 3 } name={"YOGA"} />
            <SelectionButton key={ 4 } name={"YOGA"} />
        </SelectionBox>
    </React.Fragment>
}