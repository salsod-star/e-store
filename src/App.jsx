import Collection from "./components/collections/Collection";
import Features from "./components/features/features";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ProductContainer from "./components/product-card/productContainer";
import Card from "./components/service/card";

import { select4uProducts, todayProducts } from "./components/inventory";
import Button from "./components/Button";
import NewsLetter from "./components/newsletter/newsLetter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <section className="text-base">
      <header>
        <Header />
        <Hero />
        <Card />
      </header>
      <main>
        <Collection />
        <ProductContainer products={select4uProducts}>
          <div className="flex justify-between items-center mb-14">
            <p className="font-semibold text-lg">Selected for you</p>{" "}
            <Button style="bg-white text-black border border-solid border-gray-500">
              show more
            </Button>
          </div>
        </ProductContainer>
        <Features />
        <ProductContainer products={todayProducts}>
          <div className="flex justify-center items-center mb-14">
            <p className="font-normal self-center text-2xl">
              Products in today
            </p>
          </div>
        </ProductContainer>
        <NewsLetter />
        <Footer />
      </main>
    </section>
  );
}

export default App;
