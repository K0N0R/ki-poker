import React, { useState } from "react";
import { CreateRoom } from "../createRoom";
import "./Planner.scss";
import { RoomsList } from "../planningRooms/RoomsList";
import { PLANNER_VIEW, Room } from "../../model/interfaces";

export const Planner: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "Sprint 1 Planning", host: "John Doe", createdAt: "2025-01-22 10:00" },
    { id: "2", name: "Feature Planning", host: "Jane Smith", createdAt: "2025-01-22 11:00" },
  ]);

  const [view, setView] = useState<PLANNER_VIEW>(PLANNER_VIEW.LIST);

  const handleCreateRoom = (newRoom: Room) => {
    setRooms([...rooms, newRoom]);
    setView(PLANNER_VIEW.LIST);
  };

  return (
    <div className="planner">

        {view === PLANNER_VIEW.LIST && 
            <section>
                <button onClick={() => setView(PLANNER_VIEW.CREATE_ROOM)}>Create Room</button>
                <RoomsList rooms={rooms}></RoomsList>
            </section>
        }
        {view === PLANNER_VIEW.CREATE_ROOM && <CreateRoom onCreateRoom={handleCreateRoom} onCancel={() => setView(PLANNER_VIEW.LIST)} /> }
    </div>
  );
};
