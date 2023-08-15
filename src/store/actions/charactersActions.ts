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
  birthYear: string;
  gender: string;
  mass: string;
  name: string;
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
  error: Error
): FetchCharactersFailureAction => ({
  type: FETCH_CHARACTERS_FAILURE,
  payload: error.message,
});
