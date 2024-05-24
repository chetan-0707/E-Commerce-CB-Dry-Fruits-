import './ProductScreen.css'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// Actions
import {getCashewnutDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const CashewnutScreen = ({match, history}) => {
  const [qty, setQty] = useState(1)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const cashewnutDetails = useSelector(state => state.getCashewnutDetails)
  const {loading, error, cashewnuts} = cashewnutDetails

  useEffect(() => {
    if (cashewnuts && match.params.id !== cashewnuts?._id) {
      dispatch(getCashewnutDetails(match.params.id))
    }
  }, [dispatch, match, cashewnuts])

  const addToCartHandler = () => {
    if (user.userInfo.isLogin) {
      dispatch(addToCart(cashewnuts._id, qty, 'cashewnuts'))
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
              <img src={cashewnuts?.imageUrl} alt={cashewnuts?.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{cashewnuts?.name}</p>
              <p>Price: Rs.{cashewnuts?.price}</p>
              <p>Description: {cashewnuts?.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>Rs.{cashewnuts?.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {cashewnuts?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(cashewnuts?.countInStock).keys()].map(x => (
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

export default CashewnutScreen
