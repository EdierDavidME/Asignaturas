const hbs = require('hbs');
const fs = require('fs');
const express = require('express');
const app = express();


usuariosRegistro = [];

// hbs.registerHelper('listarCursos', () => {
//     // habilitados();
//     let texto = "<table border='2'>\
//    <thead>\
//    <th>id</th>\
//    <th>Nombre</th>\
//    <th>Descripción</th>\
//    <th>Valor</th>\
//    </thead>\
//    <tbody>";

//     let disponibles = cursos.filter(dis => dis.estado == "Disponible");
//     if (disponibles.length == 0) {
//         return ('No hay cursos disponibles');
//     } else {
//         disponibles.forEach(curso => {
//             texto = texto +
//                 '<tr>' +
//                 '<td>' + curso.id + '</td>' +
//                 '<td>' + curso.nombre + '</td>' +
//                 '<td>' + curso.descripcion + '</td>' +
//                 '<td>' + curso.valor + '</td></tr>' +
//                 '<td>' + curso.modalidad + '</td>' +
//                 '<td>' + curso.intensidad + '</td>' +
//                 '<td>' + curso.estado + '</td>';
//         });
//         texto = texto + '</tbody></table>';
//         return texto;
//     };
// });

hbs.registerHelper('crear', (user) => {
    cargarData();
    let User = {
        nombre: user.nombre,
        // rol: user.rol,
        documento: user.documento,
        telefono: user.telefono,
        correo: user.correo
    };
    let duplicado = usuariosRegistro.find(nom => nom.documento == User.documento);
    console.log("Existe: ", duplicado);
    if (!duplicado && User.nombre) {
        usuariosRegistro.push(User);
        console.log("Duplica: ", usuariosRegistro);
        save();
        return (" ha sido registrado exitosamente. ")
    } else {
        return ('no pudo ser registrado. Ya existe otro estudiante registrado con esa cédula');
    }

});

const cargarData = () => {
    try {
        usuariosRegistro = require('../../usuarios.json');
    } catch (error) {
        console.log(error);
        console.log("Error carga");
        usuariosRegistro = [];
    }
}

const save = () => {
    let informacion = JSON.stringify(usuariosRegistro);
    fs.writeFile('./usuarios.json', informacion, 'utf8', (err) => {
        if (err) throw (err);
        console.log(err);
    })
}