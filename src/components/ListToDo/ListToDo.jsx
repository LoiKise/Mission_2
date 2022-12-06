import React, { useEffect, useState } from "react";
import axios from "axios";
import ListToDoItem from "./ListToDoItem";
import urlOrigin from "../../Api/index";

export default function ListToDo({ todos, getList }) {
  useEffect(() => {
    getList();
  }, []);
  return (
    <React.Fragment>
      {todos.length > 0 ? (
        <div className="listTodo">
          <ListToDoItem list={todos} getList={getList} />
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          You have a lot of work need notes right now
        </h1>
      )}
    </React.Fragment>
  );
}
