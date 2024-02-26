'use client';

import Link from "next/link";
import styles from "./accountSideMenu.module.scss";
import { usePathname } from "next/navigation";

export default function AccountSideMenu () {
  const pathname = usePathname();
  return (
    <nav className={styles.accountSideMenu}>
      <ul>
        {
          (OPTIONS_SIDE_MENU.map((option, index) => (
            <li data-active={`${option.href === pathname}`} key={`accountAsideMenu_${index}`}><Link href={option.href}>{option.text}</Link></li>
          )))
        }
      </ul>
    </nav>
  );
}

const OPTIONS_SIDE_MENU = [
  {
    href: "/account",
    text: "Minha Conta"
  },
  {
    href: "/account/orders",
    text: "Meus Pedidos"
  },
  {
    href: "/account/myData",
    text: "Minhas Informações"
  },
  {
    href: "/account/addresses",
    text: "Meus Endereços"
  },
  {
    href: "/account/payments",
    text: "Minha Formas de Pagamentos"
  }
]
