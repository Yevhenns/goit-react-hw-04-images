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

  // componentDidUpdate(prevProps, prevState) {
  //   const { imageName, page } = this.state;
  //   if (prevState.imageName !== imageName || prevState.page !== page) {
  //     this.getImages();
  //   }
  // }

  const handleSubmit = query => {
    if (query !== imageName) {
      setPage(1);
      setImages([]);
      setIsShown(true);
    }
    setImageName(query);
  };

  const getImages = () => {
    setIsLoading(true);
    fetchImages(imageName, page)
      .then(resp => {
        this.setImages(prevState => [
          ...prevState.images,
          ...helper(resp.data.hits),
        ]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // loadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  // showImage = data => {
  //   this.setState({ currentImage: data });
  // };

  // closeModal = () => {
  //   this.setState({ currentImage: null });
  // };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={handleSubmit} />
      {/* {this.state.isShown && (
        <>
          <ImageGallery array={this.state.images} onClick={this.showImage} />
          {!this.setState.isShown && (
            <Button text="Load more" сlickHandler={this.loadMore} />
          )}
        </>
      )}
      {this.state.isLoading && <Loader />}
      {this.state.currentImage && (
        <Modal
          currentImage={this.state.currentImage}
          closeModal={this.closeModal}
        />
      )} */}
    </div>
  );
};
