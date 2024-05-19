import React from 'react';
import styles from './todoCard.module.scss';

interface TodoCardPresenterProps {
  title: string
  completed: boolean
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
  testId?: string
}

export const TodoCardPresenter = ({ title, completed, onChange, testId }: TodoCardPresenterProps) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  return (
    <div className={completed ? `${styles['todo-card_container']} ${styles['is-complete']}` : styles['todo-card_container']} data-testid={testId} >
      <input type="checkbox" checked={completed} className={styles['todo-card_checkbox']} onChange={onChange} aria-label='タスクを完了する' />
      <h2 className={styles['todo-card_title']}>{ completed ? (<s>{title}</s>) : title }</h2>
    </div>
  );
};
