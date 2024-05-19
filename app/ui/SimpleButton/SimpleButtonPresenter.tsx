import styles from './simpleButton.module.scss';

interface SimpleButtonPresenterProps {
  children: React.ReactNode,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void 
  type?: 'button' | 'submit' | 'reset'
}

export const SimpleButtonPresenter = ({ children, onClick, type }: SimpleButtonPresenterProps) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  return (
    <button className={styles['simple-button']} onClick={onClick} type={type} >
      {children}
    </button>
  );
};
