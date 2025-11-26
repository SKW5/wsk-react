import MediaRow from '../components/MediaRow.jsx';
import SingleView from '../components/SingleView.jsx';
import {useMedia} from "../hooks/apiHooks.js";
import {useState} from "react";


const Home = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const {mediaArray} = useMedia();

    return (
        <>
            <h2>My media</h2>
            <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
            <table>
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