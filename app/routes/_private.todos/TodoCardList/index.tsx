// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
// export { TodoCardListPresenter as TodoCardList } from './TodoCardListPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください

import { Todo, getTodos } from '~/models/todo';
import { TodoCardListPresenter } from './TodoCardListPresenter';
import { useEffect, useRef, useState } from 'react';
import { Loading } from '~/ui/Loading';

interface TodoCardListProps {
  todoList: Todo[]
}

export const TodoCardList = ({ todoList }: TodoCardListProps) => {
  const [todoCardList, setTodoCardList] = useState<Todo[]>(todoList);
  const [nextPage, setNextPage] = useState<number>(2); // 1ページ目はサーバーで読み取り済み
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadingElement = loadingRef.current;

    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        console.log('呼ばれた')
        const additionalTodoList = await getTodos(nextPage);
        setTodoCardList([...todoCardList, ...additionalTodoList]);
        const allLoaded = additionalTodoList.length === 0;
        setNextPage(allLoaded ? 0 : nextPage + 1);
      }
    });

    if(loadingElement) observer.observe(loadingElement);

    return () => {
      if(loadingElement) observer.unobserve(loadingElement);
    };
  }, [nextPage, todoCardList])

  return (
    <>
      <TodoCardListPresenter todoList={todoCardList} />
      {
        (todoCardList.length % 10 == 0 && nextPage != 0) ? <Loading loadingRef={loadingRef} /> : null
      }
    </>
  );
}

