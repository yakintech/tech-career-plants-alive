
import { API_URL } from '../env/config'

//Basemanager üzerinde API a get, post, delete, put gibi istekler atacağız!

const baseManager = {

    getAll: async (url) => {
        let responseData = [];
        //fetch async bir metot olduğu için bunu await anahtarıyla bekletmemiz gerek.

        await fetch(API_URL + url)
            .then(res => res.json())
            .then((data) => {
                responseData = data;
            });

        return responseData;
    },
    getEntityById: async (url, id) => {

        let responseData = {};
        await fetch(API_URL + url + "/" + id)
        .then(res => res.json())
        .then((data) => {
            responseData = data;
        });

    return responseData;

    },
    add: () => {

    },
    delete: () => {

    }

}


export default baseManager