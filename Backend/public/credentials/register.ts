const fs = require('fs')
const path = require ('path')
console.log('dirname', __dirname)
const bcryptjs = require ('bcryptjs')

const rutaArchivoJson = path.join(__dirname, '../../database/usuarios.json')


export class Register {

    save(email: string, password: string): void{
       this.escribirJSON(email, password)
       //this.leerJSON()
    }

     leerJSON = async() =>{
        const data = await fs.readFileSync(rutaArchivoJson)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    escribirJSON = async(email: string, password: string) =>{
        const data = await this.leerJSON()
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
    

    emailAcceptable = async(email: string) =>{
        const data = await this.leerJSON()
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

