
export const regularexpressions = (str,arg)=>{
    const rgxp = new RegExp(arg,"g")
    const response = str.match(rgxp)
    return response;
}