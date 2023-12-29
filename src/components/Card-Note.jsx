import React from "react";
import Button from "./Button";
import style from "../styles/card.module.css";

function CardNote({id, title, createdAt, body, archived, onDeleteHandler, onArchiveHandler}) {
  return(
      <article id={id} className={style.card} >
        <header className={style.card__header}>
          <h3 className={style.card__header__heading}>{title}</h3>
          <small className={style.card__header__date}>{createdAt}</small>
          <p className={style.card__body}>{body}</p>
        </header>
        <footer className={style.card__footer}>
          <Button label={"Delete"} onClick={() => {onDeleteHandler(id)}}  />
          <Button onClick={() => onArchiveHandler(id) }  label={archived ? "Unarchived" : "Archived"} />
        </footer>
      </article>
    );
}

export default CardNote;
