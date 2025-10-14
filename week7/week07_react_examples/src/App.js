import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import College from './components/college/college';
import Student from './components/students/students';
import StudentObj from './components/students/studentObj';

function App() {
  let name = "Ibrahim Yondem";
  const myStyle = {color:'red', fontSize: 50}; // Key Value Pair
  const studObj = {fnm: "Triet", lnm: "Luu", city: "North York"};
  return (
    <Fragment>
      <h1 style={ {color:'blue', fontSize: 50} }>Hello, ReactJS</h1>
      {/* <img src={logo} alt='Image' size></img> */}
      {/* <h2>{name}</h2> */}
    <h2 style={myStyle}>{name}</h2>
      <College></College>
      <Student fnm="Ibrahim" lnm="Yondem"/>
      <StudentObj stud={ {fnm: "Sokmontrey", lnm: "Sythat", city: "Toronto"} }/>
      <StudentObj stud={studObj}/>
    </Fragment>
  );
}
export default App;