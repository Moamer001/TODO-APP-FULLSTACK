"use client";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Pen, Trash } from "lucide-react";
import { deleteTodoAction } from "@/actions/todo.actions";
import Spinner from "./Spinner";
import EditTodoForm from "./EditTodoForm";
import { Itodo } from "@/interfacses";

const TodoTableActions = ({ todo }: { todo: Itodo }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id: todo?.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodoTableActions;
