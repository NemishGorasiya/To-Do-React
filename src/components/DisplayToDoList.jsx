import React from "react";
import ToDo from "./ToDo";

const DisplayToDoList = ({ toDoData, handleDeleteToDo, handleEditToDo }) => {
  return (
    <div className="toDoList">
      {toDoData.length === 0 ? (
        <h1>No Record Found </h1>
      ) : (
        toDoData.map((toDo) => (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            handleDeleteToDo={handleDeleteToDo}
            handleEditToDo={handleEditToDo}
          />
        ))
      )}
    </div>
  );
};

export default DisplayToDoList;
