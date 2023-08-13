import { Action } from 'redux';

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';

interface FetchFilmsRequestAction extends Action<typeof FETCH_FILMS_REQUEST> {}
interface FetchFilmsSuccessAction extends Action<typeof FETCH_FILMS_SUCCESS> {
  payload: any[];
}
interface FetchFilmsFailureAction extends Action<typeof FETCH_FILMS_FAILURE> {
  payload: string;
}

export type FilmsActionTypes =
  | FetchFilmsRequestAction
  | FetchFilmsSuccessAction
  | FetchFilmsFailureAction;

export interface Film {
  id: number;
  title: string;
}

export const fetchFilmsRequest = (): FetchFilmsRequestAction => ({
  type: FETCH_FILMS_REQUEST,
});

export const fetchFilmsSuccess = (films: any[]): FetchFilmsSuccessAction => ({
  type: FETCH_FILMS_SUCCESS,
  payload: films,
});

export const fetchFilmsFailure = (error: any): FetchFilmsFailureAction => ({
  type: FETCH_FILMS_FAILURE,
  payload: error,
});