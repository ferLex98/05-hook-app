import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const{ data,isLoading,error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')

    console.log({data,isLoading,error});

    const {name,url} = data;

    console.log(name);

  return (
    <>
      <h1>Pokemon</h1>
      <hr />
      {
        isLoading ?(
            <dir className="alert alert-info text-center">
                Loading...
            </dir>
        ):(
            <blockquote className="blockquote text-end">
                <p className="mb-1">Hola Mundo</p>
                <footer className="blockquote-footer">Fernanda </footer>
            </blockquote> 
        )
      }
     

    
    </>
  )
}

export default MultipleCustomHooks
 

