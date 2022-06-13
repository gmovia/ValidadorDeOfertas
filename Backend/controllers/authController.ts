const jwt = require('jsonwebtoken') 
const bcryptjs = require ('bcryptjs')
const dataBase = require('../database/usuarios.json')
const {promisify} = require('util')



//uso para escribir en el archivo json

'use strict'
//Importaciones
var validator = require('validator');
//Usamos las librerias para borrar y la libreria path de node
var fs = require('fs');
var path = require('path');

import {Register} from '../public/credentials/register'
import {Login} from '../public/credentials/login'



//procedimiento para registrarnos

exports.register = async (req: any, res: any)=>{

        const credentials = new Register;
    
        const email = req.body.email
        const password= req.body.password
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        let passwordHash = await bcryptjs.hash(password, 8)

        if(!email || !password || !firstName || !lastName ){
            return res.status(404).send({
                succes: 'false',
                message: 'Incomplete Fields'
            });

        }else {
            var validate =credentials.emailAcceptable(email)
            if(await validate == false){
                return res.status(404).send({
                    succes: 'false',
                    message: 'Invalid Email'
                });

            
           
        }else {
            credentials.save(email, passwordHash, firstName, lastName)
            return res.status(200).send({
                succes: 'true',
                message: 'User Registered in succesfully'
            });
        }

        }

        

    } 

    exports.login = async (req: any, res:any) => {
        try {
            const email = req.body.email
            const password = req.body.password
        

            if(!email || !password){
                return res.status(404).send({
                    succes: 'false',
                    message: 'Incomplete Fields'
                });

            }else {
                const credentials = new Login;
                var validate =credentials.check(email, password)
                
                if(await validate == true){
                   
                    
                    var id = credentials.getId()
                    const token = jwt.sign({id:id},process.env.JWT_SECRETO,{
                        expiresIn: process.env.JWT_TIEMPO_EXPIRA
                    })
                    
                    
                    /*const cookiesOptions = {
                        expires:new Date(Date.now()+ (90)*24*60*60*1000),
                        httpOnly: true
                    }*/
                        return res.status(200).send({
                        succes: 'true',
                        message: 'User Logged in succesfully',
                        data :{
                            usuario: email,
                            token: token 
                        }
                    });
                 } else {
                    return res.status(404).send({
                        succes: 'false',
                        message: 'Invalid email or password'
                    });
                 }
                } 


        }catch (error){

        }
    }