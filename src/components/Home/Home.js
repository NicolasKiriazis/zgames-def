
//Import Imagenes//
import banner from '../../../src/assets/banner.jpg'


//Import Css//
import '../Home/Home.css'

//Import Hijos//
import ItemListContainer from '../Item/ItemListContainer/ItemListContainer'



const Home = () => {

    return (
        <div>

            <img className="img-fluid banner" src={banner} alt="banner-zgames-tienda"></img>

            <h1> Nuestros Juegos: </h1>
            
            <ItemListContainer/>

        </div>

    )

}

export default Home
