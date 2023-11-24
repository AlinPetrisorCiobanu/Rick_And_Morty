import axios from "axios"


export const getBaseDatos = async () =>{
    const chars = await axios.get('http://rickandmortyapi.com/api/character')
    return chars
}