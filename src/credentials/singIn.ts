var productos = require('../../products.json')
var usuarios = require('../../usuarios.json')

const fs = require('fs')
const path = require ('path')
console.log('dirname', __dirname)

const rutaArchivoJson = path.join(__dirname, '../../usuarios.json')


export class SingIn {

    save(email: string, password: string, firstName: string, lastName:string): void{
       this.escribirJSON(email, password, firstName, lastName)
       //this.leerJSON()
    }

     leerJSON = async() =>{
        const data = await fs.readFileSync(rutaArchivoJson)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    escribirJSON = async(email: string, password: string, firstName: string, lastName:string) =>{
        const data = await this.leerJSON()
        let newData = {
            "email": email,
            "password": password,
            "firstName": firstName,
            "lastName": lastName
        }
        data.push(newData)
        console.log(data)
     return fs.writeFileSync(rutaArchivoJson, JSON.stringify(data, null ,4))
        
    }
    
  

}

