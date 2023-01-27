import React, { useEffect, useState } from 'react'
import { Duration, FilterBox, FilterButton, FilterOptions, RangeSlider, SliderBox } from './filtersComponents'

export default function Filters() {

    const [selectedFilter, setFilter] = useState(null)

    useEffect(() => {

    }, [selectedFilter])

    const filterHandler = (filter) => {
        setFilter(filter)
        console.log(selectedFilter);
    }
    return <FilterBox>
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
                <Duration />

            </FilterOptions>
        }

    </FilterBox>

}