import { useEffect, useState, createContext} from 'react';
import './App.sass';
import Header from './components/Header.js';
import Notes from './components/Notes';
import { dbService } from './api/StorageData'

export const notesContext = createContext();

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    setNotes(dbService.fetchAll())
  }, [])
  
  return (
    <div className="App">
      <notesContext.Provider value={{notes, setNotes,}}>
        <Header />
        <Notes />
      </notesContext.Provider>
    </div>
  );
}

export default App;
