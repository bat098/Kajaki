import React from 'react'
import styles from './Home.module.scss'
import Baner from '../../components/baner/Baner'
import AboutShort from '../../components/about short/AboutShort'
import OfferShort from '../../components/offer short/OfferShort'
import Map from '../../components/map/Map'
import ContactShort from '../../components/contact short/ContactShort'

const Home = () => {
    return (
        <main className={styles.home}>
            <Baner />
            <AboutShort />
            <OfferShort />
            <Map />
            <ContactShort />
        </main>
    )
}

export default Home
