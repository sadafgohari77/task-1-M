import {useSelector} from "react-redux";
import _ from "lodash";

const Profile = () => {

    const user = useSelector(state => _.get(state, "user.currentUser.user", ""))
    const data = useSelector(state => _.get(state,"users.users.[0]"))

    return (
        <div >
            <div className="media-content">
                <p className="title is-4">hi {user}</p>
                <p className="subtitle is-6"></p>
            </div>
            <div className="card-content">
                <div className="content">
                    Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta
                    gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                </div>
            </div>
        </div>
    )
}

export default Profile