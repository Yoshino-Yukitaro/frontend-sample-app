// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
export { SimpleButtonPresenter as SimpleButton } from './SimpleButtonPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください
/*
import { FC } from 'react'; 
import { SimpleButtonPresenter } from './SimpleButtonPresenter';

interface SimpleButtonProps {
}

export const SimpleButton: FC<SimpleButtonProps> = () => {
  return (
    <SimpleButtonPresenter />
  );
}
*/
