import React from 'react'
import styles from './Baner.module.scss'
import { Link } from 'react-router-dom'

const Baner = () => {
    return (
        <section className={styles.baner}>
            <header>
                <h1>
                    <p>Sposób na idalny odpoczynek?</p>
                    <p>Szukasz spokoju i kontaktu z naturą?</p>
                    <p>Mamy to wszystko.</p>
                    <div className={styles.checkUs}>
                        <Link to='/offer'>
                            Sprawdź nas!
                        </Link>
                    </div>
                </h1>
            </header>
        </section>
    )
}

export default Baner
