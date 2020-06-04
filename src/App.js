import React from 'react';
import axious from 'axios';

class App extends React.Component {
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
    } = await axious.get('https://yts-proxy.now.sh/list_movies.json');
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
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
