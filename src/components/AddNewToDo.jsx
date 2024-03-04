import React, { useState } from "react";

const AddNewToDo = ({ handleAddNewToDo }) => {
  const [newToDo, setNewToDo] = useState("");

  const addNewToDo = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const newToDo = fd.get("newToDo");
    if (newToDo !== "") {
      handleAddNewToDo(newToDo);
      event.target.reset();
    }
  };

  return (
    <div className="addNewToDoWrapper">
      <form action="" onSubmit={addNewToDo}>
        <input type="search" name="newToDo" className="newToDoInput" />
        <button className="addNewToDoBtn">Add</button>
      </form>
    </div>
  );
};

export default AddNewToDo;
