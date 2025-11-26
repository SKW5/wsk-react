import {useAuthentication} from "../hooks/apiHooks.js";
import {useNavigate} from "react-router";
import useForm from "../hooks/formHooks.js";

const RegisterForm = () => {
    const {postRegister} = useAuthentication();
    const navigate = useNavigate();

    const initValue = {
        username: '',
        password: '',
        email: ''
    };


    const doRegister = async (formData) => {
        try {
            const registerResult = await postRegister(formData);
            console.log('Register successful:', registerResult);
            navigate('/');
        } catch (error) {
            console.error('Register failed:', error);
        }
    }

    const {inputs, handleInputChange, handleSubmit} = useForm(doRegister, initValue);

    console.log(inputs);

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        name="username"
                        type="text"
                        id="registeruser"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        name="password"
                        type="password"
                        id="registerpassword"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        id="registeremail"
                        onChange={handleInputChange}
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default RegisterForm;