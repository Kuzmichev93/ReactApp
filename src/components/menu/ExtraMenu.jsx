import cssEnter from "../../styles/Enter.module.css";
import ccs from "../../styles/Menu.module.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const ExtraMenu = ({extraMenu,setFlagMenu})=>{
    const router = useNavigate()

    const addMenu = [ccs.container, ccs.extra_container]
    const extraElemnts = {"Ноутбуки и компьютеры":[{title:"Ноутбуки",href:"/laptops"},{title:"Компьютеры",href:"/computers"}],
        "Телевизоры, аудио-видео техника":[{title:"Телевизоры",href:"/televisions"},{title:"Аудиотехника",href:"/audio"},
            {title:"Видеотехника",href:"/video"}],
        "Смартфоны и планшеты":[{title:"Смартфоны",href:"/mobile"},{title:"Планшеты",href: "/ipad"}],
        "Техника для дома":[{title:"Стиральные машины",href:"/washing"}]}


    return (
        <div className={addMenu.join(" ")} onClick={(e) => e.stopPropagation()}>
            <div className={cssEnter.icon_closes} onClick={() => setFlagMenu(false)}>
            </div>
            <div className={ccs.list}>
                {extraElemnts[extraMenu].map((e) =>
                    <div key={e.title} className={ccs.list_element}>
                        <span className={ccs.extra_text}
                              onClick={()=>{
                                  router(e.href)
                                  setFlagMenu(false)
                              }}>{e.title}</span>
                    </div>)}
            </div>

        </div>
    )
}