import db from "../utils/db";
import Product from "../models/Product";

import Header from "@/components/header";
import Main from "@/components/home/main";
import Footer from "@/components/footer";

export default function Home({ products }) {
  return (
    <div className="wrap">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createAt: -1 }).lean();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
