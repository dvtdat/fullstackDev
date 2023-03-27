const Process = (props) => {
  console.log(props)
  return (
    <div>
      <p>The answer is: {props.a + props.b}</p>
    </div>
  )
}

const App = () => {
  console.log("I love GDSC HCMUT <333")
  return (
    <div>
      <h1>Hello GDSC</h1>
      <Process a={10} b={20}/>
    </div>
  )
}

export default App