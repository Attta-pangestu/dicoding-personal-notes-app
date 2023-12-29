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

    this.state = {
      notesArray : formattedNotesArray,
      
    }

    this.onAddNotesEventHandler = this.onAddNotesEventHandler.bind(this);
    this.onDeleteNoteEventHandler = this.onDeleteNoteEventHandler.bind(this);
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
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
    this.setState((prevState) => {
      const updatedNotesArray = prevState.notesArray.filter(note => note.id !== id);
      return {
        notesArray: updatedNotesArray,
      };
    }, () => {
      console.log(this.state.notesArray);
    });
  }
  

  onArchivedEventHandler(id,isToArchive) {
    if(isToArchive) {
      this.setState((prevState) => {
        const updatedNotesArray = prevState.notesArray.map(note => note.id === id ? {...note, archived:true} : note)  
      return {
        notesArray: updatedNotesArray,
      }});
    } else {
      this.setState((prevState) => {
        const updatedNotesArray = prevState.notesArray.map(note => note.id === id ? {...note, archived:false} : note);
        return {
          notesArray : updatedNotesArray
        }
      })
    }
   
  }
  

  render () {
    return (
      <React.Fragment>
        <Header />
        <main className={style.main}>
          <NoteInput  addNotes={this.onAddNotesEventHandler}/>
          <NotesList sectionTitle={"Active Note"} notesArray={this.filterArchiveNotes(this.state.notesArray,false)} onArchiveHandler={this.onArchivedEventHandler} onDeleteHandler={this.onDeleteNoteEventHandler} />
          <NotesList sectionTitle={"Archived Note"} notesArray={this.filterArchiveNotes(this.state.notesArray,true)} onArchiveHandler={this.onArchivedEventHandler} onDeleteHandler={this.onDeleteNoteEventHandler} />
          
        </main>
      </React.Fragment>
    );
  }
}

export default App;
