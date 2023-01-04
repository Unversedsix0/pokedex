export const searchPokemon = async(pokemon) =>{
    try{
        const url =`https://pokeapi.co/api/v2/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }catch(error){
        console.log("searchPokemon error:",error)
    }
}