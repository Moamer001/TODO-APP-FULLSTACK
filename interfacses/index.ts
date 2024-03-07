export interface Itodo {
    id: string;
    title: string;
    body: string | null;
    completed: boolean;
    createdAt: Date;
}