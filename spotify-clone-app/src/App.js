import React from 'react';
import './App.css';
import Login from './Login';

function App() {
  return(
    <div className="app">
      <h1>Hello, lets start the build</h1>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
      {/*Spotify Logo*/}
      {/*login with spotify button*/} 
      <Login />{/*All the code(or *component*) for this is written in Login.js file, and we use it by first importing it in line3 */} 
    </div>
  );  
}

export default App;
