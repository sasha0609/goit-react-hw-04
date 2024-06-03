import css from "./LoadMoreBtn.module.css";
export default function LoadMoreBtn({ handleLoad }) {
  return (
    <div className={css.loadMore}>
      <button onClick={handleLoad}>Load More</button>
    </div>
  );
}
