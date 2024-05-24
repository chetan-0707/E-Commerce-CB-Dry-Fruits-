import './ProductScreen.css'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// Actions
import {getPistaDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const PistaScreen = ({match, history}) => {
  const [qty, setQty] = useState(1)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const pistaDetails = useSelector(state => state.getPistaDetails)
  const {loading, error, pistas} = pistaDetails

  useEffect(() => {
    if (pistas && match.params.id !== pistas?._id) {
      dispatch(getPistaDetails(match.params.id))
    }
  }, [dispatch, match, pistas])

  const addToCartHandler = () => {
    console.log("pistaspistas", pistas)
    if (user.userInfo.isLogin) {
      dispatch(addToCart(pistas._id, qty, 'pistas'))
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
              <img src={pistas?.imageUrl} alt={pistas?.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{pistas?.name}</p>
              <p>Price: Rs.{pistas?.price}</p>
              <p>Description: {pistas?.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>Rs.{pistas?.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {pistas?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(pistas?.countInStock).keys()].map(x => (
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

export default PistaScreen
