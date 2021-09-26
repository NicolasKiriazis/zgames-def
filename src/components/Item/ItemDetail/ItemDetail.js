

import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    return (     


        
        <div className="cont-detail">
            
            <div className="container">

                <img src={product.imgURL} alt={product.name} className="img-detail"></img>

                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p className= "price" >{"$" + product.price}</p>
                <p> {product.category} </p>
                <p>{"Stock:" + product.stock}</p>
                

            </div>
        
            
        </div>

        
    )

}

export default ItemDetail


