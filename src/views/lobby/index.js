import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from './header/Header'
import CarouselSection from './carousel/Carousel'
import './lobby.scss'

const Lobby = () => {
    const history = useHistory()
    const goLogin = () => {
        history.push('/login')
    }

    return (
        <main className="lobby-page">
            <Header onGoLogin={goLogin}/>
            <main class="content">
                <CarouselSection />
            </main>
        </main>
    )
}

export default Lobby