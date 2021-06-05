import './Character.css'

export const CharacterFull = ({char , setActiveCharacter}) => {
    const handleClose = () => {
        setActiveCharacter(undefined)
    }
    
    return (
      <div className="card-full">
        <div className="card-grid">
          <section className="header">
            <h2>{char.fields.Name.toUpperCase()}</h2>
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>
          </section>
          <section className="character-img">
            <div className="img-container">
              <img
                src={char.fields["Inspirational images"][0].url}
                alt="character illustration"
              />
            </div>
          </section>
          <section className="description">
            <div className="tagline">
              <p>
                <em>{char.fields.Tagline}</em>
              </p>
            </div>
            <div className="bio-text">
              <p>
                <strong>Age: </strong>
                {char.fields.Age}
              </p>
              <p>
                <strong>Tribe: </strong> {char.fields["Name (from Tribe)"]}
              </p>
              <p>
                <strong>Variant: </strong>
                {char.fields["Name (from Species)"]}
              </p>
            </div>
            <div className="fullbiography">
              <p>{char.fields.Biography ? char.fields.Biography : "This person is yet a mystery..."}</p>
            </div>
          </section>
        </div>
      </div>
    );
}
