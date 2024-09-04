import axios from "axios";

export class LaptopApi {
    static url_product = "http://localhost:8080/api/products"
    static url_page = "http://localhost:8080/api/pagination"
    static url_getp = "http://localhost:8080/api/getpage"
     static  getLaptops() {

         const response =  axios.get(this.url_product)
         return response


    }

    static getLimitIds(){
        const response =  axios.get(this.url_page,{ withCredentials: true })
        return response
    }

    static getLaptop(arrayId){

        const response =  axios.post(this.url_getp,{ids:arrayId})
        return response
    }
}