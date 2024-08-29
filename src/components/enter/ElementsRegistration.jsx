import css from "../../styles/ElementsEnter.module.css";
import {ButtonEnter} from "../UI/Button/ButtonEnter";
import {InputEnter} from "../UI/Input/InputEnter";
import {useState} from "react";
import {regularexpressions} from "../utils/regularexpressions";
export const ElementsRegistration = ()=>{
    const[inputName, setInputName] = useState("");
    const[inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");

    const flagName = regularexpressions(inputName,"[^a-zA-Zа-яА-Я-]")
    const flagLastName = regularexpressions(inputLastName,"[^a-zA-Zа-яА-Я-]")
    let flagEmail = regularexpressions(inputEmail,"[^a-zA-Z0-9@.]")
    const flagPassword = regularexpressions(inputPassword,"[^a-zA-Z0-9]")

    if(inputEmail != "" && (inputEmail.indexOf("@") == -1 || inputEmail.indexOf(".") == -1)){
        flagEmail = "1"
    }
    let flagDisabled = false;

    if(flagEmail != null
        || flagPassword !=null
        || flagName != null
        || flagLastName != null
        || inputName == ""
        || inputLastName == ""
        || inputEmail == ""
        || inputPassword == ""){
        flagDisabled = true;

    }

    return(
        <div className={css.container_elements_registration}>
            <div className={css.container}>
                <InputEnter message={"Имя*"} setValue={setInputName}/>
                {flagName &&
                    <div className={css.error_email}>Поле может содержать только русские, латинские буквы и знак -</div>}
            </div>
            <div className={css.container}>
                <InputEnter message={"Фамилие*"} setValue={setInputLastName}/>
                {flagLastName &&
                    <div className={css.error_email}>Поле может содержать только русские, латинские буквы и знак -</div>}
            </div>
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
                <ButtonEnter nameButton={"Зарегистрироваться"} flagDisabled={flagDisabled}/>
            </div>

        </div>
    )
}