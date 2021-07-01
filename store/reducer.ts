import {combineReducers} from "redux";
import actionTypes from "./actionTypes";

const user = (state = [], action:{type:string,payload:{user:string,password:string}}) => {
    switch (action.type) {
        case actionTypes.CURRENT_USER:
            return {currentUser: action.payload};
        default:
            return state;
    }
};


const users = (state = [], action:{type:string,payload:any}) => {
    switch (action.type) {
        case actionTypes.GET_USERS:
            return { users: action.payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({user,users});

export default rootReducer;