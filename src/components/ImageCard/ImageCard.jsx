import css from "./ImageCard.module.css";

export default function ImageCard({ item, modalOpen, afterOpen }) {
  const handleClick = () => {
    modalOpen(), afterOpen(item);
  };
  return (
    <div>
      <img
        onClick={handleClick}
        className={css.img}
        src={item.urls.small}
        alt={item.alt_description}
      />
    </div>
  );
}
