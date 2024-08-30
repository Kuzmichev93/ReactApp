import cssEnter from "../../styles/Enter.module.css";
import ccs from "../../styles/Menu.module.css";
import {useState} from "react";

export const ExtraMenu = ({extraMenu,setExtraMenu})=>{
    const addMenu = [ccs.container, ccs.extra_container]
    const extraElemnts = {"Ноутбуки и компьютеры":["Ноутбуки","Компьютеры"],
        "Телевизоры, аудио-видео техника":["Телевизоры","Аудиотехника","Видеотехника"],
        "Смартфоны и планшеты":["Смартфоны","Планшеты"],"Техника для дома":["Стиральные машины"]}


    return (
        <div className={addMenu.join(" ")} onClick={(e) => e.stopPropagation()}>
            <div className={cssEnter.icon_closes} onClick={() => setExtraMenu(false)}>
            </div>
            <div className={ccs.list}>
                {extraElemnts[extraMenu].map((e) =>
                    <div key={e} className={ccs.list_element}>
                        <span className={ccs.extra_text}>{e}</span>
                    </div>)}
            </div>

        </div>
    )
}