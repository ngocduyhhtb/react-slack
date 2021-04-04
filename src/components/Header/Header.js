import React from "react";
import styled from 'styled-components';
import {AccessTime, Search, HelpOutline} from '@material-ui/icons';
import {Avatar} from "@material-ui/core";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

const Header = (props) => {
    const [user] = useAuthState(auth);
    console.log("user is: ", user);
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar className="avatar"
                              alt={user?.displayName}
                              src={user?.photoURL}
                              onClick={() => auth.signOut()}
                />
                <AccessTime/>
            </HeaderLeft>
            <HeaderSearch>
                <Search/>
                <input name="header-search" placeholder="Search..."/>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutline/>
            </HeaderRight>
        </HeaderContainer>
    )
}
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  background-color: var(--slack-color);
`;
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 30px;

  > .MuiSvgIcon-root:nth-child(2) {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  padding: 0 50px;
  opacity: 1;
  border: 1px gray solid;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;

  > input {
    background-color: transparent;
    border: none;
    outline: 0;
    text-align: center;
    min-width: 30vw;
    color: white;
    font-weight: 600;
  }
`
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`