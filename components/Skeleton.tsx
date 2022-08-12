import { NextPage } from "next"
import styles from "../styles/DataList.module.css"


const Skeleton: NextPage = () => {

  const list: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]

  return(
    <div className={styles.container}>
      {list.map((i) => (
        <div className={styles.box} key={i}>
          <div className={`${styles.loading__img} ${styles.loading}`}></div>
          <h3 className={`${styles.loading__title} ${styles.loading}`}></h3>
          <span className={`${styles.loading__status} ${styles.loading}`}></span>
        </div>
      ))}
    </div>
  )
}

export default Skeleton