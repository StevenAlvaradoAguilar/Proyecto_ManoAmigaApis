var config = require('../database/dbconfig');
const sql = require('mssql');//Se necesita paquete mssql

//Funcion Async : Asyncrona esta devuelve un objeto
const getUser = async (_req, res) => {
    try {
        let pool = await sql.connect(config);
        // En .query colocamos la consulta a utilizar en la base de datos
        const response = await pool.request().query("SELECT * FROM RegisterUser");
        return res.status(200).send(response.recordsets[0]);
    }
    catch (e) {
        console.log(error);
        return res.status(500).send({ "error": error }); /* 500: internal error */
    }
}


const getUserById = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const result = await pool.request()
            .input('user_id', req.params.user_id)
            .query("SELECT * FROM RegisterUser WHERE id = @user_id");
        return res.status(200).send(result.recordsets);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({error});
    }
}


const insertUser = async (req, res) => {
    const { user_nom,user_apellidos,user_email,user_password } = req.body;

    try {
        let pool = await sql.connect(config);   
        await pool.request()
            .input('user_nom', sql.VarChar(30), user_nom)
            .input('user_apellidos', sql.VarChar(30), user_apellidos)
            .input('user_email', sql.VarChar(320), user_email)
            .input('user_password', sql.VarChar(100), user_password)
            .query('INSERT INTO RegisterUser (_name,lastName,email,password) VALUES (@user_nom,@user_apellidos,@user_email,@user_password)');
        return res.json({ user_nom,user_apellidos,user_email,user_password });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({error});
    }
}

const updateUser = async (req, res) => {
    const { user_nom,user_apellidos,user_email,user_password } = req.body;

    try {
        let pool = await sql.connect(config);
         await pool.request()
            .input('user_nom', sql.VarChar(30), user_nom)
            .input('user_apellidos', sql.VarChar(30), user_apellidos)
            .input('user_email', sql.VarChar(320), user_email)
            .input('user_password', sql.VarChar(100), user_password)
            .input('user_id', req.params.user_id)   
            .query('UPDATE RegisterUser SET _name=@user_nom,lastName=@user_apellidos,email=@user_email,password=@user_password WHERE id = @user_id');
        return res.json({ user_nom,user_apellidos,user_email,user_password });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({error})
    }
}

const deleteUserByID = async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const deleteEvent = await pool.request()
            .input("user_id", req.params.user_id)
            .query('DELETE FROM RegisterUser where id = @user_id');

        if (deleteEvent.rowsAffected[0] === 0) return res.sendStatus(404);
            
        return res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.status(500).send({error})
    }
}

module.exports = {
    getUser,
    getUserById,
    insertUser,
    updateUser,
    deleteUserByID
}