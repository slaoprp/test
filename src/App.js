import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 32},
      { name: 'Gill', age: 32},
      { name: 'Clad', age: 32}
    ],
    otherState: 'some other value'
  })

  const [otherState, setOtherState] = useState('some other value')

  const switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 32},
        { name: 'Gill', age: 32},
        { name: 'Cloud', age: 28}
      ],
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noohpener noreferrer"
        >
          Learn React
        </a>
        <button onClick={switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}
        />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
        >My Hobbies: Racing</Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age} 
        />
      </header>
    </div>
  );
}

export default App;