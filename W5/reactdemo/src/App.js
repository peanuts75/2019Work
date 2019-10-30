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

var x = 0
class App extends React.Component {
  
  render(){
    return( 
      <div className="App">
        <h1>title</h1> 
        <Number />
        <button onClick= {() => console.log(x++)}> </button>
        
      </div>)}}


const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
export default App;