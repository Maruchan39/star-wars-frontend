import { Dispatch } from "redux";
import {
  fetchFilmsRequest,
  fetchFilmsSuccess,
  fetchFilmsFailure,
} from "../store/actions";

export const fetchFilms = async (dispatch: Dispatch) => {
  dispatch(fetchFilmsRequest());
  try {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    dispatch(fetchFilmsSuccess(data.results));
  } catch (error) {
    dispatch(fetchFilmsFailure(error));
  }
};
