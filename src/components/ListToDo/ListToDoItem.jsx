import React from "react";
import "boxicons";
import axios from "axios";
import urlOrigin from "../../Api";

export default function ListToDoItem({ list, getList }) {
  const handleDeletedItem = async (IDX) => {
    await axios.delete(urlOrigin, { data: { name: "loi", idx: IDX } });
    getList();
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {list && (
        <div>
          {list.map((item, index) => {
            return (
              <ul key={index}>
                <li
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {item.TITLE}
                  <span>
                    <box-icon
                      type="solid"
                      name="x-circle"
                      onClick={() => handleDeletedItem(item.IDX)}
                    ></box-icon>
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}
