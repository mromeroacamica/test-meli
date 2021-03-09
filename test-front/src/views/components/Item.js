import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

const Item = ({ item }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/items/${item.id}`);
  };

  function currencyFormatDE(num) {
    return num
      .toFixed(2) // always two decimal digits
      .replace(".", ",") // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // use . as a separator
  }

  return (
    <div className="item" onClick={handleClick}>
      <div className="item_picture">
        <img className="item_picture_img" src={item.picture} alt={item.title} />
      </div>
      <div className="item_description">
        <div className="item_price_shipping_container">
          <div className="item_price">
            $ {currencyFormatDE(item.price.amount)}
          </div>
          <div className="item_shipping">
            {item.free_shipping ? <FontAwesomeIcon icon={faTruck} /> : null}
          </div>
        </div>
        <div className="item_title">{item.title}</div>
      </div>
    </div>
  );
};

export default Item;
