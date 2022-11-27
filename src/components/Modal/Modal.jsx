import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ currentImage, closeModal }) => {
  useEffect(() => {
    const onEscapeClose = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscapeClose);
    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  }, [closeModal]);

  const onBackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const { largeImageURL, tags } = currentImage;
  return (
    <div className={css.Overlay} onClick={onBackdropClose}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} width="800" height="600" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  currentImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
