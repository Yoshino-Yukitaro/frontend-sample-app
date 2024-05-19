import { Todo } from '~/models/todo';
import { TodoCard } from '../TodoCard';

interface TodoCardListPresenterProps {
  todoList: Todo[]
}

export const TodoCardListPresenter = ({ todoList }: TodoCardListPresenterProps) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  return (
    <div>
      {todoList.map((todo) => (
        <TodoCard key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
};
