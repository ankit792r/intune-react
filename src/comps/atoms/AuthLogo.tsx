const AuthLogo: React.FC = () => (
    <div className="text-center">
        <div className="mx-auto h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                </path>
            </svg>
        </div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900" id="form-title">Sign in to your account</h2>
        <p className="mt-2 text-sm text-gray-600" id="form-subtitle">
            Or <button type="button"
                className="font-medium text-primary hover:text-primary-dark" id="toggle-link">create a new
                account</button>
        </p>
    </div>
);


export default AuthLogo