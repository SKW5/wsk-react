import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData.js';


const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

//username: Lehti
//password: test1

const useMedia = () => {
    const [mediaArray, setMediaArray] = useState([]);

    useEffect(() => {
        try {
            const getMedia = async () => {
                const mediaData = await fetchData(MEDIA_API);
                console.log(mediaData);

                const newArray = await Promise.all(mediaData.map(async (item) => {
                        const user = await fetchData(AUTH_API + item.user_id);
                        return {...item, username: user.username};
                    }),
                );
                console.log(newArray);
                setMediaArray(newArray);
            };
            getMedia();
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    }, []);
    return {mediaArray};
}

const useAuthentication = () => {
    const postLogin = async (inputs) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        };
        const loginResult = await fetchData(
            import.meta.env.VITE_AUTH_API + '/auth/login',
            fetchOptions,
        );
        if (loginResult.token) {
            localStorage.setItem('token', loginResult.token);
        }
        return loginResult;
    };
    const postRegister = async (inputs) => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        };
        return await fetchData(
            import.meta.env.VITE_AUTH_API + '/users',
            fetchOptions,
        );
    }
    return {postLogin, postRegister}
}

const useUser = () => {
    const getUserByToken = async (token) => {
        const fetchOptions = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
        return await fetchData(import.meta.env.VITE_AUTH_API + '/users/token', fetchOptions);
    };
    return {getUserByToken};
}
export {useMedia, useAuthentication, useUser};