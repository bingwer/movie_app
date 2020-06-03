import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
  };
  /*리액트에서 state값은 직접 변경할 수 없다. setState()를 이용해야함.
  setState() 함수에 새로운 객체를 전달하면 리액트가 자동을오 state에 반영해 준다.*/

  add = () => {
    //console.log('add');
    this.setState({ count: 1 });
  };

  minus = () => {
    //console.log('minus');
    this.setState({ count: -1 });
  };
  render() {
    // 함수형 컴포넌트는 return문으로, 클래스형 컴포넌트는 render() 함수로 JSX를 반환한다.
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
/*const foodLike = [
  {
    id: 1,
    name: 'kimchi',
    image:
      'https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'bulgogi',
    image:
      'https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg',
    rating: 4.5,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodLike.map((dish) => (
        <Food
          name={dish.name}
          picture={dish.image}
          key={dish.id}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

//proptypes는 전달되는 prop가 요구하는 형식인지 검사해줌
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number, //isRequired 는 꼭 없어도 된다.
};*/

export default App;
