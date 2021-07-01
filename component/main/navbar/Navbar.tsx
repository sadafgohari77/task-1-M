import React from "react";
import {useSelector} from "react-redux";
import _ from "lodash";

interface IProps{
    setShowTabs:(e:any)=>any
    tab:string;
}

const Navbar:React.FC<IProps>=({tab,setShowTabs})=>{
    const user = useSelector((state) => _.get(state, "user.currentUser.user", ""))
    const navbarItem=user ? ["content","profile"] :["content","login"];

    function changeTab(nameTab="home"){
        setShowTabs(nameTab)

    }

    return(
        <div className="tabs is-centered">
            <ul>
                {navbarItem.map((item)=><li key={item} className={tab===item ? "is-active" : ""} onClick={()=>changeTab(item)}><a>{item}</a></li>)}
            </ul>
        </div>
    )
}
export default Navbar