import css from '../../styles/Pagination.module.css';
import {useNavigate} from "react-router-dom";
export const Pagination = ({paginat,page,setPage,setExtraPage}) => {
    const url = useNavigate()
    const activButton = [css.button,css.extra_button]


    return (
        <div className={css.container}>
            {paginat.map((e)=><div key={e} className={css.button_container}>
                <button  className={page == e ? activButton.join(" "):css.button}
                        onClick={(e)=> {

                            if (page == e.target.innerText) {
                                return
                            } else {
                                setPage(e.target.innerText)
                                url(`/laptops/${e.target.innerText}`)
                                setExtraPage(0)
                            }
                        }

                }
                >{e}</button>
            </div>)}
        </div>
    )
}