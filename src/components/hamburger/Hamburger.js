import React from 'react'
import styles from './Hamburger.module.scss'


const Hamburger = ({toggleMenu, showNav}) => {



    return (
        <button className={styles.hamburgerButton} onClick={toggleMenu} >
            <div className={showNav ? `${styles.hamburger} ${styles.hamburgerActive}` : `${styles.hamburger} ` }></div>
        </button>

    )
}

export default Hamburger
