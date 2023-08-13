import { Action } from "redux";

export const FETCH_FILMS_REQUEST = "FETCH_FILMS_REQUEST";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_FAILURE = "FETCH_FILMS_FAILURE";
export const SELECT_FILM = "SELECT_FILM";

interface FetchFilmsRequestAction extends Action<typeof FETCH_FILMS_REQUEST> {}
interface FetchFilmsSuccessAction extends Action<typeof FETCH_FILMS_SUCCESS> {
  payload: Film[];
}
interface FetchFilmsFailureAction extends Action<typeof FETCH_FILMS_FAILURE> {
  payload: string;
}

interface SelectFilmAction extends Action<typeof SELECT_FILM> {
  payload: number;
}

export type FilmsActionTypes =
  | FetchFilmsRequestAction
  | FetchFilmsSuccessAction
  | FetchFilmsFailureAction
  | SelectFilmAction;

export interface Film {
  characters: string[];
  episode_id: number;
  release_date: string;
  title: string;
}

export const fetchFilmsRequest = (): FetchFilmsRequestAction => ({
  type: FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = (films: Film[]): FetchFilmsSuccessAction => ({
  type: FETCH_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilmsFailure = (error: any): FetchFilmsFailureAction => ({
  type: FETCH_FILMS_FAILURE,
  payload: error,
});

export const selectFilm = (film: number): SelectFilmAction => ({
  type: SELECT_FILM,
  payload: film,
});
