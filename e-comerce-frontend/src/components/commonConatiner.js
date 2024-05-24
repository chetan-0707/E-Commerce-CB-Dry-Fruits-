import "./Almond.css";
import { Link } from "react-router-dom";


const CommonContainer = (data, pageUrl) => {
  
  return (
    <div>
      <div className="img-container">
    <img className="banner" src={data?.data[0]?.imageUrl} alt={data?.data[0]?.name}/>
    </div>
    <div className="cashe-div">{data?.data[0] ? data?.data.map((info) => (
        
    <div className="cashe">
        {console.log("infoinfo", info)}
      
          <img src={info?.imageUrl} alt={info?.name} />

          <div className="cashe__info">
            <p className="info__name">{info?.name}</p>

            <p className="info__description">
              {info?.description?.substring(0, 100)}...
            </p>

            <p className="info__price">Rs.{info?.price}</p>

            <Link to={`/${data?.pageUrl[0]}/${info._id}`} className="info__button">
              View
            </Link>
          </div>
      
    </div>
    )) : ''}
    </div>
    </div>
  );
};

export default CommonContainer;