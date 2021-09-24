import "../styles/App.css";
import data from "../data/contacts.json";
import { useState } from "react";

function App() {
  const htmlClubList = data.map((oneClub, index) => (
    <li key={index} className="club__item">
      <p className="club__name">
        #{index}: {oneClub.name}
      </p>
      <p className="club__weekday">
        Abierto entre semana: {oneClub.openOnWeekdays}
      </p>
      <p className="club__weekend">
        Abierto el fin de semana: {oneClub.openOnWeekend}
      </p>
    </li>
  ));

  const [newName, setNewName] = useState("");
  const [newWeekday, setWeekday] = useState("");
  const [newWeekend, setWeekend] = useState("");

  const handleNewName = (ev) => {
    setNewName(ev.currentTarget.value);
  };

  const handleWeekday = (ev) => {
    setWeekday(ev.currentTarget.checked);
  };

  const handleWeekend = (ev) => {
    setWeekend(ev.currentTarget.checked);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    console.log("click");
  };

  const newClub = {
    name: newName,
    openOnWeekdays: newWeekday,
    openOnWeekend: newWeekend,
  };

  console.log(newClub);

  return (
    <>
      <header className="header">
        <h1 className="header__title">Mis Clubs</h1>
      </header>
      <main>
        <ul className="club__list">{htmlClubList}</ul>
        <form className="new-club__form">
          <h2 className="new-club__title">Añade un nuevo club</h2>
          <label htmlFor="name"> Nombre del club</label>
          <input
            className="new-club__input"
            type="text"
            name="name"
            id="name"
            onChange={handleNewName}
            value={newName}
          />
          <label htmlFor="weekday">¿Abre entre semana?</label>
          <input
            type="checkbox"
            id="weekday"
            name="weekday"
            onChange={handleWeekday}
          />
          <label htmlFor="weekend">¿Abre los fines de semana?</label>
          <input
            type="checkbox"
            id="weekend"
            name="weekend"
            onChange={handleWeekend}
          />
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={handleClick}
          />
        </form>
      </main>
    </>
  );
}

export default App;
