import axios from "axios"
import { API_URL } from "../env/config"


const baseManagerWithAxios = {

    getAll: async (url) => {

        let responseData = [];

        await axios.get(API_URL + url)
            .then((res) => {
                responseData = res.data;
            })

        return responseData;
    },

    getEntityById: async (url = "", id = 0) => {

        let responseData = {}

       await axios.get(API_URL + url + "/" + id)
            .then((res) => {
                responseData = res.data;
            });

        return responseData;
    }

}


export default baseManagerWithAxios