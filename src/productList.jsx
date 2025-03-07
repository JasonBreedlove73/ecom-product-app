import ProductItem from "./productItem";


function ProductList( {products} ){
    return(
        <div className="product-container">
            {products.map ((product) => (
             <ProductItem key ={product.id} product={product}/>  
           
             ))}
            
        </div>
    );
}

export default ProductList;