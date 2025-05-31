import { User, Mail, ArrowRight } from "lucide-react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Logo from "../atoms/Logo";
import PasswordInput from "../molecules/PasswordInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    onSubmitClick: (val: Record<string, string>) => void,
    loading:boolean
}

const RegisterForm: React.FC<Props> = ({onSubmitClick, loading}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const onLoginClick = () => {
        navigate("/auth")
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmitClick(formData)
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-8">
                <Logo />
                <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                <p className="text-gray-400">Join us and start your journey today</p>
            </div>

            <div className="space-y-6">
                <Input
                    icon={<User className="w-5 h-5" />}
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    error={errors.name}
                    required
                />

                <Input
                    icon={<Mail className="w-5 h-5" />}
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    error={errors.email}
                    required
                />

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

                <div className="flex items-start space-x-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 mt-1 rounded border-gray-600 bg-white/5 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
                        required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-400">
                        I agree to the{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>

                <Button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span>Create Account</span>
                            <ArrowRight className="w-4 h-4" />
                        </>
                    )}
                </Button>

                <div className="text-center">
                    <span className="text-gray-400">Already have an account? </span>
                    <Button variant="ghost" type="button" onClick={onLoginClick}>
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm