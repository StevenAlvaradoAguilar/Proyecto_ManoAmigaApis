const { Router } = require('express');
const router = Router();

const users_controllers = require("../controllers/users-controllers");

// Rutas de usuarios
router.get('/api/Users', users_controllers.getUser);

router.get("/api/User_Id/:id", users_controllers.getUserById);

router.post("/api/addUser", users_controllers.insertUser);

router.put("/api/updateUser/:id", users_controllers.updateUser);

router.delete("/api/deleteUser/:id", users_controllers.deleteUserByID);

router.get('/', (req, res) => {
    res.status(200).send('server running successfully!');
});

// Export routes.
module.exports = router;