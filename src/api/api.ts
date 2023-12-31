import { Dispatch } from "redux";
import camelcaseKeys from "camelcase-keys";
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

const FILMS_URL = "https://swapi.dev/api/films";

export const fetchFilms = async (dispatch: Dispatch) => {
  dispatch(fetchFilmsRequest());
  try {
    const response = await fetch(FILMS_URL);
    const data = await response.json();
    const parsedResults = camelcaseKeys(data.results);
    dispatch(fetchFilmsSuccess(camelcaseKeys(parsedResults)));
  } catch (error) {
    dispatch(fetchFilmsFailure(error as Error));
  }
};

export const fetchCharacters = async (
  dispatch: Dispatch,
  characters: string[]
) => {
  dispatch(fetchCharactersRequest());
  const charactersData = await Promise.all(
    characters.map(async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        dispatch(fetchCharactersFailure(error as Error));
      }
    })
  );

  const parsedCharactersData = camelcaseKeys(charactersData);
  dispatch(fetchCharactersSuccess(parsedCharactersData));
};
