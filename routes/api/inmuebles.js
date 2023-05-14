
const router = require('express').Router();

//GET
router.get('/', (req, res) => {
    try {
        console.log('prueba get')
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
