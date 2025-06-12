interface Friend {
    id: string;
    status: string;
    initiator: User;
    acceptor: User
}

interface FriendRequest {
    id: string;
    status: string;
    initiator: User;
    acceptor: User
}

interface FriendRequestBody {
    friendId?: string;
    username?: string
}

interface UpdateFriendStatus {
    friendId: string;
    status: string
}
