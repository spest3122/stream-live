import React, { useRef, useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CentralContext from '../../tool/central'
import Header from './header/Header'
import './lobby.scss'
import CarouselSection from './carousel/Carousel'
import TabSection from './tabsection/TabSection'
import Live1 from '../../static/image/live/live1.png'
import Live2 from '../../static/image/live/live2.png'
import Live3 from '../../static/image/live/live3.png'
import Live4 from '../../static/image/live/live4.png'

const Lobby = () => {
    const history = useHistory()
    const lobbyPageRef = useRef(null)
    const { authData } = useContext(CentralContext)
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
            source: Live1,
        },
        {
            id: 2,
            text: '角色',
            source: Live2,
        },
        {
            id: 3,
            text: '動作',
            source: Live3,
        },
        {
            id: 4,
            text: '戰略',
            source: Live4,
        },
        {
            id: 5,
            text: '動作',
            source: Live2,
        },
        {
            id: 6,
            text: '戰略',
            source: Live4, 
        },
    ]

    return (
        <>
            <main ref={lobbyPageRef} className="lobby-page">
                <Header onGoLogin={goLogin} authData={authData}/>
                <main className="content">
                    <CarouselSection />
                    <TabSection />
                </main>
            </main>
            <article className="lobby-live" style={{height: liveHeight}}>
                <ul className="live-ul">
                    { liveList.map((item, index) => {
                        return (<li 
                            className="live-li" 
                            key={'live'+item.id} 
                            onClick={() => history.push('/main/'+item.id)}
                        >
                            <img className="li-image" src={item.source} alt="live" />
                            <p className="li-text">{item.text}</p>
                        </li> )
                    }) }

                </ul>
            </article>
        </>
    )
}

export default Lobby