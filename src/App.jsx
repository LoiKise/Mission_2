import "./App.css";

import ListToDo from "./components/ListToDo/ListToDo";
import Header from "./components/Header/Header";
import { useState } from "react";
import axios from "axios";
import urlOrigin from "./Api";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const getList = () => {
    axios
      .get(urlOrigin, {
        params: {
          name: "loi",
        },
      })
      .then(function (response) {
        setListTodo(response.data?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className="container">
      <div>
        <Header getList={getList} />
      </div>
      <ListToDo todos={listTodo} getList={getList} />
    </section>
  );
}

export default App;
