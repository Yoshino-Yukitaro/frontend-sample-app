// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
// export { PublicHeaderPresenter as PublicHeader } from './PublicHeaderPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください

import { useRef } from 'react';
import { LoginDialog } from '../LoginDialog';
import { PublicHeaderPresenter } from './PublicHeaderPresenter';

export const PublicHeader= () => {
  const loginDialogRef = useRef<HTMLDialogElement>(null);

  const loginAction = () => {
    if(loginDialogRef.current) {
      loginDialogRef.current.showModal();
    }
  }

  return (
    <>
      <PublicHeaderPresenter loginAction={loginAction} />
      <LoginDialog dialogRef={loginDialogRef} />
    </>
  );
}

