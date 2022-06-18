import styles from './Header.module.css';
import Link from 'next/link'
import Image  from "next/image";
const Header = () => {
    return ( <div className={styles.header}>
        
        <div className={styles.rightHeader}>
            <h3 className={styles.titr}>مرجع خلاصه کتاب های معتبر جهان</h3>
            <p>مطالعه ی مستمر کتاب با صرف کمی وقت </p>
            <button className={styles.btnHead}><Link href="/allBooks">
    
          مشاهده همه</Link></button>
        </div>
        <div className={styles.leftHeader}>
            <Image  className={styles.imgHeader} src="/assets/images/head.png"     width= '600'
    height= "600" alt="i am reading book"/>
        </div>
        </div> );
}
 
export default Header;