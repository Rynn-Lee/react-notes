import { useEffect, useState } from "react"
import Note from "./Note";

const Notes = () => {
  const [counter, setCounter] = useState(0);
  
  const [notes, setNotes] = useState([
    {id: 0, title: "Create this shit", text: "Create notebook app... Somehow", created: "today"},
    {id: 1, title: "Halp", text: "Call Sketch for help!", created: "yesterday"},
    {id: 2, title: "My note 3", text: "Some text 3", created: "21 November"}
  ])
  return(
    <div className="content-wrapper">
      <span className="theme">Yo</span>Notes | You have {notes.length} notes<br />
      {/* <button className="btn" onClick={() => setNotes(notes + 1)}>Add</button> */}
      {
          notes.map((note, index) => {
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