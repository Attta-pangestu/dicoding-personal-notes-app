import React from "react";
import Header from "./components/Header";
import NoteInput from "./components/Note-Input";
import NotesList from "./components/Notes-list";
import { getInitialData, showFormattedDate } from "./utils/data-notes";


// Import style
import style from './styles/app.module.css';


class App extends React.Component {
  constructor() {
    super();
    const notesArray = getInitialData();
    const formattedNotesArray = this.formatNotesArray(notesArray) ;
    const archivedArray = this.filterArchiveNotes(formattedNotesArray,true);
    const unarchiveArray = this.filterArchiveNotes(formattedNotesArray, false);
    
    this.state = {
      notesArray : formattedNotesArray,
      archivedArray :archivedArray,
      unarchivedArray:unarchiveArray,
    }

    this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
  
  }

  filterArchiveNotes(noteArray, filter) {
    return noteArray.filter(note => note.archived === filter);
  }

  formatNotesArray(noteArray) {
    return noteArray.map(note => ({...note,createdAt: showFormattedDate(note.createdAt) }));
  }

  onAddNotesEventHandler({...newNotes}) {
    const formattedDate = this.formatNotesArray([newNotes]);
    console.log(formattedDate);
    this.setState((prevState) => ({notesArray : [...prevState.notesArray, formattedDate[0] ]}))
    
  }

  onDeleteNoteEventHandler(id) {
    this.setState({
      notesArray : this.state.notesArray.filter(note => (note.id !==id))
    })
  }

  onArchivedEventHandler(id) {
    this.setState({})
  }
  

  render () {
    console.log(this.state.archivedArray);
    return (
      <React.Fragment>
        <Header />
        <main className={style.main}>
          <NoteInput  addNotes={this.onAddNotesEventHandler}/>
          <NotesList sectionTitle={"Active Note"} notesArray={this.state.unarchivedArray} onArchiveHandler={this.onArchivedEventHandler} onDeleteHandler={this.onDeleteNoteEventHandler} />
          <NotesList sectionTitle={"Archived Note"} notesArray={this.state.archivedArray} onArchiveHandler={this.onArchivedEventHandler} onDeleteHandler={this.onDeleteNoteEventHandler} />
          
        </main>
      </React.Fragment>
    );
  }
}

export default App;
