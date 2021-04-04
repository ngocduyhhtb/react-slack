import React from "react";
import styled from "styled-components";
import {
    FiberManualRecord as FiberManualRecordIcon,
    Create,
    InsertComment,
    Inbox,
    Drafts,
    Bookmark,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore,
    Add,
} from "@material-ui/icons";
import SideBarOption from "./SideBarOption/SideBarOption";
import {useCollection} from "react-firebase-hooks/firestore";
import {auth, db} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const SideBar = () => {
    const [channels] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    {/*<h2>nDuy</h2>*/}
                    <h3>
                        <FiberManualRecordIcon/>
                        <strong style={{fontSize: "16px"}}>{user.displayName}</strong>
                    </h3>
                </SideBarInfo>
                <CreateIcon>
                    <Create/>
                </CreateIcon>
            </SideBarHeader>
            <SideBarOption Icon={InsertComment} Title="Threads"/>
            <SideBarOption Icon={Inbox} Title="Mentions & Reactions"/>
            <SideBarOption Icon={Drafts} Title="Saved Items"/>
            <SideBarOption Icon={Bookmark} Title="Channel Browser"/>
            <SideBarOption Icon={PeopleAlt} Title="People & User Groups"/>
            <SideBarOption Icon={Apps} Title="Apps"/>
            <SideBarOption Icon={FileCopy} Title="File Browser"/>
            <SideBarOption Icon={ExpandLess} Title="Show Less"/>
            <hr/>
            <SideBarOption Icon={ExpandMore} Title="Channels"/>
            <hr/>
            <SideBarOption Icon={Add} Title="Add Channels" addChannelOption/>
            {channels?.docs.map((doc) => (
                <SideBarOption key={doc.id} id={doc.id} Title={doc.data().name}/>
            ))}
        </SideBarContainer>
    );
};
export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;

  > hr {
    margin: 10px 0 10px 0;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
`;
const SideBarInfo = styled.div`
  flex: 0.8;
  padding: 10px;

  > h2 {
    font-size: 15px;
    font-weight: 800;
    margin: 0 0 5px 0;
    padding: 0 6px 0 6px;
    text-align: left;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  svg {
    font-size: 0.9rem !important;
    color: green;
    margin-right: 4px;
  }
`;
const CreateIcon = styled.div`
  flex: 0.2;
  display: flex;
  align-items: center;

  > svg {
    color: #49274b;
    background-color: white;
    border-radius: 10%;
    cursor: pointer;
  }

  > svg:hover {
    opacity: 0.8;
  }
`;
