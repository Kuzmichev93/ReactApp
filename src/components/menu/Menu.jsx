import cssEnter from "../../styles/Enter.module.css"
import ccs from "../../styles/Menu.module.css"
import {useMemo, useState} from "react";
import {ExtraMenu} from "./ExtraMenu";
export const Menu = ({setFlagMenu}) => {
    const extraColor = [ccs.list_element,ccs.list_extra]
    const elements = [
        {title:"Ноутбуки и компьютеры",st:ccs.list_element,ikon:ccs.icon_computer},
        {title:"Телевизоры, аудио-видео техника",st:extraColor.join(" "),ikon:ccs.icon_television},
        {title:"Смартфоны и планшеты",st:extraColor.join(" "),ikon:ccs.icon_mobile},
        {title:"Техника для дома",st:extraColor.join(" "),ikon:ccs.icon_washing}
    ]


    const menu = useMemo(()=>{
        return (
            <div className={ccs.list}>
                {elements.map((e) =>
                    <div className={e.st} key={e.title}>
                        <div className={e.ikon}></div>
                        <span className={ccs.text}
                              onMouseEnter={(e)=>setExtraMenu(e.target.textContent)}
                        >{e.title}
                        </span>
                    </div>
                )}
            </div>
        )
    },[])

    const [extraMenu, setExtraMenu] = useState(false);
    return (
        <div className={cssEnter.enter} onClick={() => setFlagMenu(false)}>
            <div className={ccs.container}
                 onClick={(e) => e.stopPropagation()}>
                <div className={ccs.name}>
                    <h4>Каталог</h4>
                </div>
                <div>{menu}</div>
            </div>
            {extraMenu && <ExtraMenu extraMenu={extraMenu} setExtraMenu={setExtraMenu}/>}

        </div>
    )
}