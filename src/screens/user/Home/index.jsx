import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../../store/slices/counterSlice'

function Home() {
  const dummy = useSelector(state => state)
  console.log(dummy);
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{dummy.counter.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(incrementByAmount(3))}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  )
}

export default Home