import React, { Component } from 'react';

class QuizList extends Component {
  constructor() {
    super()
  }

  render() {
    const { list, onPress, logout } = this.props;
    return (
      <div>
        <button onClick={() => logout()}>Log-Out</button>
        <ul>
          {list.map((quiz, index) => {
            return <li>
              {quiz.name}
              <button onClick={() => onPress(index)}>Join</button>
            </li>
          }
          )}

        </ul>
      </div>
    )
  }

}

export default QuizList;

//CHILD --> PARENT STATE UPDATE
//=============================

//1) Create a function in Parent that
//will update the State.

//2) Pass the function in the Child's
//Component's Props

//3) Call that function from Child Props.
