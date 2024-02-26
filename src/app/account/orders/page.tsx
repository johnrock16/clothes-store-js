import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import styles from "./ordersPage.module.scss";
import SliderSlick from "@/components/slider/sliderSlick";
import ProductTile from "@/components/productTIle/productTIle";
import { PRODUCTS } from "@/mock/products";

export default function OrdersPage () {
  return (
    <main className={styles.ordersPage}>
      <div className={styles.ordersPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.ordersPage__page}>
          <h1>Meus Pedidos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <div className={styles.ordersPage__orders}>
            <Order/>
            <Order/>
            <Order/>
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
  slidesToShow: 3,
  slidesToScroll: 1,
};

function Order () {
  return (
    <div className={styles.order}>
      <div className={styles.order__header}>
        <span>08/06/2022 - 09480212</span>
      </div>
      <div className={styles.order__body}>
        <span><strong>Status: </strong>Entregue</span>
        <span><strong>Pedido ID: </strong>09480212</span>
        <span><strong>Data do pedido: </strong>08/06/2022</span>
        <span><strong>Valor do pedido: </strong>R$ 600,00</span>
        <span><strong>Metodo de pagamento: </strong>Cartão de crédito</span>
        <SliderSlick className="cr-slider mt-2" settings={settings}>
          <ProductTile {...PRODUCTS[1]}/>
          <ProductTile {...PRODUCTS[2]}/>
          <ProductTile {...PRODUCTS[1]}/>
          <ProductTile {...PRODUCTS[2]}/>
          <ProductTile {...PRODUCTS[1]}/>
          <ProductTile {...PRODUCTS[2]}/>
        </SliderSlick>
        <button className="button button--text mt-2 ml-auto">Ver Tudo</button>
      </div>
    </div>
  )
}
