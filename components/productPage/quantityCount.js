import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { BiMinus, BiPlus } from "react-icons/bi";

import ToolTip from "../tooltip.js/index.js";
import styles from "./ProductDetail.module.scss";

const cx = classNames.bind(styles);

export default function QuantityCount({ sizes, optionSize }) {
  const [availableQty, setAvailableQty] = useState(1);
  const [count, setCount] = useState(1);
  const handleIncrease = () =>
    count < availableQty ? setCount(count + 1) : count;
  const handleDecrease = () => (count > 1 ? setCount(count - 1) : 1);
  const handleChange = (e) => {
    if (e.target.value < 1) {
      setCount(1);
    } else if (e.target.value > availableQty) {
      setCount(availableQty);
    } else {
      setCount(parseInt(e.target.value));
    }
  };

  useEffect(() => {
    setCount(1);
    if (optionSize != null) {
      setAvailableQty(sizes[optionSize].qty);
    } else {
      setAvailableQty(1);
    }
  }, [optionSize]);

  return (
    <div className={cx("product_quantity")}>
      {optionSize != null ? (
        ""
      ) : (
        <div className={cx("product_quantity_tooltip")}>
          <ToolTip content={`Vui lòng chọn kích thước`} />
        </div>
      )}
      <button
        type="button"
        className={cx("product_quantity_btn")}
        disabled={count <= 1}
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
        disabled={optionSize == null}
        onChange={handleChange}
      />
      <button
        type="button"
        className={cx("product_quantity_btn")}
        disabled={count >= availableQty}
        onClick={handleIncrease}
      >
        <BiPlus />
      </button>
    </div>
  );
}
