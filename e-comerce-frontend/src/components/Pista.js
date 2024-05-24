import "./Almond.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleImageSlider from "react-simple-image-slider";
import dry_f1 from "../assets/Images/mix_4.jpg";
import dry_f2 from "../assets/Images/mix_6.jpg";
import dry_f3 from "../assets/Images/mix_8.jpg";
import { Link } from "react-router-dom";
import { getPistas as listPista } from "../redux/actions/productActions";
import { setUserDeatils } from "../redux/actions/userAction";
import CommonContainer from "./commonConatiner";

const Pista = () => {
  const dispatch = useDispatch();

  const getPistas = useSelector((state) => state.getPistas);
  const { pistas, loading, error } = getPistas;
  const clone = ['pista']

  const images = [dry_f1, dry_f2, dry_f3];

  useEffect(() => {
    dispatch(listPista());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserDeatils());
  }, [dispatch]);

  console.log("pistaspistas", pistas)
  return (
    <div className="cashe-div">
    <CommonContainer 
    data={pistas}
    pageUrl={clone}
    />
    </div>
  );};

export default Pista;
