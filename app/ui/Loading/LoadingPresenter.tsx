interface LoadingPresenterProps {
  loadingRef?: React.RefObject<HTMLDivElement>
}

export const LoadingPresenter = ({ loadingRef }: LoadingPresenterProps) => {
  // コンポーネントの見た目だけを実装してください。状態管理やロジックが必要な場合はindexの方で実装してください。
  return (
    <div ref={loadingRef}>
      <p>読み込み中...</p>
    </div>
  );
};
