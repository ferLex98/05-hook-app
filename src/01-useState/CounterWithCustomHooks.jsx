import React from 'react'
import { useCounter } from '../hooks/useCounter';

const CounterWithCustomHooks = () => {
    const { counter,increment,decrement,reset } = useCounter(); 
  return (
    <>
      <h1>Cntainer with hook: {counter}</h1>
      <hr />
      <button onClick={()=>increment(2)} >+1</ button>
      <button onClick={()=>decrement(2)} >-1</ button>
      <button onClick={reset} >Reset</ button>
    </>
  )
}

export default CounterWithCustomHooks
