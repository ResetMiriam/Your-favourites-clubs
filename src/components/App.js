import "../styles/App.css";
import initialData from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [data, setData] = useState(initialData);
  const [newName, setNewName] = useState("");
  const [newWeekday, setWeekday] = useState(false);
  const [newWeekend, setWeekend] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleNewName = (ev) => {
    setNewName(ev.target.value);
  };

  const handleWeekday = (ev) => {
    setWeekday(ev.target.checked);
  };

  const handleWeekend = (ev) => {
    setWeekend(ev.target.checked);
  };
  const handleFilter = (ev) => {
    setFilter(ev.target.value);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const newClub = {
      name: newName,
      openOnWeekdays: newWeekday,
      openOnWeekend: newWeekend,
    };

    setData([...data, newClub]);
  };

  const htmlClubList = () => {
    return data
      .filter((oneClub) => {
        if (filter === "openOnWeekDays") {
          return oneClub.openOnWeekdays === true;
        } else if (filter === "openOnWeekends") {
          return oneClub.openOnWeekend === true;
        }
        return true;
      })
      .map((oneClub, index) => {
        return (
          <li key={index} className="club__item">
            <p className="club__name">
              #{index}: {oneClub.name}
            </p>
            <p className="club__weekday">
              Abierto entre semana: {oneClub.openOnWeekdays ? "Sí" : "No"}
            </p>
            <p className="club__weekend">
              Abierto el fin de semana: {oneClub.openOnWeekend ? "Sí" : "No"}
            </p>
            <button>X</button>
          </li>
        );
      });
  };
  return (
    <>
      <header className="header">
        <h1 className="header__title">Mis Clubs</h1>
        <form action="">
          <select value={filter} onChange={handleFilter}>
            <option value="all">Todos</option>
            <option value="openOnWeekDays">Abre entre semana</option>
            <option value="openOnWeekends">Abre los fines de semana</option>
          </select>
        </form>
      </header>
      <main>
        <ul className="club__list">{htmlClubList()}</ul>
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
            checked={newWeekday}
            onChange={handleWeekday}
          />
          <label htmlFor="weekend">¿Abre los fines de semana?</label>
          <input
            type="checkbox"
            id="weekend"
            name="weekend"
            checked={newWeekend}
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
