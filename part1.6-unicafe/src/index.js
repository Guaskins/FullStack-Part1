import { tab } from '@testing-library/user-event/dist/tab'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)

const Statistics = ({good, neutral, bad}) => {

  let average = 0
  let positive = 0
  let showStatistics = false

  console.log(good, neutral, bad)

  if (good + neutral + bad !== 0) {
    average = (good - bad) / (good + neutral + bad)
  } 

  if (good + neutral + bad !== 0) {
    positive = ((good / (good + neutral + bad)) * 100) + ' %'
  } 

  return (
    <div>
      <table>
        <tbody>
          <Statistic text='good ' value={good} />
          <Statistic text='neutral ' value={neutral} />
          <Statistic text='bad ' value={bad} />
          <Statistic text='all ' value={good + neutral + bad} />
          <Statistic text='average ' value={average} />
          <Statistic text='positive ' value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={increaseGood}
        text='good'
      />
      <Button
        handleClick={increaseNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseBad}
        text='bad'
      />
      <h1>statistics</h1>
      {(good + neutral + bad) > 0 &&
        <Statistics good={good} neutral={neutral} bad={bad} />
      }
      {(good + neutral + bad) == 0 &&
        <div><p>No feedback given</p></div>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
