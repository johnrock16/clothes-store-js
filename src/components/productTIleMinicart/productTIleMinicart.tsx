import Image from "next/image";
import InputCounter from "../inputCounter/inputCounter";
import styles from "./productTileMinicart.module.scss";
import Link from "next/link";

type ProductTileMinicart = {
  id: string,
  name: string,
  brand: string,
  model: string,
  color: string,
  size: string,
  quantity: number,
  price: number,
  image: any,
}

export default function ProductTileMinicart ({id, name, brand, model, color, size, quantity, image, price }: ProductTileMinicart) {
  return (
      <div className={styles.product}>
        <div className={styles.product__body}>
          <Link href={`/products/${id}`} className={styles.product__image}>
            <Image className="img-fluid" src={image.src} alt={image.alt} width={image.width} height={image.height}/>
          </Link>
          <div className={styles.product__content}>
            <Link href={`/products/${id}`} className={styles.product__title}>
              <span>{name}</span>
            </Link>
            <div className={styles.product__details}>
              <div className={styles.product__detail}>
                <span><strong>Marca:</strong> {brand}</span>
              </div>
              <div className={styles.product__detail}>
                <span><strong>Modelo:</strong> {model}</span>
              </div>
              <div className={styles.product__detail}>
                <span><strong>Cor:</strong> {color}</span>
              </div>
              <div className={styles.product__detail}>
                <span><strong>Tamanho:</strong> {size}</span>
              </div>
              <div className={styles.product__detail}>
                <span><strong>Preço:</strong> R$ {price},00</span>
              </div>
              <div className={styles.product__detail}>
                <span><strong>Valor Total:</strong> R$ {price * quantity},00</span>
              </div>
              <div className={styles.product__detail}>
                <InputCounter quantity={quantity} id={id}/>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.product__footer}>
          <span className={styles.product__parcels}>Em <strong>x3</strong> de <strong>R$ 36,00</strong> ou</span>
          <span className={styles.product__price}>R$ 100,00</span>
        </div> */}
      </div>
    );
}
