import {useLocation} from "react-router";
import {useNavigate} from "react-router";


const Single = () => {

    const {state} = useLocation();
    const item = state.item;
    const navigate = useNavigate();

    return (
        <dialog open={!!item} className="dialog">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.username}</p>
            <img src={item.filename} alt={item.title} />
            <button onClick={() => navigate(-1)}>Back</button>
        </dialog>
    );
}
export default Single;