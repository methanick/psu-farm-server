const express = require("express")
const router = express.Router()
const { create, list, load, deleted, update } = require("../controllers/blogController")
const { requireLogin } = require("../controllers/authController")

router.post('/blog/create', requireLogin, create)
router.get('/blog', list)
router.get('/blog/:id', load)
router.delete('/blog/:id', requireLogin, deleted)
router.put('/blog/:id', requireLogin, update)

module.exports = router