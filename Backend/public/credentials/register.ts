const fs = require('fs')
const path = require ('path')
const bcryptjs = require ('bcryptjs')
import {Utils} from '../utils/utils'

const rutaArchivoJson = path.join(__dirname, '../../database/usuarios.json')


export class Register {

    save(email: string, password: string, path:any): void{
       this.escribirJSON(email, password, path)
       //this.leerJSON()
    }

   

    escribirJSON = async(email: string, password: string, path:any) =>{
        var utils = new Utils;
        const data = await utils.readJSON(path)
        var lengthData = data.length
        let newData = {
            "id": lengthData + 1,
            "email": email,
            "password": password

        }
        data.push(newData)
        console.log(data)
     return fs.writeFileSync(rutaArchivoJson, JSON.stringify(data, null ,4))
        
    }
    

    emailAcceptable = async(email: string, path:any) =>{
        var utils = new Utils;
        const data = await utils.readJSON(path)
        var validate = true
        

        for(let i=0; i <data.length; i++){
            if (data[i].email == email){
                validate = false
                
                
                return validate

            }

        }
        return validate
    }
  

}

