import React, { useState } from "react";
import Card from "../../Components/Cards/Card";
import Filters from "../../Components/MainPageComp/Filters";
import ResultHead from "../../Components/MainPageComp/ResultHead";
import SideBar from "../../Components/SideBar";
import { priceRange, highToLow, dataAtoZ } from "../../GlobalState/CreateSlice";
import { useDispatch } from "react-redux";
// assets
import topArr from "../../Assets/arrow-right 3.svg";
import "./Style.css";
import { useHistory } from "react-router-dom";

const MainProduct = () => {
  const history = useHistory();

  // // top button show
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 500) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  // // end

  // viewing option filter function
  // view price
  let [price, setPrice] = useState(true);
  const handleShowPrice = (e) => {
    setPrice(e);
  };
  // view price
  let [cardImgT, seCardImgT] = useState(true);
  const handleShowImg = (e) => {
    seCardImgT(e);
  };

  // compare on

  let [comp, setComp] = useState(false);
  const handleCompare = (e) => {
    if (!comp) {
      setComp(e);
      history.push("/compare");
    }
  };

  // price range set

  const dispatch = useDispatch();
  const min = 300,
    max = 1000;
  const [range, setRange] = React.useState([min, max]);
  const handleRange = (event, newValue) => {
    setRange(newValue);
    dispatch(priceRange(newValue));
  };

  // A to Z sorting

  const handleAtoZ = (e) => {
    //  console.log(e.target.value)
    dispatch(dataAtoZ(e.target.value));
  };

  // hight to low sorting

  const handleHighToLow = (e) => {
    dispatch(highToLow(e.target.value));
  };

  return (
    <div>
      <div id="top">
        <SideBar />
      </div>
      <div className="main_page_container">
        <div className="filter_comp">
          <Filters
            handleShowPrice={handleShowPrice}
            handleImg={handleShowImg}
            cardImgT={cardImgT}
            price={price}
            handleRange={handleRange}
            range={range}
            min={min}
            max={max}
          />
        </div>
        <div className="filter_head_card_comp">
          <ResultHead
            handleCompare={handleCompare}
            compare={comp}
            handleAtoZ={handleAtoZ}
            handleHighToLow={handleHighToLow}
          />
          <Card price={price} cardImgShow={cardImgT} />
        </div>
        <div
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
          className="top_arrow_div"
        >
          <img src={topArr} alt="..." />
          <p>Top</p>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
