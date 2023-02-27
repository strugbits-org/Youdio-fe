import React, { useEffect, useState } from 'react'
import Duration from './Duration'
import Difficulty from './Difficulty'
import Intensity from './Intensity'
import Styles from './Styles'
import { P3 } from '../Typography'
import translator from '../../helpers/translator'
import { FilterBox, FilterButton, FilterOptions } from './filtersComponents'
import Instructors from './Instructors'

export default function Filters() {

    const [selectedFilter, setFilter] = useState(null)

    useEffect(() => {

    }, [selectedFilter])

    const filterHandler = (filter) => {
        setFilter(filter)  
        console.log(selectedFilter);
    }
    return <FilterBox open={selectedFilter}>
        <div>
            <FilterButton name={"DURATION"} clickEvent={() => filterHandler('duration')} />
        </div>
        <div>
            <FilterButton name={"INSTRUCTORS"} clickEvent={() => filterHandler('instructor')} />
        </div>
        <div>
            <FilterButton name={"STYLES"} clickEvent={() => filterHandler('styles')} />
        </div>
        <div>
            <FilterButton name={"DIFFICULTY"} clickEvent={() => filterHandler('difficulty')} />
        </div>
        <div>
            <FilterButton name={"INTENSITY"} clickEvent={() => filterHandler('intensity')} />
        </div>

        {
            selectedFilter !== null && <FilterOptions>
                <P3 className='videoCount'>SHOWING 316 VIDEOS</P3>
                {selectedFilter === "duration" && <Duration />}
                {selectedFilter === "instructor" && <Instructors />}
                {selectedFilter === "styles" && <Styles />}
                {selectedFilter === "difficulty" && <Difficulty />}
                {selectedFilter === "intensity" && <Intensity />}

            </FilterOptions>
        }

    </FilterBox>

}