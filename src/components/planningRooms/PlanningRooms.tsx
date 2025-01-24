import React, { useState, useEffect } from "react";
import "./PlanningRooms.scss";

// Typ pokoju planowania
interface PlanningRoom {
  id: string;
  name: string;
  host: string;
  createdAt: string;
}

export const PlanningRooms: React.FC = () => {
  const [rooms, setRooms] = useState<PlanningRoom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Funkcja symulująca pobranie danych z backendu lub API
    const fetchRooms = async () => {
      setLoading(true);

      // Symulacja API (w przyszłości podłącz backend)
      const mockRooms: PlanningRoom[] = [
        {
          id: "1",
          name: "Sprint 1 Planning",
          host: "John Doe",
          createdAt: "2025-01-22 10:00",
        },
        {
          id: "2",
          name: "Feature Planning",
          host: "Jane Smith",
          createdAt: "2025-01-22 11:00",
        },
      ];

      // Dodanie opóźnienia dla symulacji ładowania
      setTimeout(() => {
        setRooms(mockRooms);
        setLoading(false);
      }, 1000);
    };

    fetchRooms();
  }, []);

  return (
    <div className="planning-rooms">
      <h1>Planning Rooms</h1>
      {loading ? (
        <p>Loading...</p>
      ) : rooms.length === 0 ? (
        <p>No planning rooms are currently open.</p>
      ) : (
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
      )}
    </div>
  );
};