import "./App.css";
import { Toaster } from "react-hot-toast";
import { getImage } from "./image-card-api";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [SearchQuery, setSearchQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(false);

  useEffect(() => {
    if (SearchQuery.trim() === "") {
      return;
    }
    async function fetchImage() {
      try {
        setError(false);
        setLoading(true);
        const data = await getImage(SearchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [page, SearchQuery]);
  const getApiImage = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoad = () => {
    setPage(page + 1);
  };
  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalAfterOpen = (image) => {
    setModalImage(image);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <SearchBar onSearch={getApiImage} />
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery
          items={images}
          modalOpen={modalOpen}
          afterOpen={modalAfterOpen}
        />
      )}
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn handleLoad={handleLoad} />}
      {modalIsOpen && (
        <ImageModal
          modalOpen={modalIsOpen}
          modalClose={modalClose}
          afterOpen={() => {}}
          images={modalImage}
        />
      )}
    </>
  );
}
