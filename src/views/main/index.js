import React from 'react'
import './main.scss'
import { FaAngleLeft, FaBars, FaArrowAltCircleRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

const Main = () => {
    const history = useHistory()
    return (
        <main className="main-page">
            <header className="header">
                <FaAngleLeft 
                    onClick={() => history.goBack()}
                    className="go-back"
                />
            </header>
            <main className="content">
                <iframe title="stream-live" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </main>
            <footer className="footer">
                <div className="chat-screen">
                    <ol>
                        <li>lany: 3335554</li>
                        <li>vibe: 3335554</li>
                        <li>lany: 3335554</li>
                        <li>lany: 3335554</li>
                        <li>lany: 3335554</li>
                        <li>vibe: 3335554</li>
                        <li>lany: 3335554</li>
                        <li>lany: 3335554</li>
                        <li>lany: 3335554</li>
                    </ol>
                </div>
                <div className="chat-func">
                    <FaBars 
                        onClick={() => console.log(123)}
                        className="chat-more"
                    />
                    <input className="chat-input" />
                    <FaArrowAltCircleRight 
                        onClick={() => console.log(123)}
                        className="chat-send"
                    />
                </div>
            </footer>
        </main>
    )
}

export default Main