// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// onve you click login it rediretcs to SPOTIFY login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// and redirects back to your homepage once authorized
const redirectUri = "http://localhost:3000/";

const clientId = "cad55969c7fb42cd93d7ba3d41645ba6"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]; // this is saying the user that you are going to let the spotify-clone-app do the above

//to ge the access token from the url 
export const getTokenFromUrl = () => { 
    return window.location.hash //this will go to the url point which has a hash
        .substring(1)//says get the first substring
        .split('&')//splits at the & symbol
        .reduce((initial, item) => {
            // eg. #access_token=BQALrXxwSyPltKfSO-KP& its gonna split this at = and return the access token
            var parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        }, {});//and we pass an empty object
};
//now we are gonna put all of the stuff above into one url
//this line generates one big web address to send off the user somewhere
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
//starting with authEndpoint and then the question mark beacuse we're adding a parameter to the web address, we give the client_id & add redirectUri & we use 
// join to use all the scopes we mentioned and pass it with a ASCII value for space(%20) & after the authentication use response_type as a token which is string that represents your authentication
//& show_dialog is the prompt that pops up