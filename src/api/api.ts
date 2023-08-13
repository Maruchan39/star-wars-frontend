import { Dispatch } from "redux";
import {
  fetchFilmsRequest,
  fetchFilmsSuccess,
  fetchFilmsFailure,
} from "../store/actions/filmsActions";
import {
  fetchCharactersFailure,
  fetchCharactersRequest,
  fetchCharactersSuccess,
} from "../store/actions/charactersActions";

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

export const fetchCharacters = async (
  dispatch: Dispatch,
  characters: string[]
) => {
  const charactersData = [];
  dispatch(fetchCharactersRequest());
  for (const url of characters) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      charactersData.push(data);
    } catch (error) {
      dispatch(fetchCharactersFailure(error));
    }
  }

  dispatch(fetchCharactersSuccess(charactersData));
};
