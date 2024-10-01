import { BASE_URL } from "../constants/urls";
import { getAllPokemons } from "./getAllPokemons"
import axios from 'axios';

describe('getAllPokemons', () => {
  it("should call the correct url", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(Promise.resolve({}));
    await getAllPokemons();
    expect(axios.get).toHaveBeenCalledWith(BASE_URL)
  })
})