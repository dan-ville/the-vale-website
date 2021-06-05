import Character from "./Character";
import GetCharacters from "../logic/GetCharacters";
import { useState } from "react";
import { CharacterFull } from "./CharacterFull";

const CharacterGallery = () => {
  const { characters } = GetCharacters();
  const [activeCharacter, setActiveCharacter] = useState(undefined);
  
  return (
    <div className="container">
      <h2 className="charListTitle">CHARACTERS</h2>
      {/* rendering logic */}
      {activeCharacter && (
        <CharacterFull
          setActiveCharacter={setActiveCharacter}
          char={activeCharacter}
        />
      )}
      {!activeCharacter && (
        <div className="cards">
          {characters &&
            characters.map((char) => (
              <Character
                key={char.id}
                char={char}
                setActiveCharacter={setActiveCharacter}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default CharacterGallery
