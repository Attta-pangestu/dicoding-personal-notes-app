import React from "react";
import style from "../styles/input.module.css"
import Input from "./Input";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title: '',
            body: '',
            archived: false, 
            createdAt: ''
        }
    }
    
    render (){
        return (
            <form className={style.noteForm} >
                <h2 className={style.note_form__heading}>Tulis dan Buat Note</h2>
                <small className={style.note_form__counter_word}>Remaining Character <span className={style.remain_character}>50</span></small>
                <Input type="text" placeholder="Judul note..." />
                <Input type="textarea" placeholder="Tulis note kamu...." />
                <Input type="submit"  value="Simpan Catatan" />
            </form>
        );
    }
}


export default NoteInput;