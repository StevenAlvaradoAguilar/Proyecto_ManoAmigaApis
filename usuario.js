class Usuario{
    constructor(user_id,user_nom,user_cedula,user_apellido1,user_apellido2,user_telefono,user_direccion){
        this.user_id = user_id; 
        this.user_nom = user_nom; 
        this.user_apellido1 = user_apellido1;
        this.user_apellido2 = user_apellido2;
        this.user_telefono = user_telefono;
        this.user_direccion = user_direccion; 
    }
}

module.exports = Usuario;