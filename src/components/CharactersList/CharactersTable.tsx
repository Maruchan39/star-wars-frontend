import { FC } from "react";
import { Character } from "../../store/actions/charactersActions";
import { CharacterRow } from "./CharacterRow";
import "./CharactersTable.css";

interface CharactersTableProps {
  characters: Character[] | null;
}

export const CharactersTable: FC<CharactersTableProps> = ({ characters }) => {
  return (
    <div>
      {characters && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Gender</th>
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => {
              const { birthYear, name, mass, gender } = character;
              const rowIdentifier = `${name}_${birthYear}`;
              return (
                <CharacterRow
                  key={rowIdentifier}
                  name={name}
                  birthYear={birthYear}
                  mass={mass}
                  gender={gender}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
