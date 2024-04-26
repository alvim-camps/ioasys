import styles from '../assets/css/list.module.css'
import { Item } from './item'

export function List() {
    return (
        <ul className={styles.list}>
            <Item/>
        </ul>
    )
}
