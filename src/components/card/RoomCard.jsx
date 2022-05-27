import React from "react";
import "./RoomCard.css";

export const RoomCard = ({ props, selectCallback }) => {
  console.log(props);
  return (
    <div onClick={selectCallback(props._id)} className="card card-room">
      <div>
        <h5>{props.name}</h5>
      </div>

      {props.type === "room" ? (
        <img
          src="/living-room.png"
          className="card-home-img-top"
          alt="Icon Home"
        />
      ) : (
        <img
          src="/kitchen.png"
          className="card-room-img-top loft"
          alt="Icon Loft"
        />
      )}
    </div>
  );
};
