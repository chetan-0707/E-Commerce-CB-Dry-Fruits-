import './ProductScreen.css'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// Actions
import {getFigDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const FigScreen = ({match, history}) => {
  const [qty, setQty] = useState(1)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const figDetails = useSelector(state => state.getFigDetails)
  const {loading, error, figs} = figDetails

  useEffect(() => {
    if (figs && match.params.id !== figs?._id) {
      dispatch(getFigDetails(match.params.id))
    }
  }, [dispatch, match, figs])

  const addToCartHandler = () => {
    console.log("figsfigs", figs)
    if (user.userInfo.isLogin) {
      dispatch(addToCart(figs._id, qty, 'figs'))
      history.push(`/cart`)
      return
    } else {
      alert('You need to first login.')
    }
  }

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={figs?.imageUrl} alt={figs?.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{figs?.name}</p>
              <p>Price: Rs.{figs?.price}</p>
              <p>Description: {figs?.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>Rs.{figs?.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {figs?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(figs?.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default FigScreen
