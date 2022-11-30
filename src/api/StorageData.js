const date = new Date()
const day = date.getDay()
const month = date.getMonth()+1
const year = date.getFullYear()

export const dbService = {
  fetchAll(){
    if(!localStorage.getItem('notes')){
      localStorage.setItem('notes', JSON.stringify([{id: 0, title: "Welcome!", text: "This is your first note!", created: day + "/" + month + "/" + year}]))
    }
    const storage = localStorage.getItem('notes')
    const parsedStorage = JSON.parse(storage)
    const readyNotes = parsedStorage.map(item => {
      return {
        id: item.id,
        title: item.title,
        text: item.text,
        created: item.created,
      }
    })
    return readyNotes
  },
  addItem(note){
    localStorage.setItem('notes', JSON.stringify(note))
  }
}