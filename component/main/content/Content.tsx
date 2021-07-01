import React, {useEffect} from "react";
import {content, navbarItem} from "../data/data";
import Login from "./items/login/Login";
import Profile from "./items/profile/Profile";
import {useSelector} from "react-redux";
import _ from "lodash";

interface IProps {
    setShowTabs: (e: any) => any
    tab: string
}

const Content: React.FC<IProps> = ({tab, setShowTabs}) => {

    const user = useSelector((state) => _.get(state, "user.currentUser.user", ""))

    useEffect(() => {
    }, [tab])


    const ShowContent = () => {

        switch (tab) {
            case navbarItem.CONTENT:
                return (
                    <div className={"is-flex-direction-column"}>
                        {content}
                        {!user && <div className={"is-flex is-justify-content-flex-end"}>
                            <button className="button is-success" onClick={()=>setShowTabs(navbarItem.LOGIN)}>Login</button>
                        </div>}
                    </div>
                )
            case navbarItem.PROFILE:
                return (<Profile/>)
            case navbarItem.LOGIN:
                return (<Login setShowTabs={setShowTabs}/>)
            default :
                return ""
        }
    }

    return (
        <div className={"box"}>
            {ShowContent()}
        </div>
    )
}

export default Content;