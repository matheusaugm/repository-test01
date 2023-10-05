import Marker from '../models/markerModel.js';
import router from './location.js';

router.delete('/:id', async (req, res) => {
    try {
        const marker = await Marker.findByIdAndDelete(req.params.id);
        if (!marker) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.json(marker);
    } catch (err) {
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
});
export default router;