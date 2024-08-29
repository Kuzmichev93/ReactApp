import css from "../../../styles/ElementsEnter.module.css";

export const ButtonEnter = ({flagDisabled,nameButton})=>{

    const colorButton = [css.button_enter,css.button_active]
    return(
        <div className={css.button_container}>
            <button disabled={flagDisabled} type={"button"}
                    className={flagDisabled?css.button_enter:colorButton.join(" ") }
                    >{nameButton}</button>
        </div>
    )
}
