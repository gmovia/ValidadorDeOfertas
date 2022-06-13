const fs = require('fs')
const path = require ('path')
const bcryptjs = require ('bcryptjs')

const rutaArchivoJson = path.join(__dirname, '../../database/usuarios.json')

var id = 0

export class Login {
  
    

    check(email: string, password: string){
      var validate = this.dataValidation(email, password)
       return validate
    }

     leerJSON = async() =>{
        const data = await fs.readFileSync(rutaArchivoJson)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    dataValidation = async(email: string, password: string) =>{
        const data = await this.leerJSON()
        var validate = false
        

        for(let i=0; i <data.length; i++){
            if (data[i].email == email && (await bcryptjs.compare(password, data[i].password))){
                validate = true
                id = data[i].id
                return validate

            }

        }
        return validate
    }
    
    getId =():number=> {
        return id

    }
  

}

