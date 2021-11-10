var config = require('../dbconfig');

//Funcion Async : Asyncrona esta devuelve un objeto
const getUsuario = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        // En .query colocamos la consulta a utilizar en la base de datos
        const response = await pool.query("SELECT * FROM dbo.RegisterUser");
        return res.status(200).send(response.recordsets[0]);
    }
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
}

const getUsuario_x_id = async (user_id) => {
    //console.log(req.body)
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, req.body.user_id)
            .query(`SELECT * from usuario where id_usuario = ${req.body.user_id}`);
            return res.send(product)
        /* let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, user_id)
            .query("SELECT * from dbo.usuario where USER_ID = @input_parameter");
        return product.recordsets; */
    }
    catch (e) {
        console.log(e);
        return res.status(500).send({e})
    }
}

const insertUsuario = async (usuario) => {
    try {
        let pool = await sql.connect(config);
        let insertUser = await pool.request()
            .input('user_id', sql.Int, usuario.user_id)
            .input('user_nom', sql.VarChar, usuario.user_nom)
            .input('user_apellido1', sql.VarChar, usuario.user_apellido1)
            .input('user_apellido2', sql.VarChar, usuario.user_apellido2)
            .input('user_telefono', sql.VarChar, usuario.user_telefono)
            .input('user_direccion', sql.VarChar, usuario.user_direccion)
            .execute('SP_I_USUARIO_01');
        return insertUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

const updateUsuario = async (usuario) => {
    try {
        let pool = await sql.connect(config);
        let updateUser = await pool.request()
        .input('user_id', sql.Int, usuario.user_id)
        .input('user_nom', sql.VarChar, usuario.user_nom)
        .input('user_apellido1', sql.VarChar, usuario.user_apellido1)
        .input('user_apellido2', sql.VarChar, usuario.user_apellido2)
        .input('user_telefono', sql.VarChar, usuario.user_telefono)
        .input('user_direccion', sql.VarChar, usuario.user_direccion)
        .execute('SP_U_USUARIO_01');
        return updateUser.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUsuario,
    getUsuario_x_id,
    insertUsuario,
    updateUsuario
}