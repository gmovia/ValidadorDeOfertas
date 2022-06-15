//var productos = require('../../products.json')
//var usuarios = require('../../usuarios.json')

const fs = require('fs')
const path = require ('path')
console.log('dirname', __dirname)
const bcryptjs = require ('bcryptjs')

const rutaArchivoUsuariosJson = path.join(__dirname, '../../database/usuarios.json')
const rutaArchivoTokenUsuarioJson = path.join(__dirname, '../../database/token.json')

var id = 0

export class Login {
  
    

    check(email: string, password: string){
      var validate = this.dataValidation(email, password)
       return validate
    }

     leerJSON = async() =>{
        const data = await fs.readFileSync(rutaArchivoUsuariosJson)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    leerTokenJSON = async() =>{
        const data = await fs.readFileSync(rutaArchivoTokenUsuarioJson)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    dataValidation = async(email: string, password: string) =>{
        const data = await this.leerJSON()
        var validate = false
        

        for(let i=0; i <data.length; i++){
            if (data[i].email == email && (await bcryptjs.compare(password, data[i].password))){
                validate = true
                console.log(validate)
                id = data[i].id
                return validate

            }

        }
        return validate
    }
    
    getId =():number=> {
        return id

    }

    escribirTokenJSON = async(id: number, password: string) =>{
        const data = await this. leerTokenJSON()
       for(let i=0; i <data.length; i++){
            if (data[i].id == id){
                console.log('entro')
               data.splice(i)
                }
                

        }
        var lengthData = data.length
        let newData = {
            "id": id,
            "token": password

        }
        data.push(newData)
        console.log(data)
     return fs.writeFileSync(rutaArchivoTokenUsuarioJson, JSON.stringify(data, null ,4))
        
    }

    saveToken(id: number, token: string): void{
        this.escribirTokenJSON(id, token)

       
       
    }
        
     
  

}

