import { useState } from "react"
import AuthContext from "./auth-context"

const AuthProvider = (props) => {

    const [token, setToken] = useState(null)
    const loginHandler = (idToken) => {

        setToken(idToken)
    }

    const authContext = {

        token: token,
        login: loginHandler
    }
    return <AuthContext.Provider value={authContext}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthProvider