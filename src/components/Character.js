import React from 'react'

const Character = ({ char }) => {
    return (
          <div className="card" key={char.id}>
            <h3 className="name">{char.fields.Name.toUpperCase()}</h3>
            <p className="tribe">Tribe: {char.fields["Name (from Tribe)"]}</p>
            <div className="img-div">
              {char.fields["Inspirational images"] && (
                <img src={char.fields["Inspirational images"][0].url}></img>
              )}
            </div>
          </div>
    );
}

export default Character
