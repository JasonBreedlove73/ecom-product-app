function ProductItem( {product} ){
    return (
        <div class="product-item">
            <h1>{product.catagory}</h1>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.discription}</p>
        </div>
    )
}

export default ProductItem;