//Importando hijos//

import Item from '../Item/Item'
import ItemDetail from '../ItemDetail/ItemDetail'



// Recibe las Props//
const ItemList = ({ products }) => {

    return (
        //Pasando la prop a Item//
        <div>

            {products.map(product => <Item key={product.id} product={product} />)}
            {products.map(product => <ItemDetail key={product.id} product={product}/>)}
            
            
        </div>
    )

}

export default ItemList
