import FilterButtons from './components/FilterButtons'
// import charactersDB from "./data/db.js";

import { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
// import Airtable from 'airtable'
import axios from 'axios';
import Summary from './components/Summary';
import dotenv from 'dotenv';
const { REACT_APP_AIRTABLE_URL, REACT_APP_AIRTABLE_KEY } = process.env

function App() {
  const [characters, setCharacters] = useState([]);
  // const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const results = await axios.get(REACT_APP_AIRTABLE_URL, {
        headers: { Authorization: `Bearer ${REACT_APP_AIRTABLE_KEY}` },
      });
     
     
      // airtable returns the data as an object so this turns it into an array
      const records = Object.values(results.data.records)
      
      setCharacters(records);
    }
    
    getCharacters();
  
  }, []);

  
  // // sets the data for how many filter buttons need to be rendered
  // const allTribes = ["All", ...new Set(characters.map((char) => char.tribe))];

  // // configures which cards are shown by updating the state of the CharacterList component 'characters' prop
  // // takes a button component as argument
  // const filter = (button) => {
  //   // if the "All" button is clicked, characters is set to the initial value of charactersDB
  //   if (button === "All") {
  //     setCharacters(characters);
  //     return;
  //   }

  //   // if any other button is clicked, it will show only character cards with a matching tribe name for that button
  //   const filteredCharacters = characters.filter(
  //     (char) => char.tribe === button
  //   );
  //   setCharacters(filteredCharacters);
  // };

  
  console.log(characters);
  return (
    <div className="App">
      <Navbar />
      <h1 className="mainTitle">The Vale</h1>
      <Summary/>
      <h2 className="charListTitle">CHARACTERS</h2>
      {/* <div className="tribe-filters-row">
        <FilterButtons buttons={buttons} filter={filter} />
      </div> */}
      {characters && <CharacterList characters={characters} />}
      {/* <CharacterList characters={characters}/> */}
    </div>
  );
}

export default App;
