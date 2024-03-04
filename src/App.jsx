import { useState } from "react";
import "./App.css";
import DisplayToDoList from "./components/DisplayToDoList";
import AddNewToDo from "./components/AddNewToDo";

function App() {
  const [toDoData, setToDoData] = useState([]);

  const handleAddNewToDo = (newToDo) => {
    setToDoData((prevToDoData) => [
      ...prevToDoData,
      {
        id: prevToDoData.length,
        data: newToDo,
        isChecked: false,
      },
    ]);
  };

  const handleDeleteToDo = (id) => {
    setToDoData((prevToDoData) => prevToDoData.filter((toDo) => toDo.id != id));
  };

  const handleEditToDo = (id, newData, isChecked) => {
    setToDoData((prevToDoData) =>
      prevToDoData.map((toDo) => {
        if (toDo.id === id) {
          toDo.data = newData;
          toDo.isChecked = isChecked;
        }
        return toDo;
      })
    );
  };

  return (
    <>
      <div className="toDoContainer">
        <h1 className="toDoHeading">To-Do List</h1>
        <AddNewToDo handleAddNewToDo={handleAddNewToDo} />
        <hr />
        <DisplayToDoList
          toDoData={toDoData}
          handleDeleteToDo={handleDeleteToDo}
          handleEditToDo={handleEditToDo}
        />
      </div>
    </>
  );
}

export default App;
