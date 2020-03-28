const connection = require('../database/connection');
//Não podemos esquecer das bibliotecas inportada anteriormente como a Crypt
const crypto = require('crypto');
module.exports = {
    // Declaramos este como index pois utilizamos para 
    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);

    },


    async create(request,response){
        const{ name, email, whatsapp, city, uf} = request.body;
    const id =  crypto.randomBytes(4).toString('HEX');
    /**
     * A biblioteca crypto e para criptografia mas podemos 
     * utilizar de diversas formas , no exemplo a cima criamos uma cryptografia
     * aleatória com 4 carcteres para EXADECIMAL. e logo em seguida sendo inserida
     * no banco de dados.
     */ 

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,

    });
    /**
     * Este código a cima fazemos a inserção no banco de dados 
     * o comando Async e para realizamarmos em concorrência com a resposta
     * o comando await sera a condição para dar uma resposta ao cliente
     * só será dado um resposta se executar o primeiro códgio após o await
     */

    return response.json({ id });

    /**
     * Logo após o await é dado a resposta aem json
     */
    }

    
}