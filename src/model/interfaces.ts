export enum PLANNER_VIEW {
    LIST = "LIST",
    CREATE_ROOM = "CREATE_ROOM"
}


export interface Task {
    id: number;
    title: string;
    // Add other relevant properties as needed
  }
  
export interface Room {
    id: string;
    name: string;
    host: string;
    createdAt: string;
    tasks: Task[]; // Add this line to include the list of tasks
}