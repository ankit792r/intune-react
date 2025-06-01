interface LoginResponse {
    token: string,
}


interface RegisterResponse {
    id: number
}

type LoginBody = {
    email: string;
    password: string;
}

type RegisterBody = {
    name: string;
    username: string;
} | LoginBody