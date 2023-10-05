import mongoose from 'mongoose';

const markerSchema = new mongoose.Schema({
    name: String,
    location: [Number], // Para representar uma coordenada [latitude, longitude]
});

const Marker = mongoose.model('Marker', markerSchema, 'markers');
export default Marker;
