import './App.css';

//Import Js Bootstrap//
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Import Css Bootstrap//
import 'bootstrap/dist/css/bootstrap.css';

//Componentes Hijos//
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListContainer from './components/Item/ItemListContainer/ItemListContainer';

function App() {

  return(

    <BrowserRouter> 
    <Navbar/>
    
    <Switch>

    <Route path="/products">
    <ItemListContainer/>
    </Route>


    <Route path="/">
    <Home/>
    </Route>
    
    </Switch>

    <Footer/>

    </BrowserRouter>
  )


}



export default App;
