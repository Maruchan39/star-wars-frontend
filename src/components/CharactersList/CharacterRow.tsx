import { FC } from "react";
import "./CharacterRow.css";

interface CharacterRowProps {
  name: string;
  birthYear: string;
  gender: string;
  mass: string;
}

export const CharacterRow: FC<CharacterRowProps> = ({
  name,
  birthYear,
  gender,
  mass,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{birthYear}</td>
      <td>{gender}</td>
      <td>{mass}</td>
    </tr>
  );
};
