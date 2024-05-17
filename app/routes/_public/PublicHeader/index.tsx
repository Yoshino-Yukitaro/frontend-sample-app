// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
export { PublicHeaderPresenter as PublicHeader } from './PublicHeaderPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください
/*
import { FC } from 'react'; 
import { PublicHeaderPresenter } from './PublicHeaderPresenter';

interface PublicHeaderProps {
}

export const PublicHeader: FC<PublicHeaderProps> = () => {
  return (
    <PublicHeaderPresenter />
  );
}
*/
