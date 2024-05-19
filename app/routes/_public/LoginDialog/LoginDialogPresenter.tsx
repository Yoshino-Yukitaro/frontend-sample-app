import { Form } from '@remix-run/react';
//import styles from './loginDialog.module.scss';
import { SimpleButton } from '~/ui';

interface LoginDialogPresenterProps {
  dialogRef?: React.RefObject<HTMLDialogElement>
  isOpen?: boolean
}

export const LoginDialogPresenter = ({ dialogRef, isOpen }: LoginDialogPresenterProps) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  return (
    <dialog ref={dialogRef} open={isOpen} >
      ログイン
      <Form method='post' action='/?index'>
        <input type="text" name='username' placeholder="ユーザー名" autoComplete='username' required />
        <input type="password" name='password' placeholder="パスワード" autoComplete='current-password' required />
        <SimpleButton type='submit'>ログイン</SimpleButton>
      </Form>
    </dialog>
  );
};
