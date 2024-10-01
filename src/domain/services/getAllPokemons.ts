import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { IPokemonsApiResponse } from '../interfaces/services';

export const getAllPokemons = async (): Promise<IPokemonsApiResponse | undefined> => {
  try {
    const { data } = await axios.get(BASE_URL)
    return data;
  } catch (e) {
    console.error(e)
  }
}