import css from "../../styles/ElementsEnter.module.css";
import {InputEnter} from "../UI/Input/InputEnter";
import {useState} from "react";
import {ButtonEnter} from "../UI/Button/ButtonEnter";
import {regularexpressions} from "../utils/regularexpressions";

export const ElementsEnter = ()=>{
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    let flagEmail = regularexpressions(inputEmail,"[^a-zA-Z0-9@.]")
    const flagPassword = regularexpressions(inputPassword,"[^a-zA-Z0-9]")
    let flagDisabled = false;

    if(inputEmail != "" && (inputEmail.indexOf("@") == -1 || inputEmail.indexOf(".") == -1)){
        flagEmail = "1"
    }

    if(flagEmail != null || flagPassword !=null || inputEmail == "" || inputPassword == ""){
        flagDisabled = true;

    }

    return (
        <div className={css.container_elements_enter}>
            <div className={css.container}>
                <InputEnter message={"Email*"} setValue={setInputEmail}/>
                {flagEmail &&
                    <div className={css.error_email}>Поле должно содержать только латинские буквы, цифры и символы @.</div>}
            </div>
            <div className={css.container}>

            <InputEnter message={"Пароль*"} setValue={setInputPassword}/>
                {flagPassword &&
                    <div className={css.error_email}>Поле может содержать только латинские буквы и цифры</div>}
            </div>
            <div className={css.container}>
                <ButtonEnter flagDisabled={flagDisabled} nameButton={"Войти"}/>
            </div>
        </div>
    )
}