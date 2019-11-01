import React from 'react';
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import Number from './Number'


// class App extends React.Component {
//   state={
//     persons:[

//       {name: "Dan",
//         age: 33,
//         pet: "Polly"},

//       {name: "Ben",
//         age: 21},

//       {name: "Stuart",
//         age: 45}]}

//     switchNameHandler = (newName) => {
//       this.setState({
//         persons:[

//           {name: "Buzz",
//             age: 33,
//             pet: "Polly"},
    
//           {name: "Benn",
//             age: 221},
    
//           {name: "Stewart",
//             age: 52}]})}

//   render(){
//     return( 
//       <div className="App">
//         <h1>title</h1> 
//         <Person name = {this.state.persons[0].name}/>
//         <Person />
//         <Person />
//         <button onClick = {() => this.switchNameHandler("Briany")}> I'mma buttn </button> 
//       </div>)}}

var x = 7, y = 3, z = 0
class App extends React.Component {
  
  state={
    Number: [
      {number: `x = ${x}`},
      {number: `y = ${y}`},
      {number: ``}]
  }

  incrementX = () => {{x++}
    this.setState({
      Number: [
        {number: `x = ${x} (${x-1} + 1)`},
        {number: `y = ${y}`},
        {number: ``}]
    })
  }

  decrementX = () => {{x--}
    this.setState({
      Number: [
        {number: `x = ${x} (${x+1} - 1)`},
        {number: `y = ${y}`},
        {number: ``}]
    })
  }

  incrementY = () => {{y++}
    this.setState({
      Number: [
        {number: `x = ${x}`},
        {number: `y = ${y} (${y-1} + 1)`},
        {number: ``}]
    })
  }

  decrementY = () => {{y--}
    this.setState({
      Number: [
        {number: `x = ${x}`},
        {number: `y = ${y} (${y+1} - 1)`},
        {number: ``}]
    })
  }

  sumZ = () => {{z=x+y}
    this.setState({
      Number: [
        {number: `x = ${x}`},
        {number: `y = ${y}`},
        {number: `x + y = ${z}`}]
    })
  }

  prodZ = () => {{z=x*y}
    this.setState({
      Number : [
        {number: `x = ${x}`},
        {number: `y = ${y}`},
        {number: `x * y = ${z}`}
      ]
    })
  }

  render(){
    return( 
      <div className="App">
        <h1>title</h1> 
        <Number number={this.state.Number[0].number}/>
        <Number number={this.state.Number[1].number}/>
        <Number number={this.state.Number[2].number}/>
        <button onClick={() => this.incrementX()}>x++</button>
        <button onClick={() => this.decrementX()}>x--</button>
        <button onClick={() => this.incrementY()}>y++</button>
        <button onClick={() => this.decrementY()}>y--</button>
        <button onClick={() => this.sumZ()}>sum</button>
        <button onClick={() => this.prodZ()}>product</button>
      </div>)}}


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
export default App;