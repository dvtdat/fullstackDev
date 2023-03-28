const Header = (props) => {
    console.log("Running Header...")
    return (
      <p>{props.course}</p>
    )
  }
  
  const Part = (props) => {
    console.log("Running Part...")
    return (
      <p>{props.content} {props.number}</p>
    )
  }
  
  const Content = (props) => {
    console.log("Running Content")
    console.log(props)
    return (
      <div>
        <Part content={props.info[0].part1} number={props.info[0].exercises1}/>
        <Part content={props.info[1].part2} number={props.info[1].exercises2}/>
        <Part content={props.info[2].part3} number={props.info[2].exercises3}/>
      </div>
    )
  }
  
  const Total = (props) => {
    console.log("Running Total...")
    return (
      <p>The total number of exercise in the course is {props.number}</p>
    )
  }
  
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header course={course}/>
        <Content info={[{part1, exercises1}, {part2, exercises2}, {part3, exercises3}]}/>
        <Total number={exercises1 + exercises2 + exercises3}/>
      </div>
    )
  }
  
  export default App