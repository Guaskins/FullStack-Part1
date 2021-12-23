import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = ({ anec, vot }) => {

  let index = 0
  let value = 0
  let indexValue = 0

  vot.forEach(function(element) {
    if (element > value)
    {
      value = element
      indexValue = index
    }
    index += 1
  })

  return (
    <div>
      <p>{anec[indexValue]}</p>
      <p>Has {vot[indexValue]} votes</p>
    </div>
  )
}

const App = (props) => {
  const minLength = 0
  const maxLength = 6
  let initialValue  = Array(maxLength).fill(0)
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(initialValue);

  const getSelect = () => setSelected(numRandom(minLength,maxLength-1))
  const handleVotesClick = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    console.log(selected, newPoints)
    setPoints(newPoints)
  }

  function numRandom(min, max) {
    var num = Math.random() * (max - min);
    console.log(num, Math.round(num + min))
    return Math.round(num + min);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <Button
        handleClick={handleVotesClick}
        text='vote'
      />
      <Button
        handleClick={getSelect}
        text='next anectode'
      />
      <h1>Anecdote with most votes</h1>
      <MostVotes anec={[...props.anecdotes]} vot={[...points]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)