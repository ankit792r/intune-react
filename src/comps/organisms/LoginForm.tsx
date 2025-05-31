import { User, ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Logo from "../atoms/Logo";
import PasswordInput from "../molecules/PasswordInput";
import { useNavigate } from "react-router-dom";


type Props = {
    onSubmitClick: (val: Record<string, string>) => void,
    loading:boolean
}

const LoginForm: React.FC<Props> = ({onSubmitClick, loading}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleClick = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitClick(formData)
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const onRegisterClick = () => {
        navigate("/auth/register")
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <Logo />
                <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                <p className="text-gray-400">Sign in to your account to continue</p>
            </div>

            <div className="space-y-6">
                <Input
                    icon={<User className="w-5 h-5" />}
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    error={errors.username}
                    required
                />

                <PasswordInput
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    error={errors.password}
                    required
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm text-gray-400">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-600 bg-white/5 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                        />
                        <span>Remember me</span>
                    </label>
                    <Button variant="ghost" type="button" className="text-sm">
                        Forgot password?
                    </Button>
                </div>

                <Button
                    onClick={handleClick}
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span>Sign In</span>
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </Button>

                <div className="text-center">
                    <span className="text-gray-400">Don't have an account? </span>
                    <Button variant="ghost" type="button" onClick={onRegisterClick}>
                        Create Account
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm