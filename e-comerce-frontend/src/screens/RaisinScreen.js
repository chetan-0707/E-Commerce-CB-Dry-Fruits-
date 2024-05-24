import './ProductScreen.css'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// Actions
import {getRaisinDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const RaisinScreen = ({match, history}) => {
  const [qty, setQty] = useState(1)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const raisinDetails = useSelector(state => state.getRaisinDetails)
  const {loading, error, raisins} = raisinDetails

  useEffect(() => {
    if (raisins && match.params.id !== raisins?._id) {
      dispatch(getRaisinDetails(match.params.id))
    }
  }, [dispatch, match, raisins])

  const addToCartHandler = () => {
    if (user.userInfo.isLogin) {
      dispatch(addToCart(raisins._id, qty, 'raisins'))
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
              <img src={raisins?.imageUrl} alt={raisins?.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{raisins?.name}</p>
              <p>Price: Rs.{raisins?.price}</p>
              <p>Description: {raisins?.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>Rs.{raisins?.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {raisins?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(raisins?.countInStock).keys()].map(x => (
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

export default RaisinScreen
