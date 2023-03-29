import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //Funcion memorizada
    const incrementarValor = useCallback(
      (value)=>{
        setCounter((c)=> c +value);
      },[]
    )

    /*
    const incrementarValor = () =>{
      setCounter(counter + 1);
    }*/

  return (
    <>
      <h1>Use callback hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementarValor}/>
    </>
  )
}


