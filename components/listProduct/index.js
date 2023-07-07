import React from "react";
import classNames from "classnames/bind";

import ProductCard from "./productCard";
import styles from "./ListProduct.module.scss";

const cx = classNames.bind(styles);

export default function ListProduct({ data }) {
  return (
    <section className="list_common">
      <h2 className="list_title">Áo Phông</h2>
      <ul className="list_area">
        {data.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </ul>
    </section>
  );
}
