import React from 'react';
import styled from 'styled-components';

const Message = ({message, timestamp, user, userImage}) => {
    return (
        <MessagesContainer>
            <img src={userImage} alt=""/>
            <MessageInfo>
                <h4>
                    {user}{' '}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessagesContainer>
    )
}

export default Message;
const MessagesContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`
const MessageInfo = styled.div`
  padding-left: 10px;

  h4 {
    margin: 0;
    text-align: left;
  }

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }

  > p {
    text-align: left;
    margin: 0;
  }
`
