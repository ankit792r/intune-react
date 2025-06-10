type Props = {
    disable?: boolean
}
const AuthSubmitButton = (props: Props) => {
    return (
        <div>
            <button disabled={props.disable} type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-200">
                Sign in
            </button>
        </div>
    )
}

export default AuthSubmitButton