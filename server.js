'use strict';

const express = require('express') ;
const server = express() ;
const PORT = process.env.PORT || 5555 ;
// process.env.PORT ||

server.get('/test' , (request , response ) => {
    response.send('working !!!');
});

server.listen(PORT , () => {
    console.log('helooo');
});



server.use(express.static('./public'));