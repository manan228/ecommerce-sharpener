import { useState } from "react"
import AuthContext from "./auth-context"

const AuthProvider = (props) => {
    console.log(`hii`)
    const [token, setToken] = useState(null)
    
    // const isLogin = !!token;
    let isLogin
    // console.log(isLogin)

    const loginHandler = (idToken) => {

        setToken(idToken)
        // authContext.isLogin = true;
    }

    const authContext = {

        token: token,
        isLogin: token, 
        login: loginHandler
    }
    console.log(authContext)
    return <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthProvider