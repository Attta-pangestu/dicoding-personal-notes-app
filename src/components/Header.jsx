import React from "react";
import style from "../styles/header.module.css";
import Input from "./Input";
function Header() {
  return (
    <header className={style.container}>
      <h1 className={style.heading}>Atha&apos;s Note</h1>
      <Input
        type="search"
        id="cari_note"
        name="cari_note"
        placeholder="Cari Catatan..."
      />
    </header>
  );
}

export default Header;
