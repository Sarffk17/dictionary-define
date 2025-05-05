import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary
        </header>
        <main>
          <Dictionary />
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
