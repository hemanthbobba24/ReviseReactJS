function ProductCard({name, price, category, status, discount, rating}){
    return (
        <div className = "productCard">
            <h2>{name}</h2>
            <p>${price}</p>
           
            <p>Category: {category}</p>
            <p className = {status ? "instock" : "outofstock"}>
                {status ? "In Stock" : "Out of Stock"}
            </p>
            <p>Discount: {discount}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}
export default ProductCard;