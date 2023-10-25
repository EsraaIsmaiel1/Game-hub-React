import axios from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:'9c850edc02414a969a4e81ef6ea1e21b'
    }
})