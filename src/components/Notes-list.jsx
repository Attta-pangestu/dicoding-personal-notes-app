import React from "react";
import style from "../styles/NoteList.module.css";
import CardNote from "./Card-Note";

function NotesList({sectionTitle,notesArray, onDeleteHandler, onArchiveHandler}){
    console.log(notesArray.length);
    return (
        <section>
            <h2 className={style.heading}>{sectionTitle}</h2>
            {notesArray.length ? 
                <div className={style.list_container}>
                    {notesArray.map((note) => (
                        <CardNote key={note.id} {...note} onArchiveHandler={onArchiveHandler} onDeleteHandler={onDeleteHandler} />
                    ))}
                </div> :
                <div className={style.list_container}>
                    <p>Tidak ada catatan</p>
                </div>
            
            }
            
            
        </section>
    );
}

export default NotesList;