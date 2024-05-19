// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
export { LoadingPresenter as Loading } from './LoadingPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください
/*
import { LoadingPresenter } from './LoadingPresenter';

interface LoadingProps {
}

export const Loading = ({}: LoadingProps) => {
  return (
    <LoadingPresenter />
  );
}
*/
