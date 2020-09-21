import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();//creating an instance of spotify which basically responsible for the interaction between our reactapp and spotify

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => { //runs code based on a given condition
    const hash = getTokenFromUrl();
    // console.log("my token", hash)
    window.location.hash= "";//to hide the access token so strip it from the url
    const _token = hash.access_token;
    
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);//giving the accesstoken to the spotify api
      spotify.getMe().then((user) => {
        console.log('👩' , user);
      });
    }

  }, []);//useEffect runs code based on this given condition[]
  
  return(   
    <div className="app">
    {
      token?(
        <Player />
      ) : (
        <Login />//All the code(or *component*) for this is written in Login.js file, and we use it by first importing it in line3 
      )
    }
    </div>
  );  
}

export default App;
