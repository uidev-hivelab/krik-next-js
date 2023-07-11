import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import NumberFormat from "react-number-format";

import QuantityCount from "./quantityCount";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function ProductInfos({ product, style }) {
  // console.log(product.subProducts[0].sizes);
  const [optionSize, setOptionSize] = useState(null);
  const [optionColor, setOptionColor] = useState(null);
  const [availableQty, setAvailableQty] = useState(null);
  const [styleActive, setStyleActive] = useState(style);
  const [sizes, setSizes] = useState(product.subProducts[style].sizes);
  const maxQty = sizes.reduce((accumulator, object) => {
    return accumulator + object.qty;
  }, 0);

  useEffect(() => {
    if (optionSize != null) {
      setAvailableQty(sizes[optionSize].qty);
    }
    if (optionColor != null) {
      setSizes(product.subProducts[optionColor].sizes);
      setStyleActive(optionColor);
    }
  }, [optionSize, optionColor, sizes]);

  const handleClickOption = (index) => {
    setOptionSize(index);
  };
  return (
    <div className={cx("product_infos")}>
      <h3 className={cx("product_title")}>{product.name}</h3>
      <p className={cx("product_status")}>{maxQty ? "Còn hàng" : "Hết hàng"}</p>
      <div className={cx("product_price")}>
        <b>
          <NumberFormat
            thousandSeparator={true}
            displayType={"text"}
            value={product.price}
          />
          ₫
        </b>
      </div>
      <div className={cx("product_color")}>
        <strong>MÀU SẮC</strong>
        <div className={cx("product_list_color")}>
          {product.subProducts.map((item, index) => (
            <button
              type="button"
              className={cx(
                "product_item_color",
                index == styleActive ? "product_color_active" : ""
              )}
              style={{ backgroundColor: item.color.color }}
              key={index}
              onClick={() => setOptionColor(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className={cx("product_size")}>
        <strong>KÍCH THƯỚC</strong>
        <div className={cx("product_list_size")}>
          {sizes.map((item, index) => (
            <button
              type="button"
              className={cx(
                "product_item_size",
                item.qty == 0 ? "product_size_disable" : "",
                index == optionSize ? "product_size_active" : ""
              )}
              key={index}
              onClick={() => handleClickOption(index)}
            >
              {item.sizes}
            </button>
          ))}
        </div>
      </div>
      <p className={cx("product_number_available")}>
        Số lượng còn lại: <strong>{availableQty}</strong>
      </p>
      <QuantityCount optionSize={optionSize} sizes={sizes} />
    </div>
  );
}
