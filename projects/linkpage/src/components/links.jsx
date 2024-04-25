import styles from '../assets/css/links.module.css'

export function Links() {
    return (
        <ul className={styles.list}>
            <li className={styles.item}><a href="https://github.com/alvimdev">GitHub</a></li>
            <li className={styles.item}><a href="https://replit.com/@alvimdev">Replit</a></li>
            <li className={styles.item}><a href="https://linkedin.com/in/bernardo-alvim">Linkedin</a></li>
            <li className={styles.item}><a href="https://instagram.com/alvim_brn">Instagram</a></li>
            <li className={styles.item}><a href="https://tiktok.com/@alvinn.art">TikTok</a></li>
        </ul>
    )
}