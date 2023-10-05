import Marker from "../models/markerModel.js";
import router from "./location.js";

router.post('/', async (req, res, next) => {
    try {
        const newLocation = {
            name: req.body.name,
            location: req.body.location
        };
        console.log(newLocation)
        const result = await Marker.create(newLocation);

        res.status(201).json(result);
    } catch (error) {
        console.error("Erro ao inserir localização:", error.message);
        next(error);
    }
});
export default router;