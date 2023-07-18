import KeyVisual from "@/components/keyVisual";
import Policy from "../policy";
import ListProduct from "@/components/listProduct";

export default function Main({ products }) {
  return (
    <>
      <KeyVisual />
      <Policy />
      <ListProduct products={products} />
    </>
  );
}
