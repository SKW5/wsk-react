import {Outlet} from "react-router";
import {Link} from "react-router-dom";

const Layout = () => {
    return (
    <>
<div>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/profile">Profile</a>
            </li>
            <li>
                <a href="/upload">Upload</a>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </nav>
    <main>
        <Outlet />
    </main>
</div>
        </>
    );
};
export default Layout;