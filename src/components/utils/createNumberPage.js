
export function createNumberPage(size,setNumber){
    /* Создание номеров страниц*/
    let array_size = []
    for(let key = 0; key < size; key++){
        array_size.push(key+1)
    }
    setNumber(array_size)
}