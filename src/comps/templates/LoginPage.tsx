import LoginForm from "../organisms/LoginForm"


const LoginPage = () => {

    const onSubmit = (data: Record<string, string>) => {
        console.log(data);
        
    }

    return (
        <div>
            <LoginForm onSubmitClick={onSubmit} loading={false} />
        </div>
    )
}

export default LoginPage