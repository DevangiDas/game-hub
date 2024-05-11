import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'41a3c7b96e594979838a8504b6877207'
    }
})