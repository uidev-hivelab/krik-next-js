// Need use getServerSideProps to get category

import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";
import { BsFillHouseDoorFill } from "react-icons/bs";
import db from "../../utils/db";
import Product from "../../models/Product";
import Category from "../../models/Category";

// import { categories } from "@/data/categories";
// import { products } from "@/data/mensShirt";
import Header from "@/components/header";
import ProductSwiper from "@/components/productPage/mainSwiper";
import ProductInfos from "@/components/productPage/productInfos";
import styles from "@/styles/Product.module.scss";

const cx = classNames.bind(styles);

export default function product({ product, style }) {
  console.log(product);
  // let product = products.filter((item) => item.slug === slug);
  // let category = categories.filter((item) => item._id === product[0].category);
  return (
    <div className="wrap wrap_product_detail">
      <Header />
      <div className={cx("product_detail")}>
        <div className="inner">
          <div className="path">
            <Link href="/" className="path_item">
              <BsFillHouseDoorFill /> Trang chủ
            </Link>{" "}
            {/* / <span className="path_item">{category[0].name}</span> /{" "} */}
            <span className="path_item">{product.name}</span>
          </div>
          <div className={cx("product_wrap")}>
            <ProductSwiper images={product.subProducts[style].images} />
            <ProductInfos product={product} style={style} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  db.connectDb();
  let product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .lean();
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      style,
    },
  };
}
