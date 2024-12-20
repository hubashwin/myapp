import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import axios from 'axios'

export default function You() {
    const { authName,
        setauthName,
        authEmail,
        setauthEmail,
        isLoggedIn,
        setisLoggedIn } = useAuth();

    return (
        <>
            <h1>Hello Yourself</h1>
        </>
    )
}