// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
// export { TodoCardListPresenter as TodoCardList } from './TodoCardListPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください

import { Todo } from '~/models/todo';
import { TodoCardListPresenter } from './TodoCardListPresenter';
import { useState } from 'react';

interface TodoCardListProps {
  todoList: Todo[]
}

export const TodoCardList = ({ todoList }: TodoCardListProps) => {
  const [todoCardList, setTodoCardList] = useState<Todo[]>(todoList);
  return (
    <TodoCardListPresenter todoList={todoCardList} />
  );
}

