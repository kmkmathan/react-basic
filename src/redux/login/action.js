/*
 |  File contains the List of the Action
 |  required for verification Process
 |
 |
 */

export const START_LOGIN     =   "START_LOGIN";
export const END_LOGIN       =   "END_LOGIN";

//Action to start the registration
function startLogin(){
    return {
        type:START_LOGIN,
        payload:null
    };
}

function endLogin(success,error){
    return {
        type:END_LOGIN,
        payload:{
            success,error
        }
    };
}

//Thunk to perform the register
export  function login(email,password){
    return async (dispatch) => {
        dispatch(startLogin());
        try{
        } catch(e){
            dispatch(endLogin(null,{
                message:e.message
            }));
            return;
        }
    };
}   