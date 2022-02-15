import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

function Header() {
    const {user, setUser} = useContext(UserContext)
    return (
        <header>
            <nav>
                {user
                    ? <button onClick={() => setUser(null)}>Logout</button>
                    : <button onClick={() => setUser('Farrukh')}>Login</button>
                }
            </nav>
        </header>
    )
}

export default Header