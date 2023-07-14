import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import NumberFormat from "react-number-format";
import Link from "next/link";
import { Collapse } from "antd";

import Button from "../button";
import QuantityCount from "./quantityCount";
import ToolTip from "../tooltip.js";
import ProductShare from "./productShare";
import styles from "./ProductDetail.module.scss";
import axios from "axios";

const cx = classNames.bind(styles);

export default function ProductInfos({ product, style }) {
  const router = useRouter();
  const [optionSize, setOptionSize] = useState(null);
  const [optionColor, setOptionColor] = useState(null);
  const [availableQty, setAvailableQty] = useState(null);
  const [styleActive, setStyleActive] = useState(style);
  const [sizes, setSizes] = useState(product.subProducts[style].sizes);
  const maxQty = sizes.reduce((accumulator, object) => {
    return accumulator + object.qty;
  }, 0);

  const items = product.details.map((item, index) => {
    const container = {};
    container.key = index;
    container.label = item.title;
    container.children = item.content.map((detail, index) => (
      <p key={index}>{detail}</p>
    ));
    return container;
  });

  useEffect(() => {
    if (optionSize != null) {
      setAvailableQty(sizes[optionSize].qty);
    }
  }, [optionSize]);

  useEffect(() => {
    if (optionColor != null) {
      setSizes(product.subProducts[optionColor].sizes);
      setStyleActive(optionColor);
      setOptionSize(null);
      setAvailableQty(null);
    }
  }, [optionColor, sizes]);

  const handleClickOption = (index) => {
    setOptionSize(index);
  };

  const addToCart = async () => {
    const { data } = await axios.get(
      `/api/product/${product._id}?style=${product.style}&size=${router.query.size}`
    );

    console.log(data);
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
            <Link
              key={index}
              href={`/product/${product.slug}?style=${index}`}
              className={cx(
                "product_item_color",
                index == styleActive ? "product_color_active" : ""
              )}
              style={{ background: item.color.color }}
              onClick={() => setOptionColor(index)}
            ></Link>
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
        Số lượng có sẵn: <strong>{availableQty}</strong>
      </p>
      <QuantityCount optionSize={optionSize} sizes={sizes} />
      <div
        className={cx(
          "product_btn",
          optionSize == null ? "product_btn_disabled" : ""
        )}
      >
        <Button
          type="button"
          classes="btn_add_cart"
          text="THÊM VÀO GIỎ HÀNG"
          onClick={() => addToCart()}
        />
        <Button type="button" classes="btn_buy_now" text="BUY NOW" />
        {optionSize != null ? (
          ""
        ) : (
          <div className={cx("product_btn_tooltip")}>
            <ToolTip content={`Vui lòng chọn kích thước`} />
          </div>
        )}
      </div>
      <ProductShare />
      <div className={cx("product_collapse")}>
        <Collapse items={items} />
      </div>
    </div>
  );
}
