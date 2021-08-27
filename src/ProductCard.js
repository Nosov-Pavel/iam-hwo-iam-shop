function ProductCard(props){
    return(
        <div>
            <h3>{props.product.prodName}</h3>
            <img src= {props.product.img}/>
            <p> Price: ${props.product.price}</p>

        </div>

    );
}
export default ProductCard;