import { initializeOffers } from '../../src/test-driver';
import { processProducts } from '../../src/test-driver';

'use strict'
//Importaciones
var validator = require('validator');
import { offers, rules } from '../../data/data';
//Usamos las librerias para borrar y la libreria path de node
import { Utils } from '../public/utils/utils'
import { TypeCart } from '../../src/type/typeCart';
const jwt = require('jsonwebtoken')
var path = require('path');


exports.sendCart = (req: any, res: any) => {

    /*recibo de roman el json*/
    const products : TypeCart = req.body as TypeCart

    const state = initializeOffers(offers, rules)
    const productsList = processProducts(state, products)
    const list = productsList.map(proProduct => {
        return {
            code: proProduct.getCode(),
            offers: proProduct.getOffersDescriptions(),
            price: proProduct.calculatePrice()
        }
    })

    /*proceso funcion el json con la funcion de guido*/

    
    /*le devuelvo a roman el json con las ofertas*/
    res.status(200).json(list)

},



    exports.verifyToken = (req, res, next) => {
        var utils = new Utils;
        var userId = req.params.user;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log(authHeader);

        if (token == null)
            return res.status(401).send("Token requerido");
        jwt.verify(token, process.env.JWT_SECRETO, async (err, user) => {
            const pathFile = path.join(__dirname, '../../Backend/database/token.json')

            var validateToken = utils.tokenValidate(userId, token, pathFile);
            //console.log(await validateToken);

            if (err || await validateToken == false) return res.status(403).send("Token invalido");
            console.log(user);
            req.user = user;
            next();
        });
    }


/*exports.showProducts = async (req, res) => {
        
    try {
        const dato = [
            {codigo: 1, producto: "leche"}
        ];
        res.json(dato)


    } catch (error){} }*/


exports.showProducts = async (req, res) => {

    try {
        return res.status(200).send({
            succes: 'true',
            message: 'show products correctly',

        })

    } catch (error) {

    }
}
