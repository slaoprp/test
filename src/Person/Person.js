import React from 'react'

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Hello {props.name}, I am a person ! Not a robot, I am {props.age} {Math.floor(Math.random() * 30)} years irkd !</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}></input>
    </div>
  )
}

export default person;