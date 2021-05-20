import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './NotFound.module.scss'
import { ReactComponent as Stop } from '../../images/stop.svg';

const NotFound = () => {
    let location = useLocation();
    return (
        <div className={styles.notFound}>
            <header className={styles.title}>Ups... Coś poszło nie tak</header>
            <p className={styles.desc}>Brak treści do wyświetlenia wskazanego adresu <span><code>{location.pathname}</code></span></p>
            <Stop className={styles.stop}/>

        </div>
    )
}

export default NotFound
