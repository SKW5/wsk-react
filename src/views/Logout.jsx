import {useNavigate} from "react-router";
import {useEffect, useContext} from "react";
import {UserContext} from "../contexts/UserContext.jsx";

const Logout = () => {
    const {handleLogout} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        handleLogout();
        navigate('/');
    }, []);
    return null;
}
export default Logout;