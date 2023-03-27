import { useEffect, useState } from "react"

export const Messaje = () => {

    const [cords, setCoords] = useState({x:0, y:0})

    useEffect(()=> {
        /*
        console.log('Message mounted');
        return ()=>{
            console.log('Message unmounted');
        }*/
 
        const onMouseMove = ({x,y})=>{
            setCoords({x, y})
        }

        window.addEventListener('mousemove',onMouseMove)

        return ()=>{
            window.removeEventListener('mousemove',onMouseMove)
        }
    }, [])
  return (
    <>
        <h3>Usuario ya existe</h3> 
        <p>{JSON.stringify(cords)}</p>
    </>
  )
}


