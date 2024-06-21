import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../../services/socketService";
import { insertMessage } from "../../../redux/user/userSlice";
import { fetchChat } from "../../../redux/user/userReducer";

const ChatSection = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const chatIndex = params.chatIndex;
    const status = useSelector((state) => state.user.status);
    const myId = useSelector((state) => state.user.user._id);
    const chats = useSelector((state) => state.user.user.chats);
    const recieverData = chats[chatIndex].members.find((mem) => mem._id !== myId);

    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        setMessage("");
        if (message === "") return
        socket.emit(
            "send-message",
            {
                creator: myId,
                receiver: recieverData._id,
                content: message,
                chatId: chats[chatIndex]._id,
            },
            (val) => {
                dispatch(insertMessage({ chatId: chats[chatIndex]._id, message: val }))
            }
        );
    };

    return status == "loading" ? <p>loading</p> : (
        <section>
            <Link to="/home">close</Link>{" "}
            <span>
                <b>{chats[chatIndex].name}</b>
            </span>
            <div>
                <ul>
                    {chats[chatIndex].messages.map((ele) => {
                        return <li>{ele.content}</li>;
                    })}
                </ul>
            </div>
            <div>
                <div>
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        placeholder="message"
                    />
                    <button onClick={handleSubmit}>send</button>
                </div>
            </div>
        </section>
    );
};

export default ChatSection;
