import React from 'react'
import styles from './AboutShort.module.scss'
import { aboutData } from '../../pages/home/data.js'
import ButtonMore from '../button more/ButtonMore'


const AboutShort = () => {
    const { title, motto, desc, buttonDesc, buttonLink } = aboutData
    return (
        <section className={styles.aboutShort}>

            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.infoBox}>
                    <h3 className={styles.motto}>{motto}</h3>
                    <p className={styles.desc}>{desc}</p>
                    <ButtonMore buttonDesc={buttonDesc} buttonLink={buttonLink} />
                </div>
                <div className={styles.fotoBox}>
                 
                </div>

            </div>
        </section>
    )
}

export default AboutShort
