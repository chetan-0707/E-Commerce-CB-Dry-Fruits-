import "./Almond.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import dry_f1 from "../assets/Images/mix_4.jpg";
import dry_f2 from "../assets/Images/mix_6.jpg";
import dry_f3 from "../assets/Images/mix_8.jpg";
import { Link } from "react-router-dom";
import { getCashewnuts as listCashewnut } from "../redux/actions/productActions";
import { setUserDeatils } from "../redux/actions/userAction";
import CommonContainer from "./commonConatiner";

const Cashewnuts = () => {
  const dispatch = useDispatch();

  const getCashewnuts = useSelector((state) => state.getCashewnuts);
  const { cashewnuts, loading, error } = getCashewnuts;
  const clone = ['cashewnut']

  const images = [dry_f1, dry_f2, dry_f3];

  useEffect(() => {
    dispatch(listCashewnut());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserDeatils());
  }, [dispatch]);

  return (
    <div className="cashe-div">
    <CommonContainer 
    data={cashewnuts?cashewnuts:[]}
    pageUrl={clone}
    />
    </div>
  );
};

export default Cashewnuts;
