import { useState, useContext } from "react"
import { notesContext } from '../App';

const Header = (onClick) => {
    const notes = useContext(notesContext)

    const setNewNote = () => {
        const noteNew = {id: Math.max(...notes.notes.map(o => o.id)) + 1, title: "Finally", text: "Not it works! Yeeeeeeeea", created: "idk"}
        notes.setNotes([noteNew, ...notes.notes])
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