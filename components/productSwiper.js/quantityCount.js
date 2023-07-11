import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { BiMinus, BiPlus } from "react-icons/bi";

import ToolTip from "../toottip.js";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function QuantityCount({ sizes, optionSize }) {
  const [availableQty, setAvailableQty] = useState(1);
  useEffect(() => {
    if (optionSize != null) {
      setAvailableQty(sizes[optionSize].qty);
    }
  }, [optionSize]);
  const [count, setCount] = useState(1);
  const handleIncrease = () =>
    count < availableQty ? setCount(count + 1) : count;
  const handleDecrease = () => (count > 1 ? setCount(count - 1) : 1);
  const handleChange = (e) => setCount(parseInt(e.target.value));
  if (count > availableQty) {
    setCount(availableQty);
  } else if (count < 1) {
    setCount(1);
  }
  const handleFocus = (e) => e.target.select();
  return (
    <div className={cx("product_quantity")}>
      {optionSize != null ? (
        ""
      ) : (
        <div className={cx("product_quantity_tooltip")}>
          <ToolTip content={`Vui lòng chọn kích thước trước`} />
        </div>
      )}
      <button
        type="button"
        className={cx("product_quantity_btn")}
        disabled={count <= 1 ? true : false}
        onClick={handleDecrease}
      >
        <BiMinus />
      </button>
      <input
        type="number"
        className={cx("product_quantity_input")}
        min={1}
        max={availableQty}
        value={count}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button
        type="button"
        className={cx("product_quantity_btn")}
        disabled={count >= availableQty ? true : false}
        onClick={handleIncrease}
      >
        <BiPlus />
      </button>
    </div>
  );
}
