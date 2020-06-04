import React from 'react';
import PropTypes from 'prop-types';

class Study extends React.Component {
  constructor(props) {
    // 생성자
    super(props); // super(props) 를 선언해줘야 생성자 내에서 this가 사용이 가능
    console.log('hello');
  }

  componentDidMount() {
    // 컴포넌트 생성 후에 실행(render 함수 실행 후)
    console.log('component rendered');
  }

  componentDidUpdate() {
    // 화면이 업데이트되면 실행
    console.log('updated');
  }

  componentWillUnmount() {
    // 컴포넌트가 화면에서 없어질 때 실행
    console.log('goodbye');
  }
  /* 위 4가지 생명주기 함수의 실행 순서
  1. constructor
  2. render() 함수
  3. componentDidMount
  4. componentDidUpdate -> 화면이 업되이트 되었을 때
  5. componentWillUnmount -> 컴포넌트가 화면에서 없어 질 때
  */

  state = {
    count: 0,
  };
  /*리액트에서 state값은 직접 변경할 수 없다. setState()를 이용해야함.
  setState() 함수에 새로운 객체를 전달하면 리액트가 자동을오 state에 반영해 준다.*/

  add = () => {
    //console.log('add');
    this.setState((current) => ({
      //current에는 현재 state가 넘어온다
      /*count : this.state.count + 1
        setState 단계에서 this.state를 사용하면 성능이슈가 발생할 수 있다.*/
      count: current.count + 1,
    }));
  };

  minus = () => {
    //console.log('minus');
    this.setState((current) => ({
      //current에는 현재 state가 넘어온다
      count: current.count + 1,
    }));
  };
  render() {
    console.log('render');
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
