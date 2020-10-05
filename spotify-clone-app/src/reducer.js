



export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finishing development, its just to avoid keep logging in
    // token: 'BQBB7ph7V20qiGoCGQxIw8VKAL9b-f8W0GG3nKfYlDVPw_Iy-AemH6MpaiF-Oh8G5mfM83AmCMThaKCF4VmBmegF4SISS8ucrkZWMTzbOEtww97aP2CthtGtj1xQ3wNmR-Som2tVVRTSp5R0LYwWys7nWMqubIvP4DmxBwwsEUw2bxaQ',
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){ //action -> type, [payload]
        case 'SET_USER':
            return{
                ...state,//keep the state how it looked before
                user: action.user,
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}; // reducer takes the state of the datalayer and action, so state is what it looks like and action is how you manipulate how the data layer looks like

export default reducer;