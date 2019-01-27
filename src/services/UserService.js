import axios from 'axios';

export const userService = {
    login,
    register,
    logout,
    isLoggedIn
};

function isLoggedIn(){
    if (localStorage.getItem('jwt') === null) {
         return false;
    }

    return true;
}

function logout(){
    if (isLoggedIn())
    {
        localStorage.removeItem('jwt');
    }
}

function login(username, password){
    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:3000/login`, {
                username,
                password
            })
            .then(response => {
                localStorage.setItem('jwt', response.data.token);
                resolve();
            })
            .catch(error => {
                reject(error.response.data.msg);
            });
    });
}

function register(name, username, password){
    return new Promise((resolve, reject) => {
        axios
            .post(`http://localhost:3000/register`, {
                username,
                password,
                name
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error.response.data.msg);
            });
    });
}