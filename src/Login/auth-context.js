import { createContext } from "react";

const AuthContext = createContext({

    token: '',
    isLogin: false, 
    login: (idToken) => {}
});

export default AuthContext;