

import {Link} from 'react-router-dom';

// Import CSS del Componente ITEM//

import '../Item/Item.css'


const Item = ({ product }) => {

    return (

        
        <div className="contenedor">
            <div className="producto">
            
                <div>
                <Link key={product.id} to={`/product/${product.id}`}>
                    <img src={product.imageURL} alt={product.name} className="imagen"></img>
                </Link>
                </div>
                <div>
                <Link key={product.id} to={`/product/${product.id}`}>
                    <p>{product.name} </p>
                </Link>
                    <p>{"$" + product.price} </p>
                </div>
            
            </div>
        </div>
        
        
    )


}

export default Item









