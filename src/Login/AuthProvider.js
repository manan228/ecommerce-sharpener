import { useState } from "react"
import AuthContext from "./auth-context"

const AuthProvider = (props) => {
    // console.log(`hii`)
    const [token, setToken] = useState(null)
    const [isLogin, setIsLogin] = useState(false);

    // const isLogin = !!token;
    // let isLogin1 = false
    // console.log(isLogin)

    const loginHandler = (idToken) => {

        setToken(idToken)
        setIsLogin(true)
        // console.log(`afer setToken`)
    }

    // console.log(`afer loginHandler`)

    const authContext = {

        token: token,
        isLogin: isLogin, 
        login: loginHandler
    }
    // console.log(authContext)
    return <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthProvider