import * as React from 'react';
import cryptPassword from './cryptPassword'

async function Data(data){

    const url = 'http://192.168.0.137/1-react/react-app/app/database/login.php';

    const pass = await cryptPassword(data.password);

    //console.log(pass);

    const res = fetch(url,{ method: 'POST', body: JSON.stringify({
        username: data.username,
        password: data.password,
    }) })
    .then((response) => response.json())
    .then((json) => {
        if(json.status==0){
            return false;
        }
        else{
            return json;
        }
    })
    .catch((error) => {
        console.error(error);
    });

    return res;

}

export default Data;