import { useContext } from "react"
import { notesContext } from '../App';
import Note from "./Note";

const Notes = () => {
  const notes = useContext(notesContext)
  
  return(
    <div className="content-wrapper">
      <span className="theme">Yo</span>Notes | You have {notes.notes.length} notes<br />
      {/* <button className="btn" onClick={() => setNotes(notes + 1)}>Add</button> */}
      {
        notes.notes.map((note, index) => {
          return(
            <Note 
              key={note.id} 
              id={note.id} 
              title={note.title} 
              text={note.text} 
              created={note.created}
            />
          )
        })
      }
    </div>
  )
}

export default Notes