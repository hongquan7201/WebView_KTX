import { createContext, useState } from "react";
export const UserContext = createContext();
const UserContextProvider = (props) => {
    const [isDisplayLogin, setIsDisplayLogin] = useState(false);
    const [isDisplayRegister, setIsDisplayRegister] = useState(false);
    const [token, setToken] = useState(JSON.parse(sessionStorage.getItem('token')))
    const [user, setUser] = useState();
    //Login
    const onShowLogin = () => {
        setIsDisplayLogin(!isDisplayLogin);
    }
    //Register
    const onShowRegister = () => {
        setIsDisplayRegister(!isDisplayRegister);
    }
    // Set user
    const onSetUser = (userNew) => {
        setUser(userNew);
    }
    // Set token
    const onSetToken = (_token) => {
        setToken(_token);
    }
    return (
        <UserContext.Provider value={{
            isDisplayLogin,
            isDisplayRegister,
            user,
            token,
            onSetToken,
            onShowLogin,
            onShowRegister,
            onSetUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider