import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

function Login() {
    const {setUser} = useContext(UserContext)
    return (
        <button onClick={() => setUser('Farrukh')}>Login</button>
    )
}

export default Login