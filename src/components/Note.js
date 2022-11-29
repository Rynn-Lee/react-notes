const Note = (props) => {
  return(
    <div className="note">
      <span className="note-title">{props.title}</span><hr />
      <span className="note-text"><i className="fa-solid fa-quote-left theme"></i> {props.text}</span>
      <span className="note-created"><i className="fa-regular fa-clock theme"></i> {props.created}</span>
    </div>
  )
}

export default Note