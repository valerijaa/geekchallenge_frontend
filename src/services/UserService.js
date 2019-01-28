import axios from 'axios';

export const userService = {
    login,
    register,
    logout,
    isLoggedIn,
    getProfile
};

function isLoggedIn(){
    if (localStorage.getItem('user') === null) {
         return false;
    }

    return true;
}

function getProfile(){
    if (!isLoggedIn())
    {
        return null;
    }
    return JSON.parse(localStorage.getItem('user'));
}

function logout(){
    if (isLoggedIn())
    {
        localStorage.removeItem('user');
    }
}

function login(username, password){
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ROOT_API+`/login`, {
                username,
                password
            })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
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
            .post(process.env.VUE_APP_ROOT_API+`/register`, {
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