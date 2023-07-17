import React from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

export default function cart() {
  const { data: session } = useSession();
  const { cart } = useSelector((state) => ({ ...state }));
  console.log("cart", cart);
  return <div>cart</div>;
}
