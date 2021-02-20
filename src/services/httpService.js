import { Axios } from "./index";

export class HttpFactory{
    
    static _instance;
       

   // constructor(){}

    static instance() {
        if (HttpFactory._instance == null) {
            HttpFactory._instance = new HttpFactory();
        }
        return HttpFactory._instance;
    }
    
    
   
    async getMethod(url){

        let response;
        try {
            response  =  await Axios.get(url, { headers: this.getHeader(), cancelToken:  this.getPreviousCall.token });
        } catch(error){
           
        }
       
        return [response.data,null];
    }

}