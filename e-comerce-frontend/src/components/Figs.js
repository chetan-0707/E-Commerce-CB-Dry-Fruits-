import "./Almond.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import dry_f1 from "../assets/Images/mix_4.jpg";
import dry_f2 from "../assets/Images/mix_6.jpg";
import dry_f3 from "../assets/Images/mix_8.jpg";
import { Link } from "react-router-dom";
import { getFigs as listFig } from "../redux/actions/productActions";
import { setUserDeatils } from "../redux/actions/userAction";
import CommonContainer from "./commonConatiner";

const Figs = () => {
  const dispatch = useDispatch();

  const getFigs = useSelector((state) => state.getFigs);
  const { figs, loading, error } = getFigs;
  const clone = ['fig']

  const images = [dry_f1, dry_f2, dry_f3];

  useEffect(() => {
    dispatch(listFig());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserDeatils());
  }, [dispatch]);

  console.log("figs", figs)
  return (
    <div className="cashe-div">
    <CommonContainer 
    data={figs}
    pageUrl={clone}
    />
    </div>
  );};

export default Figs;
