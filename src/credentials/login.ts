var productos = require('../../products.json')
var usuarios = require('../../usuarios.json')

const fs = require('fs')
const path = require ('path')
console.log('dirname', __dirname)

const rutaArchivoJson = path.join(__dirname, '../../usuarios.json')


export class Login {

    check(email: string, password: string): void{
       this.dataValidation(email, password)
       //this.leerJSON()
    }

     leerJSON = async() =>{
        const data = await fs.readFileSync(rutaArchivoJson)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    dataValidation = async(email: string, password: string) =>{
        const data = await this.leerJSON()
        var validos = false

        for(let i=0; i <data.length; i++){
            if (data[i].email == email && data[i].password == password){
                validos = true
                console.log(validos)
                return validos

            }

        }
        console.log(validos)
        console.log('no se encontro')
        
  
        
    }
    
  

}

