export const saveToken = (token: string) => localStorage.setItem("intune-token", token)
export const getToken = (): string | null => localStorage.getItem("intune-token")
export const removeToken = () => localStorage.removeItem("intune-token")