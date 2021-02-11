import Character from "./Character";


const CharacterList = ({ characters }) => {
  return (
      <div className="container">
        {/* rendering logic */}
        <div className="cards">
          {characters.map((char) => (
            <Character key={char.id} char={char}/>
          ))}
        </div>
      </div>
    )
  
};

export default CharacterList
