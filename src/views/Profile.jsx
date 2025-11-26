import { useState, useEffect } from 'react';

import { useUser } from '../hooks/apiHooks.js';
const Profile = () => {
    const [user, setUser] = useState(null);
    const {getUserByToken} = useUser();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    console.error('No token found');
                    return;
                }

                const response = await getUserByToken(token);
                setUser(response.user);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    if (!user) {
        return <div></div>;
    }
    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>created at: {user.created_at}</p>
            <p>User id: {user.user_id}</p>
        </div>
    );
}
export default Profile;