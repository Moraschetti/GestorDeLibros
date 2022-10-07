import GENEROS from "../libreria/genlibros";

export class Books{ 
   // atributos
       protected nombreLibro : string; 
       private anioLibro: number;
       private generoLibro: string;
   
   //constructor    
    constructor(pNombreLibro:string,pAnioLibro:number,pGeneroLibro:string){
   //parametros    
      this.nombreLibro = pNombreLibro;
       this.anioLibro = pAnioLibro;
       this.generoLibro = pGeneroLibro;
    }
   //metodos
    getNombreLibro():string{
      return this.nombreLibro;
    }
    setNombreLibro(nombreLibro:string):void{
      this.nombreLibro = nombreLibro;
    }
    getAnioLibro():number{
      return this.anioLibro;
    }
    setAnioLibro(anioLibro:number):void{
      this.anioLibro = anioLibro;
    }
    getGeneroLibro():string{
      return this.generoLibro;
    }
    setGeneroLibro(generoLibro:string):void{
      this.generoLibro = generoLibro;
    }
   }
   
class GestorBooks{
   private libro : Books[];
   
   constructor(pLibro: Books[]){ 
    this.libro = pLibro;
   }
   insertarLibro(libro:Books):void{
      this.libro.push(libro);
      console.log("insertar el libro" + libro);
   }
   
   consultarLibro(pLibro:Books):void{
      for(let i:number = 0; i < this.libro.length; i++){
         if(pLibro.getNombreLibro()===this.libro[i].getNombreLibro()){
         }
     }console.log("el libro consultado es" + Books);
   }

   eliminarLibro(pLibro:Books):void{
      for(let i:number = 0; i < this.libro.length; i++){
         if(pLibro==this.libro[i]){
            this.libro.splice(i,1);
         }
      }console.log("se elimino el libro " + Books);
   }

   modificarLibro(pLibro:Books,pNombreLibro):void{
      for(let i:number = 0; i < this.libro.length; i++){
         if(pLibro==this.libro[i] && this.libro[i].getNombreLibro()!= pNombreLibro){
            this.libro[i].setNombreLibro(pNombreLibro);
         }
      }
   }
   leerLibro(pLibro:Books):void{
      let data: string;
      for(let i:number = 0; i < this.libro.length; i++){
         if(pLibro==this.libro[i]){
            data=fs.readFileSync('./libreria/textos/'+pLibro.getNombreLibro()+'.txt','utf8'),
                  console.log(data);
            };
         }
      }
   }

//let librosGen = [GENEROS];

//instaciacion
let book1: Books = new Books("el principito",1881,"fantasia");
let book2: Books = new Books("el poema del mio cid",1992,"fantasia");
let book3: Books = new Books("el fantasma de canterville",1983,"misterio");
let book4: Books = new Books("el muro",1991,"aventura");

let libreria : Books[] = [book1,book2,book3,book4];

let administrar = new GestorBooks(libreria);
administrar.insertarLibro(book1);
console.log(libreria);

let fs = require("fs");
let primerLibro = fs.readFileSync;



