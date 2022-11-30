import { useEffect, useState, createContext} from 'react';
import './App.sass';
import Header from './components/Header.js';
import Notes from './components/Notes';

export const notesContext = createContext();

function App() {
  
  const [notes, setNotes] = useState([
    {id: 3, title: "useContext", text: "Gotta learn how to use createConext/useContext", created: "today"},
    {id: 2, title: "My note 3", text: "Some text 3", created: "21 November"},
    {id: 1, title: "Halp", text: "Call Sketch for help!", created: "yesterday"},
    {id: 0, title: "Create this shit", text: "Create notebook app... Somehow", created: "today"}
  ])

  return (
    <div className="App">
      <notesContext.Provider value={{notes, setNotes}}>
        <Header/>
        <Notes />
      </notesContext.Provider>
    </div>
  );
}

export default App;
