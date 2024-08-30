import axios from "axios";

export class Authorization {
    static  url = "";

    static async sendRegistration(name,lastname,email,password) {
        const body = {name,lastname,email,password}
        console.log(body)
        //const response =  await axios.post(this.url);
        //return response
    }

    static async sendAuth(email,password) {
        const body = {email,password}
        //const response =  await axios.post(this.url);
        //return response
    }

}