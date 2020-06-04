import React from 'react';
import PropsTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poseter, genres }) {
  return (
    <div className="movie">
      <img src={poseter} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            //map() 함수의 두번쨰 인자에는 map() 함수가 반복 실행하며 반환할 배열 원소의 인덱스가 자동으로 들어온다.
            return (
              <li key={index} className="movie__genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.PropsTypes = {
  year: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
  genres: PropsTypes.arrayOf(PropsTypes.string).isRequired,
};

export default Movie;
