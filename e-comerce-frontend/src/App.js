import './App.css'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import Almond from './components/Almond'
import Cashewnuts from './components/Cashewnuts'
import Raisin from './components/Raisin'
import Pista from './components/Pista'
import Figs from './components/Figs'
import Footer from './components/Footer'

// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import AlmondScreen from './screens/AlmondScreen'
import CashewnutScreen from './screens/CashewnutsScreen'
import FigScreen from './screens/FigScreen'
import PistaScreen from './screens/PistaScreen'
import RaisinScreen from './screens/RaisinScreen'
import CartScreen from './screens/CartScreen'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'
import {useDispatch} from 'react-redux'
import {fetchCart} from './redux/actions/cartActions'
import {setUserDeatils} from './redux/actions/userAction'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  // fetchCart
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
    dispatch(setUserDeatils())
  }, [dispatch])







  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="container">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/Aboutus" component={Aboutus} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Almond" component={Almond} />
          <Route exact path="/Cashewnuts" component={Cashewnuts} />
          <Route exact path="/Raisin" component={Raisin} />
          <Route exact path="/Pista" component={Pista} />
          <Route exact path="/Figs" component={Figs} />
          <Route exact path="/almond/:id" component={AlmondScreen} />
          <Route exact path="/cashewnut/:id" component={CashewnutScreen} />
          <Route exact path="/fig/:id" component={FigScreen} />
          <Route exact path="/pista/:id" component={PistaScreen} />
          <Route exact path="/raisin/:id" component={RaisinScreen} />

        </Switch>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
