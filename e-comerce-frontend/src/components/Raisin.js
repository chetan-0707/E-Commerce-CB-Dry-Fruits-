import "./Almond.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import dry_f1 from "../assets/Images/mix_4.jpg";
import dry_f2 from "../assets/Images/mix_6.jpg";
import dry_f3 from "../assets/Images/mix_8.jpg";
import { Link } from "react-router-dom";
import { getRaisins as listRaisin } from "../redux/actions/productActions";
import { setUserDeatils } from "../redux/actions/userAction";
import CommonContainer from "./commonConatiner";

const Raisin = () => {
  const dispatch = useDispatch();

  const getRaisins = useSelector((state) => state.getRaisins);
  const { raisins, loading, error } = getRaisins;
  const clone = ['raisin']

  const images = [dry_f1, dry_f2, dry_f3];

  useEffect(() => {
    dispatch(listRaisin());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserDeatils());
  }, [dispatch]);

  console.log("raisinsraisins", raisins)
  return (
    <div className="cashe-div">
    <CommonContainer 
    data={raisins}
    pageUrl={clone}
    />
    </div>
  );};

export default Raisin;
