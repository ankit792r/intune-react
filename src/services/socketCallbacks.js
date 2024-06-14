import socket from "./socketService"


const onIncomingRequest = (data) => {
    console.log(data);
    
}

const addCallbacks = () => {
    socket.on("incoming-request", onIncomingRequest)
}

const removeCallbacks = () => {
    socket.off("incoming-request", onIncomingRequest)
}

export { addCallbacks, removeCallbacks }