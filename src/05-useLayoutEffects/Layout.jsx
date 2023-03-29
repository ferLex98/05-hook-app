import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LandingQuote, Quote } from "../03-examples";

const Layout = () => {
    const{counter, increment} =useCounter(1);


    const{ data,isLoading,error} = useFetch(`https://dummyjson.com/products/${counter}`)
    
    const {title,description}=!!data && data;    //En algunos casos va asi: data[0]

  

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      {  
         isLoading 
         ? <LandingQuote/>
         : <Quote title={title} description={description}/>
        
            
      }
    
      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment(1)}>Next quote</button>
    
    </>
  )
}

export default Layout
 

