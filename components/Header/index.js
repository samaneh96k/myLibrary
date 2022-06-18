import styles from './Header.module.css';
import Link from 'next/link'
const Header = () => {
    return ( <div className={styles.header}>
        
        <div className={styles.rightHeader}>
            <h3 className={styles.titr}>مرجع خلاصه کتاب های معتبر جهان</h3>
            <p>مطالعه ی مستمر کتاب با صرف کمی وقت </p>
            <button className={styles.btnHead}><Link href="/allBooks">
    
          مشاهده همه</Link></button>
        </div>
        <div className={styles.leftHeader}>
            <img className={styles.imgHeader} src="/assets/images/head.png"></img>
        </div>
        </div> );
}
 
export default Header;