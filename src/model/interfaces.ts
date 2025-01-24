export enum PLANNER_VIEW {
    LIST = "LIST",
    CREATE_ROOM = "CREATE_ROOM"
}

export interface Room {
    id: string;
    name: string;
    host: string;
    createdAt: string;
}
  