import React from "react";
import { useSelector } from "react-redux";
import "./Card.css";
// assets
import arrow from "../../Assets/Vector (1).svg";
import compare from "../../Assets/compare (1) 1.svg";
import add from "../../Assets/Vector.svg";
import AddItemModal from "../Modal/AddItemModal";

const Card = ({ price, cardImgShow }) => {
  const selector = useSelector((state) => {
    return state.cardReducer.cardData;
  });

  return (
    <div className="card_container">
      {selector.map((val) => (
        <div className="card_div" key={val.id}>
          <div className="card_top_div">
            {val.newArrival ? <img src={val.newArrival} alt="..." /> : null}
            <div className="add_card_div">
              <p>ADD</p>
              <img src={add} alt="..." />
            </div>
          </div>
          {cardImgShow ? (
            <img className="main_card_img" src={val.cardImg} alt="..." />
          ) : null}
          <div className="card_body_div">
            <h3>{val.title}</h3>
            <p className="card_name">{val.name}</p>
            <p className="body_text">{val.desc}</p>
            <div className="card_net_div">
              <div className="net_img">
                <img src={arrow} alt="..." />
                <p>Net</p>
              </div>
              {price ? <p className="price_div">${val.price}</p> : null}
            </div>
            <div className="compared_main_div">
              <div className="card_compare_div">
                <div className="compare_img">
                  <img src={compare} alt="..." />
                  <p>COMPARE</p>
                </div>
                <input type="checkbox" name="compare" id="compare" />
              </div>
              <AddItemModal />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
