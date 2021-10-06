import "../styles/App.scss";
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
    setNewName("");
    setWeekday(false);
    setWeekend(false);
  };

  const handleDelete = (ev) => {
    ev.preventDefault();
    data.splice(ev.currentTarget.parentElement.id, 1);
    setData([...data]);
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
            {" "}
            <h4 className="club__name">
              #{index}: {oneClub.name}
            </h4>
            <p className="club__weekday club__description">
              Abierto entre semana: {oneClub.openOnWeekdays ? "Sí" : "No"}
            </p>
            <p className="club__weekend club__description">
              Abierto el fin de semana: {oneClub.openOnWeekend ? "Sí" : "No"}
            </p>{" "}
            <span
              onClick={handleDelete}
              className="club__delete icon fas fa-times"
            ></span>
          </li>
        );
      });
  };
  return (
    <>
      <header className="header">
        <h1 className="header__title">Mis Clubs</h1>
      </header>
      <main>
        <form action="">
          <select
            className="club__filter"
            value={filter}
            onChange={handleFilter}
          >
            <option value="all">Todos</option>
            <option value="openOnWeekDays">Abre entre semana</option>
            <option value="openOnWeekends">Abre los fines de semana</option>
          </select>
        </form>
        <ul className="club__list">{htmlClubList()}</ul>{" "}
        <h2 className="new-club__title">Añade un nuevo club</h2>
        <form className="new-club__form">
          <label htmlFor="name" className="new-club__text">
            {" "}
            Nombre del club
          </label>
          <input
            className="new-club__input"
            required
            type="text"
            name="name"
            id="name"
            onChange={handleNewName}
            value={newName}
          />

          <input
            className="new-club__checkbox"
            type="checkbox"
            id="weekday"
            name="weekday"
            checked={newWeekday}
            onChange={handleWeekday}
          />
          <label htmlFor="weekday" className="new-club__text">
            ¿Abre entre semana?
          </label>

          <input
            className="new-club__checkbox"
            type="checkbox"
            id="weekend"
            name="weekend"
            checked={newWeekend}
            onChange={handleWeekend}
          />
          <label htmlFor="weekend" className="new-club__text">
            ¿Abre los fines de semana?
          </label>
          <input
            className="new-club__input"
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
