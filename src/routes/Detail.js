import React from 'react';

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
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
      /* 사용자가 detail 페이지로 직접 이동할경우 state의 값이 home으로 부터 넘어오지 못하기 때문에 오류가 발생한다.
      따라서 null을 reteurn 함으로써 페이지가 home으로 리다이렉팅 될 수 있도록 해야한다.*/
    } else {
      return null;
    }
  }
}

export default Detail;
