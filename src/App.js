import Navbar from "./components/Navbar";
import CharacterGallery from "./components/Character/CharacterGallery";
import Summary from './components/Summary';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <h1 className="mainTitle">The Vale</h1>
      <Summary/>
      <CharacterGallery />
    </div>
  );
}

export default App;
