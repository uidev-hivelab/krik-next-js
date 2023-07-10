// Need use getServerSideProps to get category

import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { BsFillHouseDoorFill } from "react-icons/bs";

import { categories } from "../../data/categories";
import { products } from "../../data/mensShirt";
import Header from "@/components/header";
import ProductSwiper from "../../components/productSwiper.js";
import styles from "@/styles/Product.module.scss";

const cx = classNames.bind(styles);

export default function product({ slug, style }) {
  let product = products.filter((item) => item.slug === slug);
  let category = categories.filter((item) => item._id === product[0].category);
  return (
    <div className="wrap">
      <Header />
      <div className={cx("product_detail")}>
        <div className="inner">
          <div className="path">
            <Link href="/" className="path_item">
              <BsFillHouseDoorFill /> Trang chủ
            </Link>{" "}
            / <span className="path_item">{category[0].name}</span> /{" "}
            <span className="path_item">{product[0].name}</span>
          </div>
          <ProductSwiper images={product[0].subProducts[style].images} />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  return {
    props: {
      slug,
      style,
    },
  };
}
