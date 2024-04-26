import styles from '../assets/css/card.module.css'
import { List } from './list'

import pfp from '../assets/atreides.png'

export function Card() {
    return (
        <article className={styles.card}>
            <img src={pfp} alt="paul atreides, duke off arrakis" />
            <h1>Bernardo Alvim</h1>
            <h2>Belo Horizonte, Brazil</h2>
            <p>"Front-end Developer and manhwa reader at spare time."</p>
            <List nLinks={5}/>
        </article>
    )
}