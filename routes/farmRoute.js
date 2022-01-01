const express = require("express")
const router = express.Router()
const { create, list, load, deleted, update } = require("../controllers/farmController")
const { requireLogin } = require("../controllers/authController")

router.post('/farm/create', requireLogin, create)
router.get('/farm', list)
router.get('/farm/:id', load)
router.delete('/farm/:id', requireLogin, deleted)
router.put('/farm/:id', requireLogin, update)

module.exports = router