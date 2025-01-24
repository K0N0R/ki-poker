import React, { useState } from "react";
import "./RoomsList.scss";
import { Room } from "../../model/interfaces";

export const RoomsList: React.FC<{rooms: Room[]}> = params => {
  const [rooms] = useState<Room[]>(params.rooms);

  return (
    <div className="rooms-list">
      <h1>Rooms List</h1>
      <div>
        {rooms.map((room) => (
          <div key={room.id} className="md-card">
              <div className="md-card-title">{room.name}</div>
              <div className="md-card-content">
                <p>Hosted by: {room.host}</p>
                <p>Created at: {room.createdAt}</p>
                <p>Tasks: {room.tasks.length}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
