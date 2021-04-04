import React from 'react';
import './App.css';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Header, SideBar, Chat, Login} from "./components/index";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Spinner from 'react-spinkit';

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return (
            <AppLoading>
                <AppLoadingContent>
                    <svg enableBackground="new 0 0 2447.6 2452.5" viewBox="0 0 2447.6 2452.5"
                         xmlns="http://www.w3.org/2000/svg">
                        <g clipRule="evened" fillRule="evened">
                            <path
                                d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                                fill="#36c5f0"/>
                            <path
                                d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                                fill="#2eb67d"/>
                            <path
                                d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                                fill="#ecb22e"/>
                            <path
                                d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                                fill="#e01e5a"/>
                        </g>
                    </svg>
                    <Spinner
                        name="ball-spin-fade-loader"
                        color="purple"
                        fadeIn="none"
                    />
                </AppLoadingContent>
            </AppLoading>
        )
    }
    return (
        <div className="App">
            <Router>
                {user ? (
                    <React.Fragment>
                        <HeaderContainer>
                            <Header/>
                        </HeaderContainer>
                        <AppBody>
                            <SideBar/>
                            <Switch>
                                <Route path="/" exact>
                                    <Chat/>
                                </Route>
                            </Switch>
                        </AppBody>
                    </React.Fragment>
                ) : (
                    <Login/>
                )}
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 92vh;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContent = styled.div`
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  > svg {
    height: 100px;
    margin-bottom: 70px;
  }
`
