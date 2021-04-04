import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {StarBorderOutlined, InfoOutlined} from "@material-ui/icons";
import {useSelector} from "react-redux";
import ChatInput from "./ChatInput";
import Message from "./Message";
import {useCollection, useDocument} from "react-firebase-hooks/firestore";
import {db} from "../../firebase";

const Chat = (props) => {
    const chatRef = React.createRef();
    const roomId = useSelector(state => state.room);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId.join(''))
    );
    const [roomMessages, loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId.join('')).collection('messages').orderBy("timestamp", "asc")
    )
    useEffect(() => {
        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }, [roomId, loading, chatRef])
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderOutlined/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map(doc => {
                    const {message, timestamp, user, userImage} = doc.data();
                    return (
                        <Message
                            key={doc.id}
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    );
                })}
                <ChatBottom
                    ref={chatRef}
                />
            </ChatMessages>
            <ChatInput
                chatRef={chatRef}
                channelName={roomDetails?.data().name}
                channelId={roomId}
            />
        </ChatContainer>
    );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow: scroll;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatMessages = styled.div``;
const ChatBottom = styled.div`
  padding: 40px;
`;
