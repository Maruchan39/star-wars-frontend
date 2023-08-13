import { FC } from "react";

interface CharacterRowProps {
  name: string;
  birth_year: string;
  gender: string;
  mass: string;
}

export const CharacterRow: FC<CharacterRowProps> = ({
  name,
  birth_year,
  gender,
  mass,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{birth_year}</td>
      <td>{gender}</td>
      <td>{mass}</td>
    </tr>
  );
};
