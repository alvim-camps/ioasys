import styles from '../assets/css/list.module.css'
import { Link } from "./link";

export function Item({type, index}) {

    const link = [
        {placeholder: "GitHub", url: "https://github.com/alvimdev"},
        {placeholder: "Replit", url: "https://replit.com/@alvimdev"},
        {placeholder: "Linkedin", url: "https://linkedin.com/in/bernardo-alvim"},
        {placeholder: "Instagram", url: "https://instagram.com/alvim_brn"},
        {placeholder: "TikTok", url: "https://tiktok.com/@alvinn.art"},

    ]

    return (
        <li className={styles.item}>{type == 'a' && <Link placeholder={link[index].placeholder} url={link[index].url}/>}</li>
    )
}
