import styles from '../assets/css/list.module.css'
import { Link } from "./link";

export function Item() {
    const links = [
        {placeholder: "GitHub", url: "https://github.com/alvimdev"},
        {placeholder: "Replit", url: "https://replit.com/@alvimdev"},
        {placeholder: "Linkedin", url: "https://linkedin.com/in/bernardo-alvim"},
        {placeholder: "Instagram", url: "https://instagram.com/alvim_brn"},
        {placeholder: "TikTok", url: "https://tiktok.com/@alvinn.art"},

    ]

    return links.map(({placeholder, url}, i) => {
        return <li key={i} className={styles.item}><Link url={url}>{placeholder}</Link></li>
    })
    
}
