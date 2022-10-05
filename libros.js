"use strict";
exports.__esModule = true;
var Books = /** @class */ (function () {
    //constructor    
    function Books(pNombreLibro, pAnioLibro, pGeneroLibro) {
        //parametros    
        this.nombreLibro = pNombreLibro;
        this.anioLibro = pAnioLibro;
        this.generoLibro = pGeneroLibro;
    }
    //metodos
    Books.prototype.getNombreLibro = function () {
        return this.nombreLibro;
    };
    Books.prototype.setNombreLibro = function (nombreLibro) {
        this.nombreLibro = nombreLibro;
    };
    Books.prototype.getAnioLibro = function () {
        return this.anioLibro;
    };
    Books.prototype.setAnioLibro = function (anioLibro) {
        this.anioLibro = anioLibro;
    };
    Books.prototype.getGeneroLibro = function () {
        return this.generoLibro;
    };
    Books.prototype.setGeneroLibro = function (generoLibro) {
        this.generoLibro = generoLibro;
    };
    return Books;
}());
exports["default"] = Books;
var GestorBooks = /** @class */ (function () {
    function GestorBooks(pLibro) {
        this.libro = pLibro;
    }
    GestorBooks.prototype.insertarLibro = function (libro) {
        this.libro.push(libro);
        console.log("insertar el libro" + libro);
    };
    GestorBooks.prototype.consultarLibro = function (pLibro) {
        for (var i = 0; i < this.libro.length; i++) {
            if (pLibro.getNombreLibro() === this.libro[i].getNombreLibro()) {
            }
        }
        console.log("el libro consultado es" + Books);
    };
    GestorBooks.prototype.eliminarLibro = function (pLibro) {
        for (var i = 0; i < this.libro.length; i++) {
            if (pLibro == this.libro[i]) {
                this.libro.splice(i, 1);
            }
        }
        console.log("se elimino el libro " + Books);
    };
    GestorBooks.prototype.modificarLibro = function (pLibro, pNombreLibro) {
        for (var i = 0; i < this.libro.length; i++) {
            if (pLibro == this.libro[i] && this.libro[i].getNombreLibro() != pNombreLibro) {
                this.libro[i].setNombreLibro(pNombreLibro);
            }
        }
    };
    GestorBooks.prototype.leerLibro = function (pLibro) {
        var data;
        for (var i = 0; i < this.libro.length; i++) {
            if (pLibro == this.libro[i]) {
                data = fs.readFileSync('./libreria/textos/' + pLibro.getNombreLibro() + '.txt', 'utf8'),
                    console.log(data);
            }
            ;
        }
    };
    return GestorBooks;
}());
//let librosGen = [GENEROS];
//instaciacion
var book1 = new Books("el principito", 1881, "fantasia");
var book2 = new Books("el poema del mio cid", 1992, "fantasia");
var book3 = new Books("el fantasma de canterville", 1983, "misterio");
var book4 = new Books("el muro", 1991, "aventura");
var libreria = [book1, book2, book3, book4];
var administrar = new GestorBooks(libreria);
administrar.insertarLibro(book1);
console.log(libreria);
var fs = require("fs");
var primerLibro = fs.readFileSync;
fs.leerLibro(primerLibro);
