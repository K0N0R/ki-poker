import React, { useState, useEffect } from "react";
import "./CreateRoom.scss";
import { Room, Task } from "../../model/interfaces";

interface CreateRoomProps {
  onCreateRoom: (newRoom: Room) => void;
  onCancel: () => void;
}

export const CreateRoom: React.FC<CreateRoomProps> = ({ onCreateRoom, onCancel }) => {
  const [roomName, setRoomName] = useState("");
  const [allWorkItems, setAllWorkItems] = useState<Task[]>([]); // Store all work items
  const [filteredWorkItems, setFilteredWorkItems] = useState<Task[]>([]); // Store filtered items
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Fetch initial work items (mocked for now)
    const mockWorkItems: Task[] = [
      { id: 1, title: "Task 1" },
      { id: 2, title: "Task 2" },
      { id: 3, title: "Task 3" },
    ];
    setAllWorkItems(mockWorkItems);
    setFilteredWorkItems(mockWorkItems);
  }, []);

  const handleQuery = () => {
    // Filter work items based on query
    if (!query.trim()) {
      setFilteredWorkItems(allWorkItems);
      return;
    }
    const filteredItems = allWorkItems.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredWorkItems(filteredItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!roomName.trim()) {
      alert("Room name is required.");
      return;
    }

    if (selectedItems.length === 0) {
      alert("At least one work item must be selected.");
      return;
    }

    const newRoom: Room = {
      id: Math.random().toString(36).substring(2, 9),
      name: roomName,
      host: "Current User", // Replace with actual user data if available
      createdAt: new Date().toISOString(),
      tasks: allWorkItems.filter((item) => selectedItems.includes(item.id)),
    };

    onCreateRoom(newRoom);
    setRoomName("");
    setSelectedItems([]);
    setQuery("");
    setFilteredWorkItems(allWorkItems);
  };

  const handleWorkItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions);
    setSelectedItems(options.map((option) => parseInt(option.value, 10)));
  };

  return (
    <div className="create-room">
      <h2>Create a New Planning Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="room-name">Room Name:</label>
        <input
          type="text"
          id="room-name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
          required
        />

        <label htmlFor="query">Search Work Items:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter query to filter tasks"
        />
        <button type="button" onClick={handleQuery}>Search</button>

        <label htmlFor="work-items">Select Work Items:</label>
        <select
          id="work-items"
          multiple
          value={selectedItems.map(String)}
          onChange={handleWorkItemChange}
        >
          {filteredWorkItems.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>

        <div className="form-actions">
          <button type="submit">Create Room</button>
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
