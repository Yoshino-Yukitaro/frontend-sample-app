import { FC } from 'react';

import styles from './publicHeader.module.scss';
import { Link } from '@remix-run/react';
import { SimpleButton } from '../../../ui';

interface PublicHeaderPresenterProps {
  hoge?: string,
  loginAction(): void
}

export const PublicHeaderPresenter: FC<PublicHeaderPresenterProps> = ({ loginAction }) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  const navLinks = [
    { text: '他ページ1', url: '/page1' },
    { text: '他ページ2', url: '/page2' },
    { text: '他ページ3', url: '/page3' },
  ]
  return (
    <div className={styles['header_container']}>
      <Link className={styles['header_logo-text']} to="/">
        <h1>ロゴ</h1>
      </Link>
      <nav className={styles['header_nav']}>
        <ul className={styles['header_nav-content']}>
          {navLinks.map((navLink) => (
            <li key={navLink.text} className={styles['header_nav-content_list-item']}>
              <Link to={navLink.url} className={styles['header_nav-content_list-item-link']}>{navLink.text}</Link>
            </li> 
          ))}   
        </ul>
        <SimpleButton onClick={loginAction}>ログイン</SimpleButton>
      </nav>
    </div>
  );
};
