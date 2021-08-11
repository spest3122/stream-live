import React, { useRef, useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CentralContext from '../../tool/central'
import Header from './header/Header'
import './lobby.scss'
import CarouselSection from './carousel/Carousel'
import TabSection from './tabsection/TabSection'

const Lobby = () => {
    const history = useHistory()
    const lobbyPageRef = useRef(null)
    const { isLogin } = useContext(CentralContext)
    const [liveHeight, setLiveHeight] = useState(0)
    useEffect(() => {
        setLiveHeight(window.screen.height - lobbyPageRef.current.clientHeight)
        return () => {}
    }, [])
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
                <Header onGoLogin={goLogin} isLogin={isLogin}/>
                <main className="content">
                    <CarouselSection />
                    <TabSection />
                </main>
            </main>
            <article className="lobby-live" style={{height: liveHeight}}>
                <ul className="live-ul">
                    { liveList.map((item, index) => (
                        <li 
                            className="live-li" 
                            key={'live'+item.id} 
                            onClick={() => history.push('/main/'+item.id)}
                        >
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