import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { BsFillCartFill, BsEyeFill } from "react-icons/bs";
import NumberFormat from "react-number-format";

import styles from "./ListProduct.module.scss";

const cx = classNames.bind(styles);

export default function ListProduct({ data }) {
  return (
    <section className="list_common">
      <h2 className="list_title">{data.title}</h2>
      <ul className="list_area">
        {data.products.map((item, index) => (
          <li className="item" key={index}>
            <div className="item_thumb">
              <img className="img" src={item.thumb} />
            </div>
            <div className="item_content">
              {item.multicolor && (
                <div className="item_color">
                  {item.album.map((item, index) => (
                    <div className="color" key={index}>
                      <img className="img" src={item.image[0]} />
                    </div>
                  ))}
                </div>
              )}
              <strong className="item_name">
                {item.title} #{item.code}
              </strong>
              <b className="item_price">
                <NumberFormat
                  thousandSeparator={true}
                  displayType={"text"}
                  value={item.price}
                />
                ₫
              </b>
              <div className="item_control">
                <button className="btn btn_shop_now" type="button">
                  <BsFillCartFill color="#fff" />
                  Mua nhanh
                </button>
                <Link href={"/detail"} className="btn btn_view_detail">
                  <BsEyeFill color="#fff" />
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
