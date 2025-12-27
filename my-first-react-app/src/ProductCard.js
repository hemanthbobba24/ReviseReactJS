function ProductCard({name, price, category, inStock, discount, rating}){
    return (
        <div className = "productCard">
            <h2>{name}</h2>
            <p>${price}</p>
            <p>Category: {category}</p>
            <p className = {inStock ? "instock" : "outofstock"}>
                {inStock ? "In Stock" : "Out of Stock"}
            </p>
            <p>Discount: {discount}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}
export default ProductCard;