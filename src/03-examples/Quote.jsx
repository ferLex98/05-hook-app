import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({title, description}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height:0});
  useLayoutEffect(()=>{
      //console.log(pRef.current.getBoundingClientRect() );
      const {height, width} = pRef.current.getBoundingClientRect();
      setBoxSize({height,width});
  }, [title])

  return (
    <>
        <blockquote className="blockquote text-end" 
        style={{display: 'flex'}}>
            <p ref={pRef} className="mb-2">{title}</p>
            <footer className="blockquote-footer">{description} </footer> 
        </blockquote>  
        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
 