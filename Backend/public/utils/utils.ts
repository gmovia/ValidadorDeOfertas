var fs = require('fs');


export class Utils {

    readJSON = async(path:string) =>{
        const data = await fs.readFileSync(path)
        var plainObject = JSON.parse(data)
        
        return plainObject
    }

    tokenValidate = async(email: string, token: any, path: any) =>{
        
        const data = await this.readJSON(path)
        var validate = false
        for(let i=0; i <data.length; i++){
            if (data[i].email == email && data[i].token== token){
                validate = true
                return validate
    
            }
    
        }
        return validate
    }

    writeJson = async(data: any, newData: any, path: any  ) => {
        data.push(newData)
        return fs.writeFileSync(path, JSON.stringify(data, null, 4))


    }

}

