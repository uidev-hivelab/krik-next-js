import React, { useState } from "react";
import classNames from "classnames/bind";
import { BsFillCartFill, BsEyeFill } from "react-icons/bs";
import NumberFormat from "react-number-format";

import styles from "./ListProduct.module.scss";

const cx = classNames.bind(styles);

export default function ProductCard({ product }) {
  const [active, setActive] = useState(0);
  // const [images, setImages] = useState(product.subProducts[active]?.images);
  // useEffect(() => {
  //   setImages(product.subProducts[active].images);
  // }, [active]);

  return (
    <li className="item">
      <a
        href={`/product/${product.slug}?style=${active}`}
        target="_blank"
        className="item_thumb"
      >
        <img className="img" src={product.subProducts[active].color.img} />
      </a>
      <div className="item_content">
        <div className="item_color">
          {product.subProducts.map((item, index) => (
            <div
              className={index == active ? "color is-active" : "color"}
              key={index}
              onMouseOver={() => {
                setActive(index);
              }}
            >
              <img className="img" src={item.color.img} />
            </div>
          ))}
        </div>
        <a
          href={`/product/${product.slug}?style=${active}`}
          target="_blank"
          className="item_name"
        >
          <strong>{product.name}</strong>
        </a>
        <b className="item_price">
          <NumberFormat
            thousandSeparator={true}
            displayType={"text"}
            value={product.price}
          />
          ₫
        </b>
        <div className="item_control">
          <button className="btn btn_shop_now" type="button">
            <BsFillCartFill color="#fff" />
            Mua nhanh
          </button>
          <a
            href={`/product/${product.slug}?style=${active}`}
            target="_blank"
            className="btn btn_view_detail"
          >
            <BsEyeFill color="#fff" />
            Xem chi tiết
          </a>
        </div>
      </div>
    </li>
  );
}
