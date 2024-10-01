import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const getAllPokemons = async (pokemon: string): Promise<any> => {
  try {
    const { data } = await axios.get(`${BASE_URL}${pokemon}`)
    return data;
  } catch (e) {
    console.error(e)
  }
}