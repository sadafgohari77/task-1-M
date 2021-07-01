import axios from "axios";

export async function getAllUsers() {
    // @ts-ignore
    return  axios.get(`https://60d6d3b4307c300017a5f510.mockapi.io/api/users`,{})
        .then((response) => {
            return response.data
        })
        .catch((rej) => {
            alert("referesh please");
        });
}