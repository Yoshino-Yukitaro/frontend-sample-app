// 見た目のみのコンポーネントでロジックや状態を持たない場合は下記のコメントアウトを外してください
export { LoginDialogPresenter as LoginDialog } from './LoginDialogPresenter';

// 上記以外の場合は下記のコメントアウトを外してロジックや状態管理を実装してください
/*
import { LoginDialogPresenter } from './LoginDialogPresenter';

interface LoginDialogProps {
}

export const LoginDialog = ({}: LoginDialogProps) => {
  return (
    <LoginDialogPresenter />
  );
}
*/
