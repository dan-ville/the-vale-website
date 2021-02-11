import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
// import Airtable from 'airtable'
import axios from 'axios';
import Summary from './components/Summary';
const { REACT_APP_AIRTABLE_URL, REACT_APP_AIRTABLE_KEY } = process.env

function App() {
  
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);


  const getCharacters = async () => {
    const results = await axios.get(REACT_APP_AIRTABLE_URL, {
      headers: { Authorization: `Bearer ${REACT_APP_AIRTABLE_KEY}` },
    });
    if (results.status === 200) {
      console.log(`GET Status returned: ${results.status}`);
      // airtable returns the data as an object so this turns it into an array
      const records = Object.values(results.data.records);

      setData(records);
      setCharacters(data);
    } else {
      console.log(results.status)
    }
    
  };

  useEffect(() => {
    getCharacters();
  }, []);


  
  return (
    <div className="App">
      <Navbar />
      <h1 className="mainTitle">The Vale</h1>
      <Summary/>
      <h2 className="charListTitle">CHARACTERS</h2>
      {/* <div className="tribe-filters-row" /> */}
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
