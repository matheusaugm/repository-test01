import express from 'express';
import Marker from '../models/markerModel.js'; // Ajuste o caminho se necessário

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const markers = await Marker.find({}); // Buscar todos os markers
        const locations = markers.map(marker => marker.location || marker.position); // Extrair location ou position
        res.json(locations);
    } catch (err) {
        res.status(500).send("Erro ao buscar markers: " + err.message);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const marker = await Marker.findById(req.params.id);
        console.log(marker)
        if (!marker) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json(marker);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});



export default router;
