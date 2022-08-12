import { NextPage } from "next"
import styles from "../styles/DataList.module.css"

const DataItem: NextPage = (props: any) => {

  return(
    <div className={styles.container}>
    {props.data?.map((item: any) => (
      <div className={styles.box} key={item.assetId}>
        <img src={item.logo ? item.logo : 'logo.png'} alt="coin logo" width={64} height={42} />
        <h3 className={styles.coin__title}>{item.unitname1}</h3>
        <div className={`${styles.status} ${item.available ? styles.available : styles.unavailable}`}>{item.available ? 'available':'unavailable'}</div>
      </div>
    ))}
  </div>
  )
}

export default DataItem