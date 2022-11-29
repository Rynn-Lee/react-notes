import { useState } from "react"

const Header = (onClick) => {

    return(
        <nav className="nav-panel">
            <span className="nav-button">_RynnLee <i className="fa fa-solid fa-code theme"></i> YoNotes</span>
            <div className="nav-buttons">
                <span className="nav-button">New Note <i className="fa fa-solid fa-pen theme"></i></span>
            </div>
        </nav>
    )
}

export default Header