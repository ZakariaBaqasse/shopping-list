import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ShoppingCart from "../components/ShoppingCart";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <section>
      <Banner />
      <Categories setCategory={setCategory} category={category} />
      <ShoppingCart category={category} />
      <Footer />
    </section>
  );
};

export default Home;
