export const saveToken = (token) => {
    localStorage.setItem("token", token)
}

export const loadToken = () => {
    return localStorage.getItem("token")
}