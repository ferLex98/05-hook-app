import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const {data,isLoading,error} = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')

    console.log({data,isLoading,error});

  return (
    <>
      <h1>Pokemon</h1>
    </>
  )
}

export default MultipleCustomHooks
 

