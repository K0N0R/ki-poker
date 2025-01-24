import React, { useState } from "react";
import "./CreateRoom.scss";

export const CreateRoom: React.FC = () => {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState<string | null>(null);

  const handleCreateRoom = () => {
    if (!roomName.trim()) {
      alert("Please enter a room name.");
      return;
    }

    // Generate unique room ID
    const generatedRoomId = Math.random().toString(36).substring(2, 10);
    setRoomId(generatedRoomId);

    // Example: Store room information (could later integrate with a backend)
    console.log(`Room "${roomName}" created with ID: ${generatedRoomId}`);
  };

  return (
    <div className="create-room">
      <h2>Create a New Room</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button onClick={handleCreateRoom}>Create Room</button>
      </div>
      {roomId && (
        <div className="room-info">
          <p>Room created successfully!</p>
          <p>
            Room ID: <strong>{roomId}</strong>
          </p>
        </div>
      )}
    </div>
  );
};