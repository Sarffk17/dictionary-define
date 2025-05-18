import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          DefineDictionary.com
          <h4>Words—so innocent and powerless as they are, as standing in a dictionary, how potent for good and evil they become, in the hands of one who knows how to combine them</h4>
        </header>
        <main>
          <Dictionary defaultKeyword="Psalm"  />
        </main>
        <footer className="App-footer">
        This dictonary project is coded by 
        <a 
        href="https://github.com/Sarffk17" >
         Kelly Sarff 
        </a>
         and is open-sourced on 
        <a 
        href="https://github.com/Sarffk17/dictionary-define" >
         GithUb </a>
         and is hosted on
       <a 
        href="https://dictionary-define.netlify.app/" >
         Netlify </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
