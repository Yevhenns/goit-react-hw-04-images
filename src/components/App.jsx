import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './services/services';
import { helper } from 'helper/helper';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [imageName, setImageName] = useState('');
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setIsLoading(true);

    fetchImages(imageName, page)
      .then(resp => {
        setImages(prevState => {
          return [...prevState, ...helper(resp.data.hits)];
        });
      })
      .catch(error => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, [page, imageName]);

  const handleSubmit = query => {
    if (query !== imageName) {
      setPage(1);
      setImages([]);
      setIsShown(true);
    }
    setImageName(query);
  };

  const loadMore = () => {
    setPage(prevePage => prevePage + 1);
  };

  const showImage = data => {
    setCurrentImage(data);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmit} />
      {isShown && (
        <>
          <ImageGallery array={images} onClick={showImage} />
          <Button text="Load more" сlickHandler={loadMore} />
        </>
      )}
      {isLoading && <Loader />}
      {currentImage && (
        <Modal currentImage={currentImage} closeModal={closeModal} />
      )}
    </div>
  );
};
