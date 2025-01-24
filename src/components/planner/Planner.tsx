import React, { useState } from "react";
import { CreateRoom } from "../CreateRoom";
import "./Planner.scss";
import { RoomsList } from "../RoomsList/RoomsList";
import { PLANNER_VIEW, Room } from "../../model/interfaces";

export const Planner: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", name: "Sprint 1 Planning", host: "John Doe", createdAt: "2025-01-22 10:00", tasks: [] },
    { id: "2", name: "Feature Planning", host: "Jane Smith", createdAt: "2025-01-22 11:00", tasks: [] },
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
                <button className="md-button" onClick={() => setView(PLANNER_VIEW.CREATE_ROOM)}>Create Room</button>
                <RoomsList rooms={rooms}></RoomsList>
            </section>
        }
        {view === PLANNER_VIEW.CREATE_ROOM && <CreateRoom onCreateRoom={handleCreateRoom} onCancel={() => setView(PLANNER_VIEW.LIST)} /> }
    </div>
  );
};
