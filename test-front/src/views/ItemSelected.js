import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import RequestServices from "../services/request.services";

const ItemSelected = () => {
  const [item, saveItem] = useState({});
  const [noProduct, saveNoProduct] = useState(true);
  useEffect(async () => {
    const url = window.location.href;
    const itemId = url.substr(url.lastIndexOf("/") + 1);
    console.log(itemId);
    try {
      const result = await RequestServices.item(itemId);
      console.log(result);
      if (result) {
        console.log(result.item.price.amount);
        saveItem(result.item);
        saveNoProduct(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const condition = (condition) => {
    if (condition == "new") {
      return "Nuevo";
    } else {
      return "Usado";
    }
  };

  return (
    <Container>
      {noProduct ? (
        <div>No existe el producto</div>
      ) : (
        <div className="item_selected">
          <div className="item_selected_picture_info">
            <div className="item_selected_picture">
              <img src={item.picture} alt={item.title} />
            </div>
            <div className="item_selected_info">
              <span className="item_selected_condition">
                {condition(item.condition)} - {item.sold_quantity} vendidos
              </span>
              <span className="item_selected_title">{item.title}</span>
              <span className="item_selected_price">
                $ {item.price.amount}
                <sup className="item_selected_decimals">
                  {item.price.decimals == 0 ? "00" : null}
                </sup>
              </span>
              <button className="item_selected_button">Comprar</button>
            </div>
          </div>
          <div className="item_selected_description">
            <h2 className="item_selected_description_title">
              Descripción del producto
            </h2>
            <div className="item_selected_description_detail" />
            {item.description}
          </div>
        </div>
      )}
    </Container>
  );
};

export default ItemSelected;
