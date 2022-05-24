const INITIAL_STATE = {
    user: false,
    splash:false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case "User" :
        return {...state, user: action.payload}
        case "Splash" :
        return {...state, splash: action.payload}
        default:
            return state
    }
}
