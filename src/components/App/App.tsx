import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchPhotos } from "../../photos-api";
import css from "./App.module.css";

interface Photo {
  id: string;
  alt_description: string;
  urls: { small: string; regular: string };
}

interface FetchPhotosResult {
  total_pages: number;
  results: Photo[];
}

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  const handleSearch = async (newQuery: string): Promise<void> => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setShowBtn(false);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const handleModalOpen = (imgUrl: string, imgAlt: string): void => {
    setModalUrl(imgUrl);
    setModalAlt(imgAlt);
    setModalIsOpen(true);
  };

  const handleModalClose = (): void => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getPhotos() {
      try {
        setError(false);
        setIsloading(true);
        const data: FetchPhotosResult = await fetchPhotos(query, page);
        setShowBtn(data.total_pages > 0 && data.total_pages !== page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data.results];
        });
      } catch (error: any) {
        setError(true);
      } finally {
        setIsloading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className={css.div}>
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {photos.length > 0 && (
          <ImageGallery items={photos} onImageOpen={handleModalOpen} />
        )}

        {!isLoading && showBtn && photos.length > 0 && (
          <LoadMoreBtn onClick={handleLoadMore} />
        )}

        <ImageModal
          isOpen={modalIsOpen}
          onClose={handleModalClose}
          url={modalUrl}
          alt={modalAlt}
        />
      </div>
    </>
  );
}
