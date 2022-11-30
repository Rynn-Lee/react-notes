import { useContext } from "react"
import { dbService } from "../api/StorageData";
import { notesContext } from '../App';

const Header = () => {
    const notes = useContext(notesContext)

    const date = new Date()
    const day = date.getDay()
    const month = date.getMonth()+1
    const year = date.getFullYear()

    const setNewNote = () => {
        const maxid = Math.max(...notes.notes.map(o => o.id)) + 1
        const noteNew = {id: maxid, title: "Note" + maxid, text: "You added a new note! Live with it!", created: day + "/" + month + "/" + year}
        const sendNotes = [noteNew, ...notes.notes]
        console.log(sendNotes)
        notes.setNotes(sendNotes)
        dbService.addItem(sendNotes)
    }

    return(
        <nav className="nav-panel">
            <span className="nav-button">_RynnLee <i className="fa fa-solid fa-code theme"></i> YoNotes</span>
            <div className="nav-buttons">
                <span className="nav-button" onClick={() => setNewNote()}>New Note <i className="fa fa-solid fa-pen theme"></i></span>
            </div>
        </nav>
    )
}

export default Header