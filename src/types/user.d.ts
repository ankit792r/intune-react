interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    bio?: string;
    pic?: string;
}

interface UserProfileUpdate extends Pick<User, "username" | "pic"> { }

interface UserBasicUpdate extends Pick<User, "name" | "bio"> { }

interface UserEmailUpdate extends Pick<User, "email"> { }

interface UserEmailUpdateBody extends Pick<User, "email"> {
    otp: string
}
