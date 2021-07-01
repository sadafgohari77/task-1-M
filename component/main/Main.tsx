import React, {useState} from "react";
import Navbar from "./navbar/Navbar";
import Content from "./content/Content"

const Main = () => {
    const [showTab, setShowTab] = useState("home")

    return (
        <div className={"container"}>
            <div className={"box"}>
                <Navbar tab={showTab} setShowTabs={setShowTab}/>
                <Content tab={showTab} setShowTabs={setShowTab}/>
            </div>

        </div>
    )
}

export default Main;