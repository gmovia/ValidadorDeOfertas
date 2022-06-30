import { initializeOffers } from '../src/test-driver';
import { processProducts } from '../src/test-driver';

'use strict'
//Importaciones
var validator = require('validator');
import { offers, rules } from '../data/data';
//Usamos las librerias para borrar y la libreria path de node
import { Utils } from '../public/utils/utils'
import { TypeCart } from '../src/type/typeCart'; 
const jwt = require('jsonwebtoken')
var path = require('path');


exports.sendCart = (req: any, res: any) => {

    /*recibo de el json con los productos*/
    const products : TypeCart = req.body as TypeCart

   /*proceso los productos con las ofertes*/
    const state = initializeOffers(offers, rules)
    const productsList = processProducts(state, products[0])
    const list = productsList.map(proProduct => {
        return {
            code: proProduct.getCode(),
            offers: proProduct.getOffersDescriptions(),
            price: proProduct.calculatePrice()
        }
    })
    
    /*devuelvo las ofertas*/
    res.status(200).json(list)

},



    exports.verifyToken = (req, res, next) => {
        var utils = new Utils;
        var userId = req.params.user;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        //console.log(authHeader);

        if (token == null)
            return res.status(401).send("Token requerido");
        jwt.verify(token, process.env.JWT_SECRETO, async (err, user) => {
            const pathFile = path.join(__dirname, '../database/token.json')

            var validateToken = utils.tokenValidate(userId, token, pathFile);
            if (err || await validateToken == false) return res.status(403).send("Token invalido");
            req.user = user;
            next();
        });
    }

