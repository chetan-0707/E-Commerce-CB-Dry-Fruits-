import './ProductScreen.css'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

// Actions
import {getAlmondDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const AlmondScreen = ({match, history}) => {
  const [qty, setQty] = useState(1)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const almondDetails = useSelector(state => state.getAlmondDetails)
  const {loading, error, almonds} = almondDetails

  useEffect(() => {
    if (almonds && match.params.id !== almonds?._id) {
      dispatch(getAlmondDetails(match.params.id))
    }
  }, [dispatch, match, almonds])

  const addToCartHandler = () => {
    console.log("almondsalmonds", almonds)
    if (user.userInfo.isLogin) {
      dispatch(addToCart(almonds._id, qty, 'almonds'))
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
              <img src={almonds?.imageUrl} alt={almonds?.name} />
            </div>
            <div className="left__info">
              <p className="left__name">{almonds?.name}</p>
              <p>Price: Rs.{almonds?.price}</p>
              <p>Description: {almonds?.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>Rs.{almonds?.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {almonds?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={e => setQty(e.target.value)}>
                  {[...Array(almonds?.countInStock).keys()].map(x => (
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

export default AlmondScreen
