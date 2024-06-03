import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, modalOpen, afterOpen }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.li} key={item.id}>
          <ImageCard item={item} modalOpen={modalOpen} afterOpen={afterOpen} />
        </li>
      ))}
    </ul>
  );
}
