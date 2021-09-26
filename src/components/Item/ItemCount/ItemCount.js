import { useState } from 'react'


const ItemCount = ({ item }) => {

    const [count, setCount] = useState(0)

    const miFuncionRestar = () => {

        if (count <= 0) {

            alert("Valor no permitido")

        } else setCount(count - 1)

    }


    return (

        <div className='contador container'>

            <h1 className='cuenta'> {count} </h1>

            <div>
                <button className="botones" onClick={miFuncionRestar}>-</button>
                <button className="botones" onClick={() => setCount(count + 1)}>+</button>
            </div>


        </div>


    )

}

export default ItemCount