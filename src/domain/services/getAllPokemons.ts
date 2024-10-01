import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const getAllPokemons = async () => {
  try {
    const { data } = await axios.get(BASE_URL)
    return data;
  } catch (e) {
    console.error(e)
  }

}