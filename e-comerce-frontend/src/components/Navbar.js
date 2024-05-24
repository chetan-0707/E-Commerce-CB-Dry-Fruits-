import './Navbar.css'
import {Link, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useMemo} from 'react'
import {logout} from '../utils/localstorage'
import {setInitialState} from '../redux/actions/userAction'
import { ResetCart } from '../redux/actions/cartActions'


import Almond from '../components/Almond';


const Navbar = ({click}) => {
  const cart = useSelector(state => state.cart)
  const history = useHistory()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  // console.log({user})

  const {cartItems} = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const _handleLogout = () => {
    // console.log('click')
    dispatch(setInitialState())
    dispatch(ResetCart())
    logout()

    history.push('/')
  }

  return (
    <nav className="navbar">
      <div className="flex-container">
     
        
        <div className="navbar__logo">
        <Link to="/">CB Dryfruits</Link>
          {/* <h2> <a href="/">CB Dryfruits</a></h2> */}
          {/* <h2> CB Dryfruits</h2> */}
          {/* navbar__logo */}
        </div>
        
        {/* <div className="products">
          <h2>Products</h2>
        </div> */}
        <div className="products">
        <div className="dropdown">
        <button className="dropbtn">Products</button>
        <div className="dropdown-content">
          <a href="/Almond">Almond</a>
          <a href="/Cashewnuts">Cashewnuts</a>
          <a href="/Raisin">Raisin</a>
          <a href="/Pista">Pista</a>
          <a href="/Figs">Figs</a>
        </div>
        </div>
        
</div>

      
      </div>


      {/* <div className="products">
      <button className="w3-button" onclick="myFunction()">
        Dropdown <i className="fa fa-caret-down"></i>
      </button>
      <div id="demo" className="w3-dropdown-content w3-bar-block w3-card">
        <a href="#" className="w3-bar-item w3-button">Link 1</a>
        <a href="#" className="w3-bar-item w3-button">Link 2</a>
        <a href="#" className="w3-bar-item w3-button">Link 3</a>
      </div>
    </div> */}

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>

        <li>
          <Link to="/Aboutus">About Us</Link>
        </li>

        <li>
          <Link to="/Contact">Contact Us</Link>
        </li>

        {!user.userInfo.isLogin ? (
          <li>
            <Link to="/signin">Login</Link>
          </li>
        ) : (
          <li>
            <p onClick={_handleLogout}>Logout</p>
          </li>
        )}
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
