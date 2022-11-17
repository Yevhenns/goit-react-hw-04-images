import PropTypes from 'prop-types';

export const helper = array => {
  return array.map(({ id, largeImageURL, webformatURL, tags }) => ({
    id,
    largeImageURL,
    webformatURL,
    tags,
  }));
};

helper.propTypes = {
  array: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.isRequired,
  tags: PropTypes.string.isRequired,
};
