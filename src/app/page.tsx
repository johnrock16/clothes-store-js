import BannerTile from "@/components/bannerTIle/bannerTile";
import ProductTile from "@/components/productTIle/productTIle";
import SliderSlick from "@/components/slider/sliderSlick";
import { ToggleSection } from "@/components/toggleSection/toggleSection";
import { PRODUCTS } from "@/mock/products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="cr-banner">
        <Image src="/images/banners/cloth.jpeg" alt="cloth" width={1260} height={750}/>
      </div>
      <div className="">
        <div style={{paddingTop: 32, paddingBottom: 32}}>
          <ToggleSection {...toggleSectionContent}/>
        </div>
        <div className="cr-section">
          <div className="cr-banner cr-banner--large">
            <Image src="/images/banners/skate.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
        </div>
        <div className="cr-section row gap-3 container">
          <BannerTile/>
          <BannerTile/>
          <BannerTile/>
        </div>
        <div className="cr-section">
          <div className="cr-banner cr-banner--large">
            <Image src="/images/banners/skate.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
        </div>
        <div className="cr-section">
          <h2>Mais vendidos</h2>
          <SliderSlick className="cr-slider" settings={settings}>
            <ProductTile {...PRODUCTS[1]}/>
            <ProductTile {...PRODUCTS[1]}/>
            <ProductTile {...PRODUCTS[1]}/>
            <ProductTile {...PRODUCTS[1]}/>
            <ProductTile {...PRODUCTS[1]}/>
            <ProductTile {...PRODUCTS[1]}/>
          </SliderSlick>
        </div>
        <div className="cr-section">
          <div className="cr-banner cr-banner--large">
            <Image src="/images/banners/skate.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
        </div>
        <div className="cr-section">
          <h2>Nossas roupas</h2>
          <div className="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam, voluptate sed eum quaerat suscipit in nisi excepturi nobis facilis explicabo. Saepe eum recusandae iure voluptatum quis sapiente amet ea.e Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe facilis commodi fuga distinctio laborum dignissimos sapiente eos expedita, quibusdam nisi quod ducimus ipsa, dolor laboriosam molestias corporis nesciunt asperiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam, voluptate sed eum quaerat suscipit in nisi excepturi nobis facilis explicabo. Saepe eum recusandae iure voluptatum quis sapiente amet ea.e Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, saepe facilis commodi fuga distinctio laborum dignissimos sapiente eos expedita, quibusdam nisi quod ducimus ipsa, dolor laboriosam molestias corporis nesciunt asperiores.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const toggleSectionContent = {
  "buttons": [
    "homem",
    "mulher"
  ],
  "content": {
    "homem" :
      <SliderSlick className="cr-slider" settings={settings}>
        <ProductTile {...PRODUCTS[1]}/>
        <ProductTile {...PRODUCTS[1]}/>
        <ProductTile {...PRODUCTS[1]}/>
        <ProductTile {...PRODUCTS[1]}/>
        <ProductTile {...PRODUCTS[1]}/>
        <ProductTile {...PRODUCTS[1]}/>
      </SliderSlick>
    ,
    "mulher":
      <SliderSlick className="cr-slider" settings={settings}>
        <ProductTile {...PRODUCTS[2]}/>
        <ProductTile {...PRODUCTS[2]}/>
        <ProductTile {...PRODUCTS[2]}/>
        <ProductTile {...PRODUCTS[2]}/>
        <ProductTile {...PRODUCTS[2]}/>
        <ProductTile {...PRODUCTS[2]}/>
      </SliderSlick>
    ,
  }
}
