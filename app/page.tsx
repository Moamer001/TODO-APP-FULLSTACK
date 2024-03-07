import { getTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListAction();
  return (
    <main className="container">
      <AddTodoForm />
      <TodosTable todos={todos} />
    </main>
  );
}
