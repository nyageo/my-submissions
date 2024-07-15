import { useState } from 'react'

const Header = (p) => {
  console.log(p)
  return (
    <div>
      <h1> {p.course}</h1>
    </div>
  )
}

const Part =(pr) =>{
  return(
    <p>
      {pr.part}{pr.exercise}
    </p>
  )
}
const Content =(pr) =>{
  return(
    <p>
      <Part part= 'Fundamentals of React: ' exercise= '10'/>
      <Part part= 'Using props to pass data: ' exercise= '7'/>
      <Part part= 'State of a component: ' exercise= '14'/>
    </p>
  )
}

const Total =(pr) =>{
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return(
    <p>
     Number of exercises {exercises1 + exercises2 + exercises3}
      
    </p>
  )
}
const App = () => {
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content />
      <Total />  
     </div>
  )
}

export default App
