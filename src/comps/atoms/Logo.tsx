import { MessageCircleHeartIcon } from "lucide-react";

const Logo: React.FC = () => (
    <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
            <MessageCircleHeartIcon className="w-6 h-6 text-white" />
        </div>
        {/* <span className="text-2xl font-bold text-white">
            SecureAuth
        </span> */}
    </div>
);


export default Logo