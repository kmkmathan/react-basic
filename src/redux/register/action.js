/*
 |  File contains the List of the Action
 |  required for registration Process
 |
 |
 */

export const START_REGISTRATION     =   "START_REGISTRATION";
export const END_REGISTRATION       =   "END_REGISTRATION";

//Action to start the registration
function startRegistration(){
    return {
        type:START_REGISTRATION,
        payload:null
    };
}

function endRegistration(success,error){
    return {
        type:END_REGISTRATION,
        payload:{
            success,error
        }
    };
}

//Thunk to perform the register
export  function register(name,email,company){
    return async (dispatch) => {
        dispatch(startRegistration());
        try{
        } catch(e){
            dispatch(endRegistration(null,{
                message:e.message
            }));
            return;
        }
    };
}   