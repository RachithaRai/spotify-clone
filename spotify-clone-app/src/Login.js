import React from "react";
import './Login.css';
import {loginUrl} from './spotify'

function Login(){
    return(
        //BEM(way of naming classes in react)
        <div className="login">
            {/*spotify logo */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
            
        </div>
    );
}

export default Login;