const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    inmueble: Number,
    piso: Number,
    letra: String,
    extension_m2: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_contacto: String
}, { timestamps: true, versionKey: false });

module.exports = model('inmueble', productSchema);