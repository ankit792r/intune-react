import RegisterForm from "../organisms/RegisterForm"


const RegisterPage = () => {

    const onSubmit = (data: Record<string, string>) => {
        console.log(data);
        
    }

    return (
        <div>
            <RegisterForm onSubmitClick={onSubmit} loading={false} />
        </div>
    )
}

export default RegisterPage