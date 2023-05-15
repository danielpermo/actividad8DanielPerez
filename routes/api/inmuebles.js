
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
router.post('/', async (req, res) => {
    try {
        const result = await Inmueble.create(req.body);
        res.json(result);
    } catch {
        res.json({ fatal: error.message });
    }
});

//PUT
router.put('/', async (req, res) => {
    const { inmuebleId } = req.params;
    try {
        const result = await Inmueble.findByIdAndUpdate(
            inmuebleId, req.body, { new: true }
        );
        res.json(result);
    } catch {
        res.json({ fatal: error.message });
    }
});

//DELETE
router.delete('/', async (req, res) => {
    const { inmuebleId } = req.params;

    try {
        const result = await Inmueble.findByIdAndDelete(inmuebleId);

        if (!result) {
            return res.json({ fatal: 'El id del inmuelbe no existe' });
        }

        res.json(result);
    } catch {
        res.json({ fatal: error.message });
    }
});

module.exports = router;
