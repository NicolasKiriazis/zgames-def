import carrito from '../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
    

return(

<button className='btn carrito'>
<img className= 'carrito'src={carrito} alt="carrito-compras-web.png"></img>
</button>
)



}

export default CartWidget
