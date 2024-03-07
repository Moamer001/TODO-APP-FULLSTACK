"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Button } from "./ui/Button";
import { Textarea } from "./ui/textarea";
import { TodoFormValues, todoFormSchema } from "@/scihma";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoAction } from "@/actions/todo.actions";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";

const AddTodoForm = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const defaultValues: Partial<TodoFormValues> = {
    title: "",
    body: "",
    completed: false,
  };
  // const todos = await getTodoListAction();
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  });
  const onSubmit = async ({ title, body, completed }: TodoFormValues) => {
    setLoading(true);
    await createTodoAction({
      title,
      body,
      completed,
    });
    setLoading(false);
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          {" "}
          <Plus size={14} className="mr-1" /> New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Todo</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Go to gym" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="body"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      You can write Short Description about your next todo.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onChecedChange={field.onChange}
                        {...field}
                      />
                    </FormControl>
                    <FormLabel>Completed</FormLabel>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    {" "}
                    <Spinner /> Saving{" "}
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoForm;
