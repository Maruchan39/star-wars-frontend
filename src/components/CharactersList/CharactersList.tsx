import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharactersState } from "../../store/reducers/charactersReducer";
import { fetchCharacters } from "../../api/api";
import { CharactersTable } from "./CharactersTable";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import "./CharactersList.css";

interface CharactersListProps {
  charactersList: string[] | null;
}

export const CharactersList: FC<CharactersListProps> = ({ charactersList }) => {
  const dispatch = useDispatch();
  const state = useSelector((state: { characters: CharactersState }) => state);
  const { characters, loading, error } = state.characters;

  useEffect(() => {
    charactersList && fetchCharacters(dispatch, charactersList);
  }, [dispatch, charactersList]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="charactersListContainer">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="charactersListContainer">
      <CharactersTable characters={characters} />
    </div>
  );
};
