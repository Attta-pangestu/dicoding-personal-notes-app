import React from "react";
import style from "../styles/NoteList.module.css";
import CardNote from "./Card-Note";

function NotesList({sectionTitle,notesArray, onDeleteHandler, onArchiveHandler}){
    
    return (
        <section>
            <h2 className={style.heading}>{sectionTitle}</h2>
            <div className={style.list_container}>
                {notesArray.map((note) => (
                    <CardNote key={note.id} {...note} onArchiveHandler={onArchiveHandler} onDeleteHandler={onDeleteHandler} />
                ))}
            </div>
            
        </section>
    );
}

export default NotesList;