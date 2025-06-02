interface LoginResponse {
    token: string,
    user: User
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