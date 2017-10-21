import React from "react";
import "../app.css";

const Mapitems = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map(item => {
        return (
          <div>
            <div>{item.product.name}</div>
            <div>{item.quantity}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Mapitems;
