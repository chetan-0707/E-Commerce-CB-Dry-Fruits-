import "./Almond.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import dry_f1 from "../assets/Images/mix_4.jpg";
import dry_f2 from "../assets/Images/mix_6.jpg";
import dry_f3 from "../assets/Images/mix_8.jpg";
import { Link } from "react-router-dom";
import { getAlmonds as listAlmond } from "../redux/actions/productActions";
import { setUserDeatils } from "../redux/actions/userAction";
import CommonContainer from "./commonConatiner";

const Almond = () => {
  const dispatch = useDispatch();

  const getAlmonds = useSelector((state) => state.getAlmonds);
  const { almonds, loading, error } = getAlmonds;

  const images = [dry_f1, dry_f2, dry_f3];
  const clone = ['almond']

  useEffect(() => {
    dispatch(listAlmond());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserDeatils());
  }, [dispatch]);
 

  return (
    <div>
    <CommonContainer
     data={clone?almonds: []}
     pageUrl={clone}
    
    />
    </div>
  );
};

export default Almond;
