import React from "react";
import style from "../styles/card.module.css";

function CardNote({id, title, createdAt, body, archived}) {
    return(
      <article id={id} className={style.card} >
        <header className={style.card__header}>
          <h3 className={style.card__header__heading}>{title}</h3>
          <small className={style.card__header__date}>{createdAt}</small>
        </header>
        <p className={style.card__body}>{body}</p>
        <footer className={style.card__footer}>
          <button>Delete</button>
          <button>{archived? "unarchived" : "archive"}</button>
        </footer>
      </article>
    );
}

export default CardNote;
