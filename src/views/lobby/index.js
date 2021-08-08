import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from './header/Header'
import './lobby.scss'
import CarouselSection from './carousel/Carousel'
import TabSection from './tabsection/TabSection'


const Lobby = () => {
    const history = useHistory()
    const goLogin = () => {
        history.push('/login')
    }

    return (
        <main className="lobby-page">
            <Header onGoLogin={goLogin}/>
            <main className="content">
                <CarouselSection />
                <TabSection />
            </main>
        </main>
    )
}

export default Lobby