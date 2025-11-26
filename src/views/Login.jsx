import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import {useState} from "react";

const Login = () => {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '1rem'}}>
                <button onClick={() => setShowLogin(true)}>
                    Show Login
                </button>
                <button onClick={() => setShowLogin(false)}>
                    Show Register
                </button>
            </div>
            {showLogin ? <LoginForm /> : <RegisterForm />}
        </div>
    );
};

export default Login;