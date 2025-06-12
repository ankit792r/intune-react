interface Friend {
    id: string;
    status: string;
    user: User
}

interface FriendRequestBody {
    friendId?: string;
    username?: string
}

interface UpdateFriendStatus {
    friendId: string;
    status: string
}
