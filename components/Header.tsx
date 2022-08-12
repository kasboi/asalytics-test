import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Header.module.css"
import Link from "next/link";

const Header: NextPage = () =>{

  return(
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Image src="/logo.png" alt="site logo" width={120} height={56}/>
        <Link href="#">
          <a className={styles.header__img}>Analyze ASAs</a>
        </Link>
      </nav>
      <h1 className={styles.para}>
        List of Algorand Standard Assets on ASAlytics
      </h1>
    </div>
  )
}

export default Header;