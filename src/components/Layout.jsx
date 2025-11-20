import {Outlet} from "react-router";

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