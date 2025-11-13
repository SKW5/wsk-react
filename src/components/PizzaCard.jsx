const pizzaCard = ({pizza}) => {

    return (
        <>
            <div className="card">
                <h2>{pizza.name}</h2>
                <div>Hinta {pizza.price}</div>
            </div>
        </>
    )
};

export default pizzaCard;