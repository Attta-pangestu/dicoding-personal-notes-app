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
            createdAt: '',
        }
        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
    }

    onTitleEventHandler(event) {
        const titleVal = event.target.value ; 
        const limitChar = 50;
        // Check body length and set condition
        const remainCharacter = titleVal.length - limitChar;
        if(remainCharacter !== 0 ){
            this.setState({
                title : titleVal,
            });
        } 
        
    }

    onBodyEventHandler(event) {
        this.setState({
            body : event.target.value, 
        }); 
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        const timeStamp = new Date().toISOString();
        this.setState({
            createdAt  : timeStamp,
            id : timeStamp,
        }, () => {
            this.props.addNotes(this.state);
        });
    }

    remainCharacterInput(charInput,limitChar) {
        const currentLenghtChar = charInput.length;
        return limitChar - currentLenghtChar;
    }
    
    render (){
        return (
            <form className={style.noteForm} onSubmit={this.onSubmitEventHandler} >
                <h2 className={style.note_form__heading}>Tulis dan Buat Note</h2>
                <small className={style.note_form__counter_word}>Remaining Character <span className={style.remain_character}>{50-this.state.title.length}</span></small>
                <Input type="text" placeholder="Judul note..."  onChange={this.onTitleEventHandler} value={this.state.title} />
                <Input type="textarea" placeholder="Tulis note kamu...." onChange={this.onBodyEventHandler} />
                <Input type="submit"  value="Simpan Catatan" />
            </form>
        );
    }
}


export default NoteInput;