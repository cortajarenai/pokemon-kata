import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { IPokemonDetailsApiResponse } from '../interfaces/services';

export const getPokemonDetails = async (pokemon: string): Promise<IPokemonDetailsApiResponse | undefined> => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${pokemon}`)
    return data;
  } catch (e) {
    console.error(e)
  }
}