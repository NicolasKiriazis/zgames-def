
//Imagenes juegos de Ps5 //

import img1 from '../../../assets/gamesimg/fifa22ps5.jpg'
import img2 from '../../../assets/gamesimg/farcry6ps5.jpg'
import img3 from '../../../assets/gamesimg/crash4ps5.jpg'
import img4 from '../../../assets/gamesimg/borderlands3ps5.jpg'

//Imagenes juegos de Ps4 //

import img5 from '../../../assets/gamesimg/fifa22ps4.png'
import img6 from '../../../assets/gamesimg/godofwar4.png'
import img7 from '../../../assets/gamesimg/thelastofus2ps4.png'
import img8 from '../../../assets/gamesimg/captaintsubasaps4.jpg'

//Importacion setState y useEffect//

import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

//Importaciones de Hijos //

import ItemList from '../ItemList/ItemList'

//--------------------------------------------------------------------//

//Funcion creadora de Objetos//


function Game(id, name, category, price, stock, imageURL, description) {

    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.stock = stock;
    this.imageURL = imageURL;
    this.description = description;

}

// Juegos Ps5 // 

const fifa22ps5 = new Game("01", "Fifa 22 PS5", "Playstation 5", 10424, 20, img1, "En esta entrega, las batallas por la posesión y los duelos en ataque se resolverán de forma más natural que nunca. Además de la vibración háptica, FIFA 21 PS5 aprovechará también los gatillos adaptativos del DualSense para representar la energía de los jugadores.")
const farcry6ps5 = new Game("02", "Far Cry 6 PS5", "Playstation 5", 10425, 10, img2, "En una isla tropical, los jugadores encarnarán a Dani Rojas como hombre o mujer y experimentarán una historia que los llevará de ser un ciudadano reacio a un líder que lucha contra el régimen de Anton, empleando armas, vehículos y animales. En PS5 se harán notar las mejoras gráficas y menores tiempos de carga.")
const crash4ps5 = new Game("03", "Crash Bandicoot 4 PS5", "Playstation 5", 9478, 10, img3, "En esta aventura en el tiempo, se abren paso nuevas habilidades y dimensiones alternativas. El control inalámbrico DualSense de PS5 saca provecho de los gatillos adaptativos y los jugadores sentirán cada golpe del blaster de Neo Cortex o el Hookshot de Tawna en esta divertida historia.")
const borderlands3ps5 = new Game("04", "Borderlands 3 PS5", "Playstation 5", 10231, 10, img4, "Más allá de Pandora hay nuevos mundos por conocer y los jugadores tendrán la oportunidad de explorar nuevos espacios hostiles y destruidos, urbanos y naturales, llenos de enemigos pero también de armas y artilugios para vencerlos.")

// Juegos Ps4 //

const fifa22ps4 = new Game("05", "Fifa 22 PS4", "Playstation 4", 7200, 20, img5, "En esta entrega, las batallas por la posesión y los duelos en ataque se resolverán de forma más natural que nunca. Además de la vibración háptica, FIFA 21 PS5 aprovechará también los gatillos adaptativos del DualSense para representar la energía de los jugadores.")
const godofwar4 = new Game("06", "God Of War PS4", "Playstation 4", 2300, 10, img6, "Esta entrega está protagonizada por Kratos y Atreus, que deberán sobrevivir en un mundo habitado por dioses y criaturas nórdicas que los pondrán a prueba a cada instante. Ambientada en los entornos más increíbles y peligrosos de la saga, los jugadores podrán disfrutar de una apasionante historia.")
const thelastofus2ps4 = new Game("07", "The Last Of Us 2 PS4", "Playstation 4", 3500, 10, img7, "Esta entrega se desarrolla cinco años después de la catástrofe, cuando Ellie y Joel viven en una tranquila comunidad de sobrevivientes de Wynoming. Los jugadores serán testigos de un violento evento que interrumpe esa paz y experimentarán un viaje en busca de justicia y venganza.")
const captaintsubasaps4 = new Game("08", "Captain Tsubasa PS4", "Playstation 4", 5000, 10, img8, "Este juego de fútbol y acción está basado en la famosa serie de animé, con Óliver y el Nankatsu como principales protagonistas. Los jugadores podrán disfrutar dos increíbles modos de historia: Tsubasa y New Hero, en el que podrán jugar con su propio personaje.")


// Inserto en un Array //

const games = []

games.push(fifa22ps5, farcry6ps5, crash4ps5, borderlands3ps5, fifa22ps4, godofwar4, thelastofus2ps4, captaintsubasaps4)

// Promise para obtener el array con asincronía //

function GetList() {

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(games), 2000)
    })

}


const ItemListContainer = () => {

    //Usando useState para obtener el estado con el array//
    const [products, setProducts] = useState([])

    const {id} = useParams()

    //Usando useEffect para cuando se ejecute la promesa luego setear el estado//

    useEffect(() => {

        const list = GetList() // Recibe la Promise //
        console.log(list)
        list.then(producto => {
            setProducts(producto)
        }, err => { console.log(err) })

    }, [id])

    // Pasando el estado por Props

    return (
        
        <>
        <ItemList products={products} />
        
        </>
    )


}

export default ItemListContainer