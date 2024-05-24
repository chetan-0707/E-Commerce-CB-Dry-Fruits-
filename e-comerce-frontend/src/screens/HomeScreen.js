import './HomeScreen.css'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SimpleImageSlider from "react-simple-image-slider";
import dry_f1 from '../assets/Images/mix_4.jpg';
import dry_f2 from '../assets/Images/mix_6.jpg';
import dry_f3 from '../assets/Images/mix_8.jpg';

// Components
import Product from '../components/Product'
import Footer from '../components/Footer'
// import Almond from '../components/Almond';
// import Footer from "../components/Footer"

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions'
import {setUserDeatils} from '../redux/actions/userAction'


const HomeScreen = () => {
  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const {products, loading, error} = getProducts

  const images = [
    dry_f1,
    dry_f2,
    dry_f3,
  ];


  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(setUserDeatils())
  }, [dispatch])

  
  return (
    <>
    <div className="main_page">

      <div className="imagesilder">

      <SimpleImageSlider
        width={'100%'}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>

      
      
      <br></br>

      <div className="homescreen">
      <h2 className="homescreen__title"> Our Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />

          ))
        )}
      </div>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default HomeScreen
