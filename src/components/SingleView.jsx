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

            {item.media_type.startsWith('image/') ? (
                <img src={item.filename} alt={item.title}/>
            ) : (
                <video controls style={{maxWidth: '100%'}}>
                    <source src={item.filename} type={item.media_type} />
                </video>
            )}

            <button onClick={close}>Close</button>
        </dialog>
    );
};
export default SingleView;