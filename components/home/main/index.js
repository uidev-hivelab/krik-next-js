import KeyVisual from "@/components/keyVisual";
import Policy from "../policy";
import styles from "./styles.module.scss";

import ListProduct from "@/components/listProduct";
import { mensShirt } from "../../../data/mensShirt";

export default function Main() {
  return (
    <>
      <KeyVisual />
      <Policy />
      <ListProduct data={mensShirt} />
    </>
  );
}
