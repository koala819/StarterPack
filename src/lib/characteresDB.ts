import { CharacterResponse } from "@/src/types/models";

/**
 * Retrieves character data from the character database API.
 *
 * @return {Promise<CharacterResponse>} A promise that resolves with the character data.
 */
export async function characteresDB(): Promise<CharacterResponse> {
  try {
    const response = await fetch("https://dragonball-api.com/api/characters");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
