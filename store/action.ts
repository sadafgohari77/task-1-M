import actionTypes from "../store/actionTypes";
export const login = (user:string,password:string) => ({
    type: actionTypes.CURRENT_USER,
    payload: {user:user,password:password}
});

export const users = (data:any) => ({
    type: actionTypes.GET_USERS,
    payload: data
});
