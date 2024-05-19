// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
// export { TodoCardPresenter as TodoCard } from './TodoCardPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください

import { useState } from 'react';
import { TodoCardPresenter } from './TodoCardPresenter';

interface TodoCardProps {
  title: string
  completed: boolean
  testId?: string
}

export const TodoCard = ({ title, completed, testId }: TodoCardProps) => {
  const [isCompleted, setIsCompleted] = useState(completed)
  const onChange = () => {
    setIsCompleted(!isCompleted)
  }
  return (
    <TodoCardPresenter title={title} completed={isCompleted} onChange={onChange} testId={testId} />
  );
}
