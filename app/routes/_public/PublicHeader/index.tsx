// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
// export { PublicHeaderPresenter as PublicHeader } from './PublicHeaderPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください

import { PublicHeaderPresenter } from './PublicHeaderPresenter';

const loginAction = () => {
  console.log('login');
}

export const PublicHeader= () => {
  return (
    <PublicHeaderPresenter loginAction={loginAction} />
  );
}

