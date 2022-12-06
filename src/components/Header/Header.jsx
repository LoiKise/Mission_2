import axios from "axios";
import React, { useEffect, useState } from "react";
import urlOrigin from "../../Api/index.jsx";

export default function Header({ getList }) {
  const [addTodo, setAddTodo] = useState("");
  //const [searchValue, setSearchValue] = useState("");

  const handleAddTodoList = async () => {
    const paramPost = {
      name: "loi",
      title: addTodo,
    };
    await axios.post(urlOrigin, paramPost);
    getList();
  };

  return (
    <div className="header">
      <h2 style={{ margin: 5 }}>My To Do List</h2>
      <input
        type="text"
        placeholder="Title..."
        value={addTodo}
        onChange={(event) => setAddTodo(event.target.value)}
      />
      <span className="addBtn" onClick={handleAddTodoList}>
        Add
      </span>
    </div>
  );
}
