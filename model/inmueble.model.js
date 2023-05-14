const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    inmueble: String,
    piso: String,
    letra: String,
    extension_m2: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_contacto: String
}, { timestamps: true, versionKey: false });

module.exports = model('product', productSchema);