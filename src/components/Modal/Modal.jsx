import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    currentImage: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClose);
  }

  onEscapeClose = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.currentImage;
    return (
      <div className={css.Overlay} onClick={this.onBackdropClose}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} width="800" height="600" />
        </div>
      </div>
    );
  }
}
