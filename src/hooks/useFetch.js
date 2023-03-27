import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: false,
        error: null
    })

    const getFetch = async() =>{

        setState({
            ...setState,
            isLoading: true,
        })
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setState({
            //Cuando la propiedad tiene el mismo nombre se lap uede dejar asi 
            data,
            isLoading: false,
            error: null
        })
    }
    
    //Estos no son asincronos
    useEffect(()=>{
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };
}

