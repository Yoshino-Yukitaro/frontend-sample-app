import styles from './plusIconButton.module.scss';

interface PlusIconButtonPresenterProps {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
  className?: string
}

export const PlusIconButtonPresenter = ({ onClick, className }: PlusIconButtonPresenterProps) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  return (
    <button onClick={onClick} className={`${styles['plus-button']} ${className}`}>
      +
    </button>
  );
};
