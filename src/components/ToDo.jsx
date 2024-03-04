import React, { useState } from "react";

const ToDo = ({ toDo, handleDeleteToDo, handleEditToDo }) => {
  const { id, data, isChecked, status } = toDo;
  const [editMode, setEditMode] = useState(false);
  const [editedToDo, setEditedToDo] = useState("");
  const [check, setCheck] = useState(false);

  const handleCheckBox = (event) => {
    setCheck(event.target.checked);
    if (!editMode) {
      handleEditToDo(id, data, event.target.checked);
    }
  };

  const handleEditToDoInput = (event) => {
    setEditedToDo(event.target.value);
  };

  const handleSaveBtn = () => {
    setEditMode(false);
    handleEditToDo(id, editedToDo, check);
  };

  const handleEditBtn = () => {
    setEditMode(true);
    setEditedToDo(data);
  };

  const handleDeleteBtn = () => {
    handleDeleteToDo(id);
  };

  return (
    <div className={isChecked && !editMode ? "toDo completed" : "toDo"}>
      <input
        type="checkbox"
        name=""
        id=""
        disabled={isChecked && !editMode}
        onChange={handleCheckBox}
      />
      {editMode ? (
        <>
          <input
            type="text"
            className="editToDoInput"
            defaultValue={data}
            onChange={handleEditToDoInput}
          />
          <button onClick={handleSaveBtn}>Save</button>
        </>
      ) : (
        <>
          <p
            title={data}
            className={isChecked ? "toDoData completed" : "toDoData"}
          >
            {data}
          </p>
          {isChecked ? (
            <span className="status completed">Completed</span>
          ) : (
            <span className="status pending">Pending</span>
          )}
          <button onClick={handleEditBtn}>Edit</button>
          <button onClick={handleDeleteBtn}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ToDo;
