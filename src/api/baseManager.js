
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
        })

    return responseData;

    },
    add: async (url, data) => {
    
        let responseData = {};

        let requestOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }

        await fetch(API_URL + url, requestOptions)
        .then(res => {
            if(res.status == 500){
                throw "add error";
            }
            else{
                return res.json();
            }
        })
        .then((data) => {
            responseData = data;
        })
        .catch((err) => {
            throw "add error";
        })


        return responseData;

    },
    delete: () => {

    }

}


export default baseManager