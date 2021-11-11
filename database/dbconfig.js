const config = {
    user     :'ManoAmiga',
    password :'Mano1234',
    server   :'127.0.0.1',
    database :'ManoAmiga',
    options:{
        trustedconnection: false,
        enableArithAbort : true, 
        encrypt:false
        //instancename :'/'  En caso se tenga alguna instancia
    }
}  

module.exports = config;

