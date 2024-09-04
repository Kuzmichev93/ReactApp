export function creatInternalPagination (data,setData){
    /* Разбивка данных на страницы, для дополнительной загрузки*/
    let array;
    const arrayLaptop =[]
    let limit;

    if(data.length>12){
        limit = 12
    }
    else{
        limit = data.length
    }

    let pages = Math.floor(data.length/limit)
    const modul = data.length % limit
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
    if(modul>0){
        array = new Array();
        for(let k = index;k<data.length;k++){
            array.push(data[k])

        }
        arrayLaptop.push(array)

    }
    if(arrayLaptop.length>0){
        setData(arrayLaptop)

    }

}