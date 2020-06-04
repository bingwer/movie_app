import React from 'react';
import PropsTypes from 'prop-types';

function Movie({ id, title, year, summary, poseter }) {
  return <h1>{title}</h1>;
}

Movie.PropsTypes = {
  id: PropsTypes.number.isRequired,
  year: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
};

export default Movie;
