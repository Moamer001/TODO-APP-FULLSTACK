import AddTodoForm from "@/components/AddTodoForm";
import { todo } from "node:test";

export default function Home() {
  return (
    <main className="container">
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      <AddTodoForm />
    </main>
  );
}
