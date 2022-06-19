import axios from "axios";

let headersConfig = '';

function AuthenticateToken(token) {
    headersConfig = {
        headers: new Headers({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }),
    }
}

export const inputService = {
    userLogin: (userData, AuthToken) => {
        let url = 'https://reqres.in/api/login';
        return axios.post(url, userData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    },
    userData: (AuthToken) => {
        AuthenticateToken(AuthToken);
        let url = 'https://reqres.in/api/unknown';
        return axios.get(url, headersConfig);
    }
}