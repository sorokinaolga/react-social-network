
import { getAuthUserDataThunkCreator } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        
        default:
            return state;  
    }
}

export const initializedSuccessActionCreator = () => ({type: INITIALIZED_SUCCESS})

export const initializeThunkCreator = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataThunkCreator());
    promise.then(() => {
        dispatch(initializedSuccessActionCreator());
    });
}


export default appReducer;