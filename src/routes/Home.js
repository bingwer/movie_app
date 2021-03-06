import React from 'react';
import axious from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // async 와 await 를 사용해서 gaxious.get() 함수의 실행을 기다린다.
    const {
      data: {
        data: { movies },
      },
    } = await axious.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
    );
    this.setState({
      movies /* movies(state변수) : movies(구조분해 할당으로  받은 데이터 변수) 와 같음*/,
      isLoading: false,
    });
    // ES6에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약 할 수 있다
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                lgPoster={movie.large_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
