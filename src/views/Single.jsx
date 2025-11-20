import {useLocation} from "react-router";
import {useNavigate} from "react-router";
import blehh from "../assets/blehh.jpeg";

const Single = () => {

    const {state} = useLocation();
    const item = state.item;

    const navigate = useNavigate();

    return (
        <dialog open={!!item} className="dialog">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.username}</p>

            {item.media_type.startsWith('image/') ? (
                <img src={blehh} alt={item.title}/>
            ) : (
                <video controls style={{maxWidth: '100%'}}>
                    <source src={item.filename} type={item.media_type} />
                </video>
            )}

            <button onClick={() => navigate(-1)}>Back</button>
        </dialog>
    );
}
export default Single;