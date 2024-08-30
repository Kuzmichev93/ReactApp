import css from "../../styles/Header.module.css";
import {useState} from "react";

export const HeaderBottom = ({setBorder,setFlagEnter,setFlagMenu}) =>{
    const [value, setValue] = useState('')


    const addcss = [css.icon_container,css.marg];

    const inputDelele = [css.input_delete]
    const [flag,setFlag] = useState(false);
    if(flag && value.length>0){
        inputDelele.push(css.input_dispaly)
    }

    return (
        <div className={css.bottom}>
            <div className={css.name_site}>AIK</div>
            <div className={css.menu_container}
                 onClick={()=>setFlagMenu(true)}
                 onMouseEnter={(e) => setBorder(e, css.menu_container)}
                 onMouseLeave={(e) => setBorder(e, css.menu_container)}
            >
                <div className={css.icon_menu}></div>
            </div>
            <div className={css.search_container}>
                <div className={css.icon_search}></div>
                <input type={"text"} className={css.input_search}
                       value={value}
                       onChange={(e) => {
                           setValue(e.target.value)
                           setFlag(true)

                       }}

                >
                </input>
                <div className={inputDelele.join(" ")} onClick={() => {
                    setValue('');
                    setFlag(false);
                }}

                ></div>
            </div>
            <div className={addcss.join(" ")}>
                <div className={css.icon_address}></div>
                <div className={css.icon_name}>Адрес</div>
            </div>
            <div className={css.icon_container} onClick={() => setFlagEnter(true)}>
                <div className={css.icon_enter}></div>
                <div className={css.icon_name}>Вход</div>
            </div>
            <div className={css.icon_container}>
                <div className={css.icon_basket}></div>
                <div className={css.icon_name}>Корзина</div>
            </div>
        </div>
    )
}