import SliderSlick from "@/components/slider/sliderSlick";
import styles from "./account.module.scss";
import ProductTile from "@/components/productTIle/productTIle";
import Image from "next/image";
import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import { PRODUCTS } from "@/mock/products";

export default function Account () {
  return (
    <main className={styles.accountPage}>
      <div className={styles.accountPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.accountPage__page}>
          <h1>Minha Conta</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <div className="cr-section cr-section--left mt-2">
            <h2>Meus últimos pedidos</h2>
            <div className={styles.accountPage__ordersLast}>
              <span><strong>Status: </strong>Entregue</span>
              <span><strong>Pedido ID: </strong>09480212</span>
              <span><strong>Data do pedido: </strong>08/06/2022</span>
              <span><strong>Valor do pedido: </strong>R$ 600,00</span>
              <span><strong>Metodo de pagamento: </strong>Cartão de crédito</span>
            </div>
            <SliderSlick className="cr-slider" settings={settings}>
              <ProductTile {...PRODUCTS[1]}/>
              <ProductTile {...PRODUCTS[2]}/>
              <ProductTile {...PRODUCTS[1]}/>
              <ProductTile {...PRODUCTS[2]}/>
              <ProductTile {...PRODUCTS[1]}/>
              <ProductTile {...PRODUCTS[2]}/>
            </SliderSlick>
            <button className="button button--text">Ver Todos</button>
          </div>
          <div className="cr-section cr-section--left">
            <h2>Dados Básicos</h2>
            <div className={styles.accountPage__ordersLast}>
              <span><strong>Nome: </strong>Jão</span>
              <span><strong>Sobrenome: </strong>da Silva</span>
              <span><strong>Data de Nascimento: </strong>01/10/1997</span>
              <span><strong>Email: </strong>jaozinhosilva97@coldmail.com</span>
              <span><strong>País: </strong>Brazil</span>
            </div>
            <button className="button button--text">Mudar</button>
          </div>
          <div className="cr-section cr-section--left">
            <h2>Endereço Principal</h2>
            <div className={styles.accountPage__ordersLast}>
              <span><strong>Endereço: </strong>Rua dos Desinformados, 321 - Vila Velha</span>
              <span><strong>Cidade: </strong>Parueri</span>
              <span><strong>Estado: </strong>São Paulo</span>
              <span><strong>País: </strong>Brazil</span>
              <span><strong>Observação: </strong>Bata na porta, por favor.</span>
            </div>
            <button className="button button--text">Mudar</button>
          </div>
          <div className="cr-section cr-section--left">
            <h2>Metodo de Pagamento Principal</h2>
            <div className={styles.accountPage__ordersLast}>
              <span><strong>Metodo de Pagamento: </strong>Cartão de Crédito</span>
              <span><strong>Número: </strong>**** **** **** **** 0078</span>
              <span><strong>Bandeira: </strong>Master Viza CardElo</span>
              <span><strong>Observação: </strong>Não cobre se possível</span>
            </div>
            <button className="button button--text">Mudar</button>
          </div>
        </div>
      </div>
      <div className="cr-section">
        <h2>Veja Também</h2>
        <div className="cr-section__content cr-section__content--5050">
          <div className="cr-section__card">
            <div className="cr-section__imageContainer">
              <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
            </div>
            <span className="cr-section__cardTitle">Shirts</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis, reiciendis labore aperiam explicabo dolore nisi? Ex, tempora! Assumenda possimus maxime perferendis facilis repudiandae molestiae! Architecto laborum nesciunt ipsa excepturi.</p>
          </div>
          <div className="cr-section__card">
            <div className="cr-section__imageContainer">
              <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
            </div>
            <span className="cr-section__cardTitle">Jeans</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nobis, reiciendis labore aperiam explicabo dolore nisi? Ex, tempora! Assumenda possimus maxime perferendis facilis repudiandae molestiae! Architecto laborum nesciunt ipsa excepturi.</p>
          </div>
        </div>
      </div>
      {/* <div className="cr-section">
        <h2>Talvez você goste</h2>
          <SliderSlick className="cr-slider" settings={{...settings, slidesToShow: 4}}>
            <ProductTile title="Shirt"/>
            <ProductTile title="Shirt"/>
            <ProductTile title="Shirt"/>
            <ProductTile title="Shirt"/>
            <ProductTile title="Shirt"/>
            <ProductTile title="Shirt"/>
          </SliderSlick>
      </div> */}
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
