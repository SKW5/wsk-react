import useForm from "../hooks/formHooks.js";
import {useAuthentication} from "../hooks/apiHooks.js";
import {useNavigate} from "react-router";
import {useUserContext} from "../hooks/contextHooks.js";

const LoginForm = () => {
    const {postLogin} = useAuthentication();
    const navigate = useNavigate();

    const initValue = {
        username: '',
        password: ''
    };


    const doLogin = async (formData) => {
        try {
            const loginResult = await postLogin(formData);
            console.log('Login successful:', loginResult);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    }


    const {inputs, handleInputChange, handleSubmit} = useForm(doLogin, initValue);

    console.log(inputs);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        id="loginuser"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        name="password"
                        type="password"
                        id="loginpassword"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default LoginForm;