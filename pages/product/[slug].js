import React, { useRef, useEffect } from "react";
import Link from "next/link";
import classNames from "classnames/bind";

import Header from "@/components/header";
import styles from "@/styles/Product.module.scss";

const cx = classNames.bind(styles);

export default function product() {
  return (
    <div className="wrap">
      <Header />
    </div>
  );
}
