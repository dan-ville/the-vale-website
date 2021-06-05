import React from 'react'
import './Character.css'

const Character = ({ char , setActiveCharacter }) => {
  const handleClick = (id) => {
    console.log(id)
    setActiveCharacter(char);
  }

  return (
    <div className="card-mini" onClick={() => handleClick(char.id)}>
      <div>
        <h3 className="name">{char.fields.Name.toUpperCase()}</h3>
        <p className="tribe">Tribe: {char.fields["Name (from Tribe)"]}</p>
      </div>
      <div className="img-div">
        {char.fields["Inspirational images"] && (
          <img
            className="card__img"
            src={char.fields["Inspirational images"][0].url}
            alt={char.fields.Name}
          ></img>
        )}
      </div>
    </div>
  );
}

export default Character
