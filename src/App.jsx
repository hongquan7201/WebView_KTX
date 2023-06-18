import { useContext, useEffect } from "react";
import Main from "./components/layout/Main/Main";
import User from "./components/layout/User/index";
import { UserContext } from "./contexts/UserContext";
import { GetUserService } from "./services/UserService";

function App() {
    const { token, onSetUser } = useContext(UserContext);
    useEffect(() => {
        if (token) {
            const handle = async () => {
                const result = await GetUserService(token);
                if (result.status === 200) {
                    onSetUser(result.data[0]);
                }
            };
            handle();
        }
    }, []);
    return <>{token ? <User /> : <Main />}</>;
}

export default App;
