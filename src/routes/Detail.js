import React from 'react';
import IronImage from 'react-image-lazy-load-component';
import 'react-image-lazy-load-component/lib/style.css';
import './detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
      /*movie-detail 페이지로 직접 이동 할 경우 home 화면에서 props 값이 넘어오지 못하기 때문에 제대로 된 정보를 보여 줄 수 없다.
      따라서 사용자가 직접 detail페이지로 이동을 한 경우에는 home 화면으로 리다이렉팅 해주어야한디.*/
    }
  }

  render() {
    console.log(this.props);
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <IronImage
            placeholder={location.state.Poster}
            src={location.state.lgPoster}
            alt={location.state.title}
          />
          <h3 className="movie__title">{location.state.title}</h3>
          <h5 className="movie__year">{location.state.year}</h5>
          <p className="movie__summary">{location.state.summary}</p>
        </div>
      );
      /* 사용자가 detail 페이지로 직접 이동할경우 state의 값이 home으로 부터 넘어오지 못하기 때문에 오류가 발생한다.
      따라서 null을 reteurn 함으로써 페이지가 home으로 리다이렉팅 될 수 있도록 해야한다.*/
    } else {
      return null;
    }
  }
}

export default Detail;
