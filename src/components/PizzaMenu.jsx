import PizzaCard from './PizzaCard.jsx';

const pizzaMenu = () => {
    const pizzas = [
        {id: 1, name: 'Smetis', price: 25},
        {id: 2, name: 'Smetis + tonnikala', price: 30},
        {id: 3, name: 'Smetis + torvi', price: 35}
    ]
    return (
        <>
            <h3>PizzaMenu</h3>
            <p>List of delicious pizzas will be displayed here.</p>
            <div className="container">
                {pizzas.map((pizza) => (
                    <PizzaCard key={pizza.id} pizza={pizza} />
                ))}
            </div>
        </>
    )
}

export default pizzaMenu;