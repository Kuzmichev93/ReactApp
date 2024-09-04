import css from "../../../styles/Laptop.module.css"
export const Buttonbasket = ()=>{
    return(
        <div className={css.container_button}>
            <div className={css.button_element}>
            <button className={css.button}>В корзину</button>
                </div>
        </div>
    )
}