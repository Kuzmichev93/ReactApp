import css from "../../styles/Header.module.css";

export const HeaderBottom = ({setBorder,value,setValue,setFlag,setFlagEnter,inputDelele,addcss}) =>{
    return (
        <div className={css.bottom}>
            <div className={css.name_site}>AIK</div>
            <div className={css.menu_container}
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
                           setFlag(true);
                           setValue(e.target.value)
                       }}>
                </input>
                <div className={inputDelele.join(" ")} onClick={() => {
                    setFlag(false);
                    setValue("")
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