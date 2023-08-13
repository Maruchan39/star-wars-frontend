import { FC } from "react";
import { Character } from "../../store/actions/charactersActions";
import { CharacterRow } from "./CharacterRow";

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
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => {
              const { birth_year, name, mass, gender } = character;
              const rowIdentifier = `${name}_${birth_year}`;
              return (
                <CharacterRow
                  key={rowIdentifier}
                  name={name}
                  birth_year={birth_year}
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
