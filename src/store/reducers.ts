import { Reducer } from "redux";
import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
  SELECT_FILM,
  FilmsActionTypes,
  Film,
} from "./actions";

export interface FilmsState {
  films: Film[];
  loading: boolean;
  error: string | null;
  selectedFilm: number;
}

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
  selectedFilm: 4,
};

const filmsReducer: Reducer<FilmsState, FilmsActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: action.payload,
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECT_FILM:
      return {
        ...state,
        selectedFilm: action.payload,
      };
    default:
      return state;
  }
};

export default filmsReducer;
