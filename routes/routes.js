const { Router } = require('express');
const router = Router();

const usuarios_controllers = require("../controllers/usuarios-controllers");

// Rutas de usuarios
router.get("/api/usuarios", usuarios_controllers.getUsuario);

router.get("/api/usuario_Id", usuarios_controllers.getUsuario_x_id);

router.get("/api/addUsuario", usuarios_controllers.insertUsuario);

router.get("/api/updateUsuario", usuarios_controllers.updateUsuario);

router.get('/', (req, res) => {
    res.status(200).send('server running successfully!');
});

// Export routes.
module.exports = router;