import {useEffect, useState} from 'react'
import MediaRow from '../components/MediaRow.jsx';
import SingleView from '../components/SingleView.jsx';
import { fetchData } from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
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

    return (
        <>
            <h2>My media</h2>
            <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
            <table>
                <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th>Username</th>
                    <th>Open</th>
                </tr>
                </thead>
                <tbody>
                {mediaArray.map((item) => (
                <MediaRow key={item.media_id} item={item} setSelectedItem={setSelectedItem} />
                ))}
                </tbody>
            </table>
        </>
    );
};
export default Home;