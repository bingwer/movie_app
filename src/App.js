import React from 'react';
//import axious from 'axios';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';

//TODO : Detail 화면 만들기 // api를 한국 api로 변경해보기

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
/* 라우터는 화면을  이동해주는 장치 path 뒤에 오는 인자는 주소값을 보여준다 기본은 home라우터를, 주소뒤 /about 이 붙으면 about 라우터를 보여줌*/
/* 원래 라우터는 root -> about 순서대로 path props가 있는지 찾는다. 따라서 /about으로 접속할지라도 home과, aobut 컴포넌트가 모두 그려진다.
   그것을 방지하기 위해 root 라우터에 exact={true}를 넣어주면 home 컴포넌트가 그려지는것을 방지할 수 있다. */

/*class App2 extends React.Component {
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
      movies, // movies(state변수) : movies(구조분해 할당으로  받은 데이터 변수) 와 같음
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
                poseter={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}*/

export default App;
