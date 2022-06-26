const fs = require('fs')
import { Utils } from '../utils/utils'
const path = require('path')
const bcryptjs = require('bcryptjs')

const rutaArchivoUsuariosJson = path.join(__dirname, '../../database/usuarios.json')
const rutaArchivoTokenUsuarioJson = path.join(__dirname, '../../database/token.json')

var id = 0

export class Login {



    check= async (email: string, password: string, path:any) => {
        var utils = new Utils;
        const data = await utils.readJSON(path)
        var validate = this.dataValidation(email, password, path)
        return validate
    }

   

    dataValidation = async (email: string, password: string, path:any) => {
        var utils = new Utils;
        const data = await utils.readJSON(path)
     
        var validate = false


        for (let i = 0; i < data.length; i++) {
            if (data[i].email == email && (await bcryptjs.compare(password, data[i].password))) {
                validate = true
                console.log(validate)
                id = data[i].id
                return validate

            }

        }
        return validate
    }

    getId = (): number => {
        return id

    }

    writeTokenJSON = async (email: string, password: string, path: any) => {
        var utils = new Utils;
        const data = await utils.readJSON(path)
        for (let i = 0; i < data.length; i++) {
            if (data[i].email == email) {
                data.splice(i)
            }


        }
        
        let newData = {
            "email": email,
            "token": password

        }

        utils.writeJson(data, newData, path)
        
    }

    saveToken(email: string, token: string, path:any): void {
        this.writeTokenJSON(email, token, path)



    }




}

