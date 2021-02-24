import { combineReducers } from 'redux';
import {registerReducer} from "./register/reducer";
import {loginReducer} from "./login/reducer";
import {commonReducer} from "./common/reducer";

export const rootReducer = combineReducers({
    register:registerReducer,
    login:loginReducer,
    common: commonReducer
});
