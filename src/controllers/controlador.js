//CREANDO VARIABLES

/*let nombreUsuario = "Diego Pérez"
const EDAD_USUARIO = 33
let estaturaUsuario = 1.76
let hinchaDelVerde = true

console.log(nombreUsuario)


console.log(EDAD_USUARIO)*/


//MERCANDO CON EL PROFE
let producto1 = "Arroz"
let producto2 = "Leche"
let producto3 = "Huevos"
let producto4 = "Carne de cerdo"
let producto5 = "Pollo"
let producto6 = "Galletas"
let producto7 = "Panela"
let producto8 = "Café"
let producto9 = "Tapa roja"
let producto10 = "Cerveza"
let producto11 = "Tomate"
let producto12 = "Papas"
let producto13 = "Lechuga"
let producto14 = "Frijoles"
let producto15 = "Aceite"

//ARREGLOS DE DATOS
//UN ARREGLO ES UNA VARIABLE ESPECIAL
//1. ARREGLO TADICIONAL
let numeros = [1,2,8,9,45]
let nombres = ["Juan", "Catalina", "Mario", "Carlos"]
let contagios = [true, false, false, false, true]
//1.1 Accediendo a todos los datos(elementos) de un arreglo
console.log(numeros)
//1.2 Accediendo a un solo elemento del arreglo
console.log(numeros[3])

//2. ARREGLOS ORIENTADOS A OBJETOS ARREGLOS POO
let notas = Array(3.5, 2.8, 3.9, 5)
console.log(notas)
console.log(notas[1])

//3. VARIABLES ESPECIALES PARA GUARDAR VARIOS DATOS DE TIPOS DIFERENTES
//OBJETOS
let persona = {
    nombre: "Diego",
    apellidos: ["Pérez", "Muñoz"],
    edad: 33,
    hinchaDelMejor: true
}
console.log(persona)
//3.2 Accediendo a un solo atributo del objeto
console.log(persona.nombre)
console.log(persona.apellidos[0])
