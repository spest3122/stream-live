import React, { useRef, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './header/Header'
import './lobby.scss'
import CarouselSection from './carousel/Carousel'
import TabSection from './tabsection/TabSection'

const Lobby = () => {
    const history = useHistory()
    const lobbyPageRef = useRef(null)
    const [liveHeight, setLiveHeight] = useState(0)
    useEffect(() => {
        setLiveHeight(window.screen.availHeight - lobbyPageRef.current.offsetHeight)
        return () => {}
    }, [])
    // let liveContentHeight = 
    const goLogin = () => {
        history.push('/login')
    }
    const liveList = [
        {
            id: 1,
            text: '熱門',
        },
        {
            id: 2,
            text: '角色',
        },
        {
            id: 3,
            text: '動作',
        },
        {
            id: 4,
            text: '戰略',
        },
        {
            id: 5,
            text: '動作',
        },
        {
            id: 6,
            text: '戰略',
        },
    ]

    return (
        <>
            <main ref={lobbyPageRef} className="lobby-page">
                <Header onGoLogin={goLogin}/>
                <main className="content">
                    <CarouselSection />
                    <TabSection />
                </main>
            </main>
            <article className="lobby-live" style={{height: liveHeight}}>
                <ul className="live-ul">
                    { liveList.map((item, index) => (
                        <li className="live-li" key={'live'+item.id}>
                            <div className="li-image"></div>
                            <p className="li-text">{item.text}</p>
                        </li>
                    )) }

                </ul>
            </article>
        </>
    )
}

export default Lobby