import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {

   
   const {counter, increment} = useCounter(10);
   console.log("Valor del counter:"+counter);

   const [show, setShow] = useState(true)


  return (
    <>
      <h1>Counter: <Small value={counter}/></h1>
      <hr />
      <button className='btn btn-primary' onClick={()=>{increment()}} >+1</button>
      <button className='btn btn-primary' onClick={()=>{setShow(!show)}}>Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}

export default Memorize
