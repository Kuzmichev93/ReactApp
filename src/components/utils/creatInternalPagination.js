export function creatInternalPagination (data,setData){
    /* Разбивка данных на страницы, для дополнительной загрузки*/
    let array;
    const arrayLaptop =[]
    let limit = 12
    const pages = data.length/limit
    let index = 0;
    for(let i=0; i<pages; i++){
        array = new Array();
        for(let k = index;k<limit;k++){
            array.push(data[k])
            index+=1
        }
        arrayLaptop.push(array)
        limit+=limit;
    }
    if(arrayLaptop.length>0){
        setData(arrayLaptop)

    }
}