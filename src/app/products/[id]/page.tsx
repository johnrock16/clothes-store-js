'use client';

import { BsDash, BsHandThumbsDown, BsHandThumbsUp, BsPlus, BsStarFill } from "react-icons/bs";
import styles from "./products.module.scss";
import Image from "next/image";
import SliderSlick from "@/components/slider/sliderSlick";
import ProductTile from "@/components/productTIle/productTIle";
import InputCounter from "@/components/inputCounter/inputCounter";
import { useCartStore } from "@/stores/cart";
import { PRODUCTS } from "@/mock/products";
import { useRouter } from "next/navigation";

export default function Page ({params} : any) {
  const cartItems = useCartStore((state: any) => state.items);
  const addCartItem = useCartStore((state: any) => state.addCartItem);
  const router = useRouter();
  const productID = params.id;

  const handleClickBuy = () => {
    addCartItem(productID)
  }

  return (
    <main className={styles.productPage}>
      <div className={styles.productPage__top}>
        <div className={styles.productPage__images}>
          <div className={styles.productPage__image}>
            <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
          <div className={styles.productPage__image}>
            <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
          <div className={styles.productPage__image}>
            <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
          <div className={styles.productPage__image}>
            <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
          <div className={styles.productPage__image}>
            <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
          <div className={styles.productPage__image}>
            <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
          </div>
        </div>
        <div className={styles.productPage__content}>
          <h1>{PRODUCTS[productID].name}</h1>
          <span className={styles.productPage__price}>R$ {PRODUCTS[productID].price},00</span>
          <div className={styles.productPage__contentSection}>
            <span>Cores</span>
            <div className={styles.productPage__colors}>
              {
                (PRODUCTS[productID]?.colorList?.length > 0)
                ?
                  (PRODUCTS[productID].colorList.map((color, index) => (
                    <button key={`${color.name}-${index}`} style={{backgroundColor: color.color}} className={styles.productPage__color}/>
                  )))
                :
                  null
              }
            </div>
          </div>
          <div className={styles.productPage__contentSection}>
            <span>Tamanhos</span>
            <div className={styles.productPage__sizes}>
              {
                (PRODUCTS[productID]?.sizeList?.length > 0)
                ?
                  (PRODUCTS[productID].sizeList.map((size, index) => (
                    <button key={`${size}-${index}`} className={styles.productPage__size}>{size}</button>
                  )))
                :
                  null
              }
            </div>
          </div>
          <div className={styles.productPage__quantity}>
            <label>
              Quantidade
              <InputCounter quantity={cartItems[productID]?.quantity} id={productID}/>
            </label>
          </div>
          <button className="button button--primary mt-5" onClick={handleClickBuy}>
            Comprar
          </button>
          <div className={styles.productPage__description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates debitis minima voluptatibus deleniti quaerat, ipsam odit quidem, voluptate numquam rerum officiis quasi vero facere aliquam tenetur, ea velit ullam ipsum.</p>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            <span><b>E agora ainda melhor</b></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quasi voluptatum quam enim! Autem corrupti ullam ipsa voluptas in, consequatur doloribus velit maxime ipsum nulla sint facilis, sit temporibus repellat.</p>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
            <span><b>E agora ainda melhor</b></span>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quasi voluptatum quam enim! Autem corrupti ullam ipsa voluptas in, consequatur doloribus velit maxime ipsum nulla sint facilis, sit temporibus repellat.</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="cr-section">
          <h2>Técnologia para dar e vender</h2>
          <p>Nós somos a tecnologia necessária para você viver no seculo XXI Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus consequuntur commodi cum sequi est. Illo ducimus, eius est in sint, tempore rerum magnam molestias ea earum repudiandae corrupti aut blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia quaerat cumque voluptatum corporis vero alias tempore ut, velit laudantium ipsum molestias modi temporibus inventore vel consequuntur molestiae consequatur excepturi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, dolor provident illo iusto inventore modi optio necessitatibus maxime sit sapiente a fugiat ratione eaque minima repellendus ducimus praesentium, quis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci similique deleniti tenetur modi, assumenda fuga commodi ipsam fugiat placeat magnam, aperiam error nostrum nobis vel! Maiores architecto facilis suscipit quibusdam!</p>
          <div className="cr-section__banner mt-4">
            <div className="cr-section__imageContainer">
              <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
            </div>
            <div className='cr-section__textContent'>
              <h3>Revolução e instrução</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod eligendi voluptates laboriosam harum perferendis qui accusantium optio animi ex illum, perspiciatis, veniam nulla molestiae sed laborum ut cum! Nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis eos nobis nesciunt error, sit repellendus quos ad fugiat, eius dolores inventore aliquid consectetur itaque doloremque enim corrupti exercitationem velit!</p>
            </div>
          </div>
          <div className="cr-section__banner cr-section__banner--right">
            <div className="cr-section__imageContainer">
              <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
            </div>
            <div className='cr-section__textContent'>
              <h3>Revolução e instrução</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod eligendi voluptates laboriosam harum perferendis qui accusantium optio animi ex illum, perspiciatis, veniam nulla molestiae sed laborum ut cum! Nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis eos nobis nesciunt error, sit repellendus quos ad fugiat, eius dolores inventore aliquid consectetur itaque doloremque enim corrupti exercitationem velit!</p>
            </div>
          </div>
          <div className="cr-section__banner">
            <div className="cr-section__imageContainer">
              <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
            </div>
            <div className='cr-section__textContent'>
              <h3>Revolução e instrução</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod eligendi voluptates laboriosam harum perferendis qui accusantium optio animi ex illum, perspiciatis, veniam nulla molestiae sed laborum ut cum! Nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis eos nobis nesciunt error, sit repellendus quos ad fugiat, eius dolores inventore aliquid consectetur itaque doloremque enim corrupti exercitationem velit!</p>
            </div>
          </div>
          <div className='cr-section__textContent mt-4'>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod eligendi voluptates laboriosam harum perferendis qui accusantium optio animi ex illum, perspiciatis, veniam nulla molestiae sed laborum ut cum! Nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium corporis eos nobis nesciunt error, sit repellendus quos ad fugiat, eius dolores inventore aliquid consectetur itaque doloremque enim corrupti exercitationem velit!</p>
          </div>
        </div>
      </div>
      <div className="cr-section">
        <h2>Produtos semelhantes</h2>
        <SliderSlick className="cr-slider" settings={settings}>
          <ProductTile {...PRODUCTS[1]}/>
          <ProductTile {...PRODUCTS[2]}/>
          <ProductTile {...PRODUCTS[1]}/>
          <ProductTile {...PRODUCTS[2]}/>
          <ProductTile {...PRODUCTS[1]}/>
          <ProductTile {...PRODUCTS[2]}/>
        </SliderSlick>
      </div>
      <div className="container">
        <div className={styles.reviewArea}>
          <div className={styles.reviews}>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
            <Review/>
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

function Review () {
  return (
    <div className={styles.review}>
      <div className={styles.review__top}>
        <div className={styles.review__stars}>
          <BsStarFill className={styles.review__star}/>
          <BsStarFill className={styles.review__star}/>
          <BsStarFill className={styles.review__star}/>
          <BsStarFill className={styles.review__star}/>
          <BsStarFill className={styles.review__star}/>
          <BsStarFill className={styles.review__star}/>
        </div>
        <span className={styles.review__reviewer}>João Rocha</span>
      </div>
      <div className={styles.review__body}>
        <span className={styles.review__title}>Melhor Shirt que já vi na vida</span>
        <p className={styles.review__description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus mollitia aperiam, dolore temporibus deleniti consequuntur nisi sed. Nam dolorum placeat ad tempora, eum non dolores excepturi laudantium! Quisquam, doloremque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consectetur possimus quos totam animi est quo error molestiae adipisci dicta corrupti eveniet, qui, beatae incidunt deserunt minima, quibusdam accusantium sint.</p>
      </div>
      <div className={styles.review__footer}>
        <span>Este comentario foi util?</span>
        <div className={styles.review__buttonLikeOpinion}>
          <button>
            <BsHandThumbsUp className="icon"/>
          </button>
          <span>16</span>
        </div>
        <div className={styles.review__buttonLikeOpinion}>
          <button>
            <BsHandThumbsDown className="icon"/>
          </button>
          <span>08</span>
        </div>
      </div>
    </div>
  );
}
