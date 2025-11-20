const SingleView = (props) => {
    const {item, setSelectedItem} = props;

    if (!item) return null;

    const close = () => {
        setSelectedItem(null);
    }

    return (
        <dialog open={!!item} className="dialog">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.username}</p>
            <button onClick={close}>Close</button>
        </dialog>
    );
};
export default SingleView;