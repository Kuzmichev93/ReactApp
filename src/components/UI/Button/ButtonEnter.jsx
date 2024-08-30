import css from "../../../styles/ElementsEnter.module.css";

export const ButtonEnter = ({flagDisabled,nameButton,method,body,setFlagEnter})=>{

    const colorButton = [css.button_enter,css.button_active]

    return(
        <div className={css.button_container}>
            <button disabled={flagDisabled} type={"button"}
                    className={flagDisabled?css.button_enter:colorButton.join(" ") }
                    onClick={()=>{
                        method(body.name,body.lastname,
                            body.email,body.password)
                        setFlagEnter(false)
                    }}
                    >{nameButton}</button>
        </div>
    )
}
