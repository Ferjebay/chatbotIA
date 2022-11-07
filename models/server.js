 const express = require('express');
const cors = require('cors');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            dialogflow: '/api/dialogflow',
            webhook: '/api/webhook'
        }
        
        //Midlewares
        this.midlewares();
        //Rutas de mi aplicacion
        this.routes();
    }

    midlewares(){
        //CORDS
        this.app.use( cors() );

        //Lectura y Parseo del body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.webhook, require('../routes/webhook'));
        this.app.use(this.paths.dialogflow, require('../routes/dialogflow'));
    }

    listen(){        
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;