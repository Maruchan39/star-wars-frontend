import { Reducer } from "redux";
import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
  FilmsActionTypes,
  Film,
} from "./actions";

export interface FilmsState {
  films: any[];
  loading: boolean;
  error: string | null;
}

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
};

const filmsReducer: Reducer<FilmsState, FilmsActionTypes> = (
  state = initialState,
  action
) => {
  console.log(state.films)
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
    default:
      return state;
  }
};

export default filmsReducer;
