import css from '../styles/Laptop.module.css';
import {Buttonbasket} from "../components/UI/Button/Buttonbasket";
import {useEffect, useMemo, useRef, useState} from "react";
import {LaptopApi} from "../API/LaptopApi";
import {Pagination} from "../components/pagination/Pagination";
import {useParams} from "react-router-dom";
import {createNumberPage} from "../components/utils/createNumberPage";
import {creatInternalPagination} from "../components/utils/creatInternalPagination";
export const Laptop = () => {

    const [data,setData] = useState([]);
    const [error,setError] = useState(false);
    const param = useParams();
    let [page,setPage] = useState(1);


    const [extraData,setExtraData] = useState([])
    const [extraPage,setExtraPage] = useState(0);

    const[number, setNumber] = useState([]);
    let [laptopIds,setLaptopIds] = useState();

    useEffect(()=>{
        async function getIds(){
            const response =  await LaptopApi.getLimitIds()
            setLaptopIds(response)
        }
        getIds()


    },[])

    useEffect( () => {

            async function getLaptop() {
                try {
                    //let laptopIds =  await LaptopApi.getLimitIds()
                    let arrayLaptop;
                    if(param.id){
                        setPage(param.id)
                        arrayLaptop = await LaptopApi.getLaptop(laptopIds.data[param.id])
                    }
                    else{
                        arrayLaptop = await LaptopApi.getLaptop(laptopIds.data[page])
                    }

                    if(arrayLaptop.data.length<24){
                        setData(0)
                        setExtraData(arrayLaptop.data)
                    }
                    else{
                        creatInternalPagination(arrayLaptop.data,setData)
                    }

                    const size = laptopIds.headers["size"]
                    createNumberPage(size,setNumber)

                }
                catch (e){
                    if(e.message === "Network Error"){
                        setError(true);
                    }
                }
            }
            getLaptop()


    },[page,laptopIds])

    useEffect(()=>{
        if(data.length>0 && extraPage == 0){
            setExtraData(data[extraPage])
            return
        }
        if(data.length>0 && extraPage < data.length){
            setExtraData([...extraData,...data[extraPage]])

        }


    },[data,extraPage])


    const element = useRef();
    const ob = useRef();

    useEffect(() => {
        if(ob.current){
            ob.current.disconnect();
        }
        let callback = function(entries,observer){

            if(entries[0].isIntersecting && data.length>0 && extraPage<data.length){
                setExtraPage(extraPage+1)
            }
        };
        ob.current = new IntersectionObserver(callback);
        ob.current.observe(element.current)
    }, [extraData]);


    return (
        <div className={css.container}>
            <div className={css.container_laptop}>
                {error && <h4>Страница пустая</h4>}
                {extraData.map((element) =>
                    <div key={element.id} className={css.container_element}>
                        <div className={css.container_img}>
                            <img className={css.element_img} src={element.hrefimg}></img>
                        </div>
                        <div className={css.content}>
                            <div className={css.title}>{element.name}</div>
                            <div className={css.price}>{element.price}</div>
                        </div>
                        <Buttonbasket/>
                    </div>)}

            </div>
            <div ref={element} style={{height: 5}}></div>
            <Pagination paginat={number} page={page} setPage={setPage} setExtraPage={setExtraPage}/>
        </div>

    )
}