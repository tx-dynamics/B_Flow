export const setUser = (data) => async (dispatch) => {
    dispatch({type: "User" , payload : data})
}

export const setSplash = (data) => async (dispatch) => {
    dispatch({type: "Splash" , payload : data})
}
