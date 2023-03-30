import { useState } from 'react'

const Button = ({text, handleClick}) => {
  return (
      <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({text, value, isPercentage}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text} </td>
          <td>{value}{isPercentage ? "%" : null}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({good, bad, neutral, score}) => {
  console.log("stat running...")

  if (good + bad + neutral === 0) return (
    <div>
      <h2>statistics</h2>
      <Display text={"No feedback given"}/>
    </div>
  )
  return (
    <div>
      <h2>statistics</h2>
      <Display text={"good"} value={good}/>
      <Display text={"neutral"} value={neutral}/>
      <Display text={"bad"} value={bad}/>
      <Display text={"all"} value={good + neutral + bad}/>
      <Display text={"average"} value={score / (good + neutral + bad)} />
      <Display text={"positive"} value={good / (good + neutral + bad) * 100} isPercentage={true}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={() => {
        setGood(good + 1);
        setScore(score + 1);
        }}/>
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)}/>
      <Button text={"bad"} handleClick={() => {
        setBad(bad + 1);
        setScore(score - 1);
      }}/>
      <Statistics good={good} bad={bad} neutral={neutral} score={score}/>

    </div>
  )
}

export default App