import { useState } from 'react'

const getRandom = (min, max) => {
  return (min + Math.floor(Math.random() * 10000) % (max - min + 1));
}

const findMax = (arr) => {
  return arr.indexOf(Math.max(...arr));
}

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  );
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Display = ({text}) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [point, setPoint] = useState(Array(8).fill(0));
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <Header text={"Anecdote of the day"}/>
      <Display text={anecdotes[selected]}/>
      <Display text={`has ${point[selected]} votes`}/>
      <Button text={"vote"} handleClick={() => {const tmp = [...point]; tmp[selected] += 1; setPoint(tmp)}}/>
      <Button text={"next"} handleClick={() => setSelected(getRandom(0, 7))}/>

      <Header text={"Anecdote with most votes"}/>

      <Display text={anecdotes[findMax(point)]}/>
      <Display text={`has ${point[findMax(point)]} votes`}/>
    </div>
  )
}

export default App