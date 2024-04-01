"use client"
import { useState } from 'react'

const TabsAbout = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index: number) => {
        setToggleState(index)
    }
    const getActiveClass = (index: number, className: string) => toggleState === index ? className : "";
    return (
        <div>
            <ul className="tab-list flex flex-col">
                <li className={`tabs ${getActiveClass(1, "active-tabs")}`} onClick={() => { toggleTab(1) }}>Soft skills</li>
                <li>
                    <div className={`content ${getActiveClass(1, "active-content")}`}>
                        <h2>
                            Коммуникативность, Дисциплинированность, Самостоятельность и проактивность, Тайм- менеджмент, Стрессоустойчивость
                        </h2>
                    </div>
                </li>
                <li className={`tabs ${getActiveClass(2, "active-tabs")}`} onClick={() => { toggleTab(2) }}>Доп умения</li>
                <li>
                    <div className={`content ${getActiveClass(2, "active-content")}`}>
                        <h2>
                            Владение фотошопом, управление командой, насмотренность
                        </h2>
                    </div>
                </li>
                <li className={`tabs ${getActiveClass(3, "active-tabs")}`} onClick={() => { toggleTab(3) }}>Цели</li>
                <li>
                    <div className={`content ${getActiveClass(3, "active-content")}`}>
                        <h2>
                            В ближайшие планы входит: овладеть до конца реактом, добавить к стеку Nest js, чтобы побыть фулстеком и разобраться как все работает с обеих сторон
                        </h2>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default TabsAbout