import Main from "../component/main/Main";
import {Provider} from "react-redux";
import {store} from "../store/store";

export default function Home() {
    return (
        <Provider store={store}>

        <Main/>
        </Provider>
    )
}
