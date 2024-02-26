'use client';

import { BsCart, BsPerson } from "react-icons/bs";
import styles from "./header.module.scss";
import Minicart from "../minicart/minicart";
import Link from "next/link";

export default function Header () {
  return (
    <header className={styles.header}>
      <Link className={styles.header__title} href="/">Crowthes</Link>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <Link href="/collections">Homem</Link>
            <Category/>
          </li>
          <li className={styles.navigation__item}>
            <Link href="/collections">Mulher</Link>
            <Category/>
          </li>
          <li className={styles.navigation__item}>
            <Link href="/collections">Outono</Link>
            <Category/>
          </li>
          <li className={styles.navigation__item}>
            <Link href="/collections">Sobre nós</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.header__icons}>
        <Link href="/account/login"><BsPerson className="icon icon--xl"/></Link>
        <Link href="/cart" className="button button--icon">
          <BsCart className="icon icon--xl"/>
        </Link>
      </div>
      <Minicart/>
    </header>
  );
}

const Category = () => (
  <div className={styles.menuCategory}>
    <div className={styles.category}>
      <ul className={styles.category__list}>
        <li className={styles.category__item}>Destaques</li>
        <li className={styles.category__item}>Roupas</li>
        <li className={styles.category__item}>Acessórios</li>
        <li className={styles.category__item}>Kits</li>
        <li className={styles.category__item}>Presentes</li>
        <li className={styles.category__item}>Mais vendidos</li>
      </ul>

      <ul className={styles.category__list}>
        <li className={styles.category__item}>Destaques</li>
        <li className={styles.category__item}>Roupas</li>
        <li className={styles.category__item}>Acessórios</li>
        <li className={styles.category__item}>Kits</li>
        <li className={styles.category__item}>Presentes</li>
        <li className={styles.category__item}>Mais vendidos</li>
      </ul>

      <ul className={styles.category__list}>
        <li className={styles.category__item}>Destaques</li>
        <li className={styles.category__item}>Roupas</li>
        <li className={styles.category__item}>Acessórios</li>
        <li className={styles.category__item}>Kits</li>
        <li className={styles.category__item}>Presentes</li>
        <li className={styles.category__item}>Mais vendidos</li>
      </ul>
    </div>
  </div>
);
