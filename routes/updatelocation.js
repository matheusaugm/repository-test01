import Marker from "../models/markerModel.js";
import router from './location.js'


router.put('/:id', async (req, res, next) => {
    const { location } = req.body;

    // Verificar se a localização foi fornecida
    if (!location) {
        return res.status(400).json({ message: "Dados incompletos." });
    }

    try {
        // Buscar e atualizar o registro com base no ID
        const updatedMarker = await Marker.findByIdAndUpdate(
            req.params.id,
            { location: location },
            { new: true } // Esta opção garante que o documento retornado seja o documento atualizado
        );

        if (!updatedMarker) {
            return res.status(404).json({ message: "Location não encontrado." });
        }

        res.json(updatedMarker);

    } catch (error) {
        console.error("Erro ao atualizar localização:", error.message);
        next(error);
    }
});

export default router;