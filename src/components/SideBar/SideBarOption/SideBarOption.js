import React from "react";
import styled from 'styled-components';
import {db} from '../../../firebase';
import {useDispatch} from "react-redux";
import {EnterRoom} from "../../../actions/EnterRoom";


const SideBarOption = ({Icon, Title, addChannelOption, id}) => {
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt("Please enter channel name");
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }
    const selectChannel = () => {
        if (id) {
            dispatch(EnterRoom(id));
        }
    }
    return (
        <SideBarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize='small'/>}
            {Icon ? (
                <h3>{Title}</h3>
            ) : (
                <SideBarOptionChannel>
                    <span>#</span> {Title}
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    )
}
export default SideBarOption;
const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    opacity: 0.8;
    background-color: #340e36;
  }

  > svg {
    margin-right: 10px;
  }

  > h3 {
    margin: 0;
    padding: 0;
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;
const SideBarOptionChannel = styled.h3`
  margin: 0;
  padding: 10px 0;
  font-weight: 300;
`


