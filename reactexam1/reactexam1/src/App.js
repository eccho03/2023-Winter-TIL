import './App.css';
import React from 'react';

import MyHeader from './MyHeader'
import Counter from './Counter';
import Container from './Container';

function App() {

  const number = 5;

  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5,
  };

  let name = "조은채";

  const style = {
    App : {
      backgroundColor: 'black',
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  return (
    <Container>
      <div style={style.App}>
      <MyHeader/>
        <h2 style={style.h2}>안녕 리액트 {name} </h2>
        <b style={style.bold_text} id="bold_text">
            {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
          React.js
        </b>
        <Counter a={1} initialValue={5} />
        <Counter {...counterProps}/>
        </div>
    </Container>
      
  );
}

Counter.defaultProps={
  initialValue:0
}

export default App;
