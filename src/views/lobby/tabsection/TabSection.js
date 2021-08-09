import React, { useState, useRef, useEffect } from 'react'

const TabSection = () => {
    const [active, setActive] = useState(0)
    const ulList = useRef(null)
    const tabCategoryList = [
        {
            id: 1,
            name: '熱門',
        },
        {
            id: 2,
            name: '角色',
        },
        {
            id: 3,
            name: '動作',
        },
        {
            id: 4,
            name: '戰略',
        },
        {
            id: 5,
            name: '策略',
        },
        {
            id: 6,
            name: '卡牌',
        },
    ]
    useEffect(() => {
        if(active === 0) {
            ulList.current.scrollLeft = 0
        } else {
            ulList.current.scrollLeft = 100
        }
        return () => {}
    }, [active])


    return (
        <section className="content-tabsection">
            <nav className="content-nav">
                <ul className="nav-ul" ref={ulList}>
                    { tabCategoryList.map((item, index) => (
                        <li 
                            className={active === index ? 'active' : ''} 
                            key={'cate'+item.id}
                            onClick={() => setActive(index)}
                        >{item.name}</li>
                    )) }
                </ul>
            </nav>
        </section>
    )
}

export default TabSection