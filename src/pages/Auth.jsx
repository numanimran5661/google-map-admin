import React, { useState } from "react";
import Membership from "./Membership";
import SignIn from "./SingIn";

const Auth = () => {
    const [USER_LOGIN, setUserStatus] = useState(false);
    const [user, setUser] = useState({});
    const handleLoginStatus = (data) => {
        setUserStatus(data ?? true)
        setUser(data)
    }
    return <>
        {USER_LOGIN ? <Membership user={user} /> : <SignIn loginHandle={handleLoginStatus} />}
    </>
}


export default Auth;