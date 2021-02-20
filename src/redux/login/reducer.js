import {START_LOGIN,END_LOGIN} from "./action";

const initState   =     {
    isProgress:false,
    error:null,
    success:null,
}

export  function loginReducer(state=initState,action){
    switch(action.type){
        case START_LOGIN:
            return {
                ...state,
                isProgress:true,
                error:null,
                success:null
            };
        case END_LOGIN:
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