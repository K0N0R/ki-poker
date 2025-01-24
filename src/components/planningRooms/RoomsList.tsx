import React, { useState } from "react";
import "./RoomsList.scss";
import { Room } from "../../model/interfaces";

export const RoomsList: React.FC<{rooms: Room[]}> = params => {
  const [rooms] = useState<Room[]>(params.rooms);

  return (
    <div className="rooms-list">
      <h1>Rooms List</h1>
        <ul>
          {rooms.map((room) => (
            <li key={room.id} className="room-item">
              <div>
                <strong>{room.name}</strong>
                <p>Hosted by: {room.host}</p>
                <p>Created at: {room.createdAt}</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};
