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

const Content = ({info}) => {
  console.log("Running Content...")
  return (
    <div>
      <Part content={info[0].name} number={info[0].exercises}/>
      <Part content={info[1].name} number={info[2].exercises}/>
      <Part content={info[2].name} number={info[1].exercises}/>
    </div>
  )
}

const Total = ({info}) => {
  console.log("Running Total...")
  return (
    <p>The total number of exercise in the course is {info[0].exercises + info[1].exercises + info[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 2000
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content info={course.parts}/>
      <Total info={course.parts}/>
    </div>
  )
}

export default App