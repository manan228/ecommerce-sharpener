import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "./Login/auth-context";

const PrivateRoute = (props) => {

    const authCtx = useContext(AuthContext)
    console.log(props.path)
    console.log(authCtx.isLogin)
    return (
        <Route path={props.path} exact>
            {authCtx.isLogin ? props.children : <Redirect to="/auth" />}
        </Route>
    )
}

export default PrivateRoute;