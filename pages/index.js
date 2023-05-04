import Header from "@/components/header";
import Main from "@/components/home/main";
import Footer from "@/components/footer";

import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
