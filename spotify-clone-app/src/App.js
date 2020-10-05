import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();//creating an instance of spotify which basically responsible for the interaction between our reactapp and spotify

function App() {
  // const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();//to grab anything from datalayer

  useEffect(() => { //runs code based on a given condition
    const hash = getTokenFromUrl();
    // console.log("my token", hash)
    window.location.hash= "";//to hide the access token so strip it from the url
    const _token = hash.access_token;
    
    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);//giving the accesstoken to the spotify api
      
      spotify.getMe().then((user) => {
        // console.log('👩' , user);
        dispatch({
          type: 'SET_USER',//action has a type
          user: user, 
        });//getMe gets the user and use the dispatch action to pop the user into the datalayer
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcHRGVe9wCtY2').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });

    }
    // console.log("my token", token
  }, []);//useEffect runs code based on this given condition[]
  
  // console.log('👩' , user);
  // console.log('👾', token);

  return(   
    <div className="app">
    {
      token?(
        <Player spotify={spotify} />
      ) : (
        <Login />//All the code(or *component*) for this is written in Login.js file, and we use it by first importing it in line3 
      )
    }
    </div>
  );  
}

export default App;
