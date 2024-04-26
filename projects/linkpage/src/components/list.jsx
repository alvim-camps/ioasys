import styles from '../assets/css/list.module.css'
import { Item } from './item'

export function List({nLinks}) {
    return (
        <ul className={styles.list}>
            {Array.from({ length: nLinks }, (_, i) => <Item key={i} index={i} type="a"/>)}
        </ul>
    )
}
