import { json } from "@remix-run/node";
import { TodoCardList } from "./TodoCardList"
import { useLoaderData } from "@remix-run/react";
import { getTodos } from "~/models/todo";

export const loader = async () => {
  const todoList = await getTodos();
  console.log("todoList", todoList);
  return json({ todoList });
}

const TodosRoute = () => {
  const { todoList } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Todos</h1>
      <TodoCardList todoList={todoList} />
    </div>
  )
}

export default TodosRoute
