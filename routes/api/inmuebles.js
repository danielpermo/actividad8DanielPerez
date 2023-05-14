
const router = require('express').Router();
const Inmueble = require('../../model/inmueble.model')

//GET
router.get('/', async (req, res) => {
    try {
        const inmuelbles = await Inmueble.find();
        res.json(inmuelbles);
    } catch {
        res.json({ fatal: error.message });
    }
});

//POST
router.post('/', (req, res) => {
    try {
        console.log('prueba post')
    } catch {
        res.json({ fatal: error.message });
    }
});

//PUT
router.put('/', (req, res) => {
    try {
        console.log('prueba put')
    } catch {
        res.json({ fatal: error.message });
    }
});

//DELETE
router.delete('/', (req, res) => {
    try {
        console.log('prueba delete')
    } catch {
        res.json({ fatal: error.message });
    }
});

module.exports = router;
