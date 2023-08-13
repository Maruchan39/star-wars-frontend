import { Action } from "redux";

export const FETCH_CHARACTERS_REQUEST = "FETCH_CHARACTERS_REQUEST";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

interface FetchCharactersRequestAction
  extends Action<typeof FETCH_CHARACTERS_REQUEST> {}
interface FetchCharactersSuccessAction
  extends Action<typeof FETCH_CHARACTERS_SUCCESS> {
  payload: Character[];
}
interface FetchCharactersFailureAction
  extends Action<typeof FETCH_CHARACTERS_FAILURE> {
  payload: string;
}

export type CharactersActionTypes =
  | FetchCharactersRequestAction
  | FetchCharactersSuccessAction
  | FetchCharactersFailureAction;

export interface Character {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export const fetchCharactersRequest = (): FetchCharactersRequestAction => ({
  type: FETCH_CHARACTERS_REQUEST,
});

export const fetchCharactersSuccess = (
  characters: Character[]
): FetchCharactersSuccessAction => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: characters,
});

export const fetchCharactersFailure = (
  error: any
): FetchCharactersFailureAction => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error,
});
