import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {login, users} from "../../../../../store/action";
import {getAllUsers} from "../../../../../api/getUser";
import {navbarItem} from "../../../data/data";
interface IProps {
    setShowTabs:(e:any)=>any

}
const Login:React.FC<IProps> = ({setShowTabs}) => {
    const dispatch = useDispatch();

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function loginUser() {
        dispatch(login(user, password))
        dispatch(users(getAllUsers()));
        setShowTabs(navbarItem.PROFILE)
    }

    return (
        <div>
            <div className="field">
                <label className="label">userName</label>
                <div className="control">
                    <input className="input" type="text" placeholder="userName" maxLength={20}
                           onChange={(e) => setUser(e.target.value)}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="********"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>

            <button className="button is-primary" onClick={loginUser}>login</button>
        </div>)
}
export default Login