import {START_REGISTRATION,END_REGISTRATION} from "./action";

const initState   =     {
    isProgress:false,
    error:null,
    success:null,
    registerValue: 'registerValue'
}

export  function registerReducer(state=initState,action){
    switch(action.type){
        case START_REGISTRATION:
            return {
                ...state,
                isProgress:true,
                error:null,
                success:null
            };
        case END_REGISTRATION:
            return {
                ...state,
                isProgress:false,
                error:action.payload.error,
                success:action.payload.success
            }
        default:
            return state;
    }
}